import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { User } from '../modules/login';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.less']
})
export class RegistrarComponent implements OnInit {
  public modelUserLogin: User;
  public userFormRegister: FormGroup;

  constructor(
    private fb: FormBuilder,
    private apiService: ApiService
    ) { }

  ngOnInit(): void {
    this.userFormRegister = this.fb.group({
      nome:  ['', [Validators.required]],
      email:  ['', [Validators.required]],
      password:  ['', [Validators.required]],
      password_confirmation:  ['', [Validators.required]],
    });
  }

  public createUser() :void{
    this.apiService.saveUser(this.userFormRegister.value).subscribe(result => {
      console.log(result);
      this.userFormRegister.reset();
    },
    error => {
      console.error(error);
    })
  }

}
