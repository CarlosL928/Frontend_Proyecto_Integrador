import { Component, OnDestroy, OnInit } from '@angular/core';

import { PacientesService } from '../../services/pacientes.service';
import { SocketService } from '../../services/socket.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { error } from 'node:console';
import { SocketComponent } from '../socket/socket.component';


@Component({
  selector: 'app-pacientes',
 standalone: true,
 imports: [CommonModule, FormsModule, SocketComponent],
  providers: [PacientesService, SocketService, SocketComponent ],
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
  historiaClinica: string = '';

  constructor(private pacienteService: PacientesService, ) { }







  ngOnInit(): void {
      this.pacienteService.getPacientes().subscribe(data => {
        this.pacientes = data;
      });


  /*this.socketService.getMensaje().subscribe((message: string) =>{
    alert(`Paciente ${message} por favor pasar`)
  });*/
}

//Datos solicitados para agregar paciente
agregarPaciente(): void{
  const paciente = {
    documento: this.documento,
    nombre: this.nombre,
    apellido: this.apellido,
    edad: this.edad,
    telefono: this.telefono,
    historiaClinica: this.historiaClinica
  };
  this.pacienteService.addPaciente(paciente).subscribe(data => {
    this.pacientes.push(data);
    });

    if (this.documento === this.documento || this.nombre === this.nombre|| this.apellido === this.apellido || this.edad === this.edad ){
      alert('El paciente ya existe');
    } else {
      alert('Paciente agregado con exito');
    }
 }

}

