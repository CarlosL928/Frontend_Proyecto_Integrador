import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { AppModule } from '../../module/app.module';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [  FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  usuario: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) { }


  //funcion para el login del admin
  login(){
    const credentials = { usuario: this.usuario, password : this.password};
    this.authService.login(credentials).subscribe(
      response=> {
      localStorage.setItem('token', response.token);
      alert('Bienvenido');
      this.router.navigate(['/admin']);
        },
      error => {
        alert('Usuario o contraseña incorrecta');
      }
      )

  }

}
