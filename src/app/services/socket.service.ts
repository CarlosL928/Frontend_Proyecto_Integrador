import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SocketService {

  private socket: Socket;

constructor() {
    this.socket = new Socket({ url: 'http://localhost:3000', options: {} });
  }

  // Método para emitir eventos
  emit(event: string, data: any) {
    this.socket.emit(event, data);
  }

  // Método para escuchar eventos
  on(event: string, callback: (data: any) => void) {
    this.socket.on(event, callback);
  }

  // Método para desconectar el socket
  disconnect() {
    if (this.socket) {
      this.socket.disconnect();
    }
  }
}


