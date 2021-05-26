import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { User } from '../modules/login';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Register } from '../modules/register';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.less']
})
export class RegistrarComponent implements OnInit {
  public modelUserLogin: User;
 
  userFormRegister = this.fb.group({
    nome:  ['', [Validators.required]],
    email:  ['', [Validators.required, Validators.email]],
    password:  ['', [Validators.required, Validators.minLength(6)]],
    password_confirmation:  ['', [Validators.required, Validators.minLength(6)]],
  }, {validator: this.matchingPasswords});

  constructor(
    private fb: FormBuilder,
    private apiService: ApiService,
    private snackBar: MatSnackBar,
    private router: Router
    ) { }

  ngOnInit(): void {
    
  }

  matchingPasswords(group: FormGroup) {
    if(group) {
      const password1 = group.controls['password'].value;
      const password2 = group.controls['password_confirmation'].value;

      if(password1 == password2) {
        return null;
      }
    }
    return {matching: false};
  }

  // public createUser() :void{
  //   this.apiService.saveUser(this.userFormRegister.value).subscribe(result => {
  //     console.log(result);
  //     this.userFormRegister.reset();
  //   },
  //   error => {
  //     console.error(error);
  //   })
  // }

  onSubmit() {
    console.log(this.userFormRegister.value);

    let u: Register = {...this.userFormRegister.value, 
      password: this.userFormRegister.value.password };
    this.apiService.register(u)
      .subscribe( 
        (u) => {
          this.snackBar.open(
            'Usuário registrado com sucesso!',
            'Ok', {duration: 2000}
          );
          this.router.navigateByUrl('/login');
        },
        (err) => {
          console.log(err);
          this.snackBar.open(err.error.message,'Ok', {duration: 2000});
        }
      )
  }

}
