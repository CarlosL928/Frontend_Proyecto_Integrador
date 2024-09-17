import { Component, OnInit } from '@angular/core';
import { PacientesService } from '../../services/pacientes.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [ CommonModule, FormsModule,  ],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent implements OnInit {

  pacientes: any[] = [];
  selectedPaciente: any = null;
  documento: string = '';
  //Se inyecta el pacientesService
  constructor(private pacienteService: PacientesService) { }

// Funcion para obtener pacientes
  ngOnInit(): void {
    this.pacienteService.getPacientes().subscribe(
      data => {
        this.pacientes = data;
      },
      error => {
        console.error('Error fetching pacientes:', error);
      }
    );
  }

// Funcion para elimiar paciente
  deletePaciente(documento: string): void {
    this.pacienteService.deletePaciente(documento).subscribe(
      () => {
        this.pacientes = this.pacientes.filter(p => p.documento !== documento);
      },
      error => {
        console.error('Error deleting paciente:', error);
      }
    );
  }

  //se clona para modificarlo luego de seleccionar
  selectPaciente(paciente: any): void {
    this.selectedPaciente = { ...paciente };
  }

  //Se actualizan los datos seleccionados
  updatePaciente(): void {
    if (this.selectedPaciente) {
      this.pacienteService.updatePaciente(this.selectedPaciente.documento, this.selectedPaciente).subscribe(
        data => {
          const index = this.pacientes.findIndex(p => p.documento === this.selectedPaciente.documento);
          if (index !== -1) {
            this.pacientes[index] = data;
          }
          this.selectedPaciente = null;
          alert('Datos del paciente actualizados correctamente')
        },

        error => {
          console.error('Error Actualizando datos del paciente:', error);
        }
      );
    }
  }





}
