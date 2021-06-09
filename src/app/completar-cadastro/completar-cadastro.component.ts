import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../modules/login';
import { ApiService } from '../service/api.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-completar-cadastro',
  templateUrl: './completar-cadastro.component.html',
  styleUrls: ['./completar-cadastro.component.less']
})
export class CompletarCadastroComponent implements OnInit { 
  
  authenticated$ : Observable<boolean>;
  user$: Observable<User>;
  
  completarCadastro: FormGroup = this.fb.group({
    'nomeSobreNome': ['', [Validators.required]],
    'email': ['', [Validators.required, Validators.email]],
    'telefone': ['', [Validators.required]],
    'ruaAvenida': ['', [Validators.required]],
    'cpf': ['', [Validators.required]],
    'cidade': ['', [Validators.required]],
  }) 

  constructor(
    private apiService: ApiService,
    private router: Router,
    private fb: FormBuilder)
    { 
      this.authenticated$  = this.apiService.isAuthenticated();
      this.user$ = this.apiService.getUser();
    }

  ngOnInit(): void {
    // console.log(this.completarCadastro);
  }

  onSubmit() {

  }

  logout() {  
    this.apiService.logout();
    this.router.navigateByUrl('/login');
  }


  listarUsuarios() {
    
  }
}
