import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { UserLogin } from '../model/UserLogin';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-entrar',
  templateUrl: './entrar.component.html',
  styleUrls: ['./entrar.component.css']
})
export class EntrarComponent implements OnInit {
userLogin: UserLogin = new UserLogin
  constructor(private auth: AuthService, private router: Router) {

   }

  ngOnInit() {
    window.scroll(0,0)
    localStorage.clear()
  }
entrar() {
this.auth.entrar(this.userLogin).subscribe((resp: UserLogin)=>{
  this.userLogin = resp
  environment.token = this.userLogin.token
  environment.nome = this.userLogin.nome
  environment.email = this.userLogin.usuario
  environment.usuarioVendedor = this.userLogin.usuarioVendedor
  environment.usuarioAdministrador = this.userLogin.usuarioAdministrador
  this.router.navigate(['/produtos'])
  
  
})
}
}
