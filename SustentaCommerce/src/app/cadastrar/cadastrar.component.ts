import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../model/Usuario';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {
confirmarSenha: string
user: Usuario = new Usuario

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
    window.scroll(0, 0)
  }
  confirmSenha(event: any){
    this.confirmarSenha = event.target.value
    
  }
  cadastrar() {
if(this.user.senhaUsuario != this.confirmarSenha){
  alert('Senhas incorretas, tente novamente!')
}
else {
  this.auth.cadastrar(this.user).subscribe((resp: Usuario)=>{
    this.user = resp
    this.router.navigate(['/entrar'])
    alert ('Parabéns, usuário cadastrado com sucesso!')
  })
}
  }
}
