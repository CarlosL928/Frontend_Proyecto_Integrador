import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "../app.component";



import { AuthService } from "../services/auth.service";
import { SocketService } from "../services/socket.service";
import { PacientesService } from "../services/pacientes.service";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { routes } from "../app.routes";






@NgModule({
  declarations: [

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    RouterModule.forRoot(routes)





  ],

  exports:[
    CommonModule,
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],

  providers: [AuthService, PacientesService, SocketService ],
  bootstrap: []
})

export class AppModule { }
