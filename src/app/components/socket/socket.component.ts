import { SocketService } from './../../services/socket.service';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-socket',
  standalone: true,
  imports: [],
  templateUrl: './socket.component.html',
  styleUrl: './socket.component.scss'
})
export class SocketComponent implements OnInit, OnDestroy {

  constructor(private SocketService: SocketService) { }

  ngOnInit(): void {
    this.SocketService.on('message', (data: any) => {
      alert(data);
    });
  }

  llamarPaciente(){
    this.SocketService.emit('message', 'Paciente por favor pasar');

      }

      ngOnDestroy(): void {
        this.SocketService.disconnect
      }

}
