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

  public usuario: User = new User();

  constructor(private apiService: ApiService) { }
 
  ngOnInit(): void {
    this.usuario = new User();
  }

  onSubmit() {

  } 

  public fazerLogin() :void{
    this.apiService.fazerLogin(this.usuario);
  }
}
