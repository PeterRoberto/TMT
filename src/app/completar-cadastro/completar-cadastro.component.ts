import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-completar-cadastro',
  templateUrl: './completar-cadastro.component.html',
  styleUrls: ['./completar-cadastro.component.less']
})
export class CompletarCadastroComponent implements OnInit { 

  constructor(
    private apiService: ApiService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }


  logout() {  
    this.apiService.logout();
    this.router.navigateByUrl('/login');
  }
}
