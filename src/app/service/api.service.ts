import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { User } from '../modules/login';
import { Router } from '@angular/router';
 
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // API path
  urlPadrao = 'https://api.avaliacao.siminteligencia.com.br/api';

  private usuarioAutenticado: boolean = false;

  constructor(
    private http: HttpClient,
    private router: Router
    ) { }

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }


  // Ainda preciso deixar dinâmico
  public fazerLogin(usuario: User) {
    if(usuario.email === 'usuario@email.com' && usuario.password === '123456') {
      this.usuarioAutenticado = true;
      this.router.navigate(['/completar-cadastro']);
    } else {
      this.usuarioAutenticado = false;
    }
  }

  usuarioEstaAutenticado() {
    return this.usuarioAutenticado;
  }

  public saveUser(user: any): Observable<User> {
    return this.http.post<any>(`${this.urlPadrao}/registrar`, user, this.httpOptions);
  }

}
