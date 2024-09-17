import { Routes } from "@angular/router";
import { LoginComponent } from "./components/login/login.component";
import { AdminComponent } from "./components/admin/admin.component";
import { PacientesComponent } from "./components/pacientes/pacientes.component";


export const routes: Routes = [
  {

    path: '',
    component: PacientesComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'admin',
    component: AdminComponent

  }

];
