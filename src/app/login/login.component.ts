import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../service/api.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { User } from '../modules/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {

  // public usuario: User = new User();

  loginForm: FormGroup = this.fb.group({
    'email': ['', [Validators.required, Validators.email]],
    'password': ['', [Validators.required, Validators.minLength(6)]],
  })

  constructor(
    private fb: FormBuilder,
    private apiService: ApiService,
    private router: Router,
    private snackBar: MatSnackBar
    
    ) { }
 
  ngOnInit(): void {
    // this.usuario = new User();
  }

  onSubmit() {
    const credentials = this.loginForm.value;
    this.apiService.login(credentials)
      .subscribe(
        (user) => {
          console.log(user); 
          this.snackBar.open(
            'Logado com sucesso, seja bem vindo! ' + user.nome + '!', 'OK', 
            {duration: 25000});
          this.router.navigateByUrl('/completar-cadastro');
        },
        (err) => {
          console.log(err);
          this.snackBar.open('Erro no login', 'OK', {duration: 2000});
        }
      )
  } 

  // public fazerLogin() :void{
  //   this.apiService.fazerLogin(this.usuario);
  // }
}
