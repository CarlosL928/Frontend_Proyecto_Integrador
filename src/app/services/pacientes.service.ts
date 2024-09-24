import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class PacientesService {
  private apiUrl = 'http://localhost:3000/pacientes';



  constructor(private http: HttpClient) { }

  private getAuthHeaders(): HttpHeaders {
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2ZGE1MGM0YjNlZmRlMTJhNzM5MjM3NyIsImlhdCI6MTcyNTkzNDU2N30.mr_BSn4R113We--1iMD9ZsNSY93swJP1vlp7xYIOlsM'; // Reemplaza con el token del admin de postman
    return new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
  }

  getPacientes(): Observable<any> {
    return this.http.get(this.apiUrl, { headers: this.getAuthHeaders() }).pipe(catchError(this.handleError));
  }

  addPaciente(paciente: any): Observable<any> {
    return this.http.post(this.apiUrl, paciente, { headers: this.getAuthHeaders() }).pipe(catchError(this.handleError));
  }

  updatePaciente(documento: string, paciente: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${documento}`, paciente, { headers: this.getAuthHeaders() }).pipe(catchError(this.handleError));
  }

  deletePaciente(documento: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${documento}`, { headers: this.getAuthHeaders() }).pipe(catchError(this.handleError));
  }

  seanchPaciente(documento: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${documento}`, { headers: this.getAuthHeaders() }).pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'Error desconocido!';
    if (error.error instanceof ErrorEvent) {

      errorMessage = `Error: ${error.error.message}`;
    } else {

      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
