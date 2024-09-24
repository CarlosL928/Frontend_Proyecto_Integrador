import { Component, OnInit } from '@angular/core';

import { PacientesService } from '../../services/pacientes.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-pacientes',
 standalone: true,
 imports: [CommonModule, FormsModule],
  providers: [PacientesService, ],
  templateUrl: './pacientes.component.html',
  styleUrl: './pacientes.component.scss'
})
export  class PacientesComponent implements OnInit {

  pacientes: any[] =[];
  documento: string = '';
  nombre: string = '';
  apellido: string = '';
  edad: number | null = null;
  telefono: string = '';
  diagnostico: string = '';
  historiaClinica: string = '';

  constructor(private pacienteService: PacientesService, ) { }

  ngOnInit(): void {
      this.pacienteService.getPacientes().subscribe(data => {
        this.pacientes = data;

      });
    }

      // Verificar si el paciente ya existe por el documento
  pacienteExiste(documento: string): boolean {
    return this.pacientes.some(paciente => paciente.documento === documento);
  }




//Datos solicitados para agregar paciente
agregarPaciente(): void {
  if (this.pacienteExiste(this.documento)) {
    alert('El paciente con este documento ya existe');
    return;
  }

  const paciente = {
    documento: this.documento,
    nombre: this.nombre,
    apellido: this.apellido,
    edad: this.edad,
    telefono: this.telefono,
    diagnostico: this.diagnostico,

  };

  this.pacienteService.addPaciente(paciente).subscribe(data => {
    this.pacientes.push(data);
    this.resetForm();
    alert('Paciente agregado con éxito');
  });
}

resetForm(): void {
  this.documento = '';
  this.nombre = '';
  this.apellido = '';
  this.edad = null;
  this.telefono = '';
  this.diagnostico = '';

}
}
