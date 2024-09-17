import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SocketService {

  constructor(private socket: Socket) { }

  sendMensaje(msg: string){
    this.socket.emit('llamarPaciente', msg);
  }

  getMensaje(): Observable<any>{
    return this.socket.fromEvent('alertaPaciente');
  }
}
