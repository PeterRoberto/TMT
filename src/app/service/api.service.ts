import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, from, Observable, throwError } from 'rxjs';
import { retry, catchError, tap } from 'rxjs/operators';
import { Register } from '../modules/register'; 
import { User } from '../modules/login';
import { EditarUsuario } from '../modules/editarUsuario';
// import { Router } from '@angular/router';
 
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // API path
  urlPadrao = 'https://api.avaliacao.siminteligencia.com.br/api';

  private usuarioAutenticado: boolean = false;
  private subjUser$: BehaviorSubject<User> = new BehaviorSubject(null);
  private subjLoggedIn$: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(
    private http: HttpClient,
    ) { }

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  register(user: Register): Observable<Register> { 
    return this.http.post<Register>(`${this.urlPadrao}/registrar`, user); 
  }

  login(credentials: {email: string, password: string}): Observable<Register> {
    return this.http
      .post<Register>(`${this.urlPadrao}/login`, credentials)
      .pipe(
        tap((u: Register) => {
          localStorage.setItem('token', u['token']);
          // localStorage.setItem('token', JSON.stringify(u['token']));
          this.subjLoggedIn$.next(true);  
          this.subjUser$.next(u);
        })
      ) 
  }

  editarUsuario(editUser: EditarUsuario) {
    return this.http.post<EditarUsuario>(`${this.urlPadrao}/v1/editar-usuario`, editUser);
  }


  isAuthenticated(): Observable<boolean> {
    return this.subjLoggedIn$.asObservable();
  }
 
  getUser(): Observable<User> {
    return this.subjUser$.asObservable();
  }

  usuarioEstaAutenticado() {
    return this.usuarioAutenticado;
  }


  logout() {
    localStorage.removeItem('token');
    this.subjLoggedIn$.next(false);
    this.subjUser$.next(null);
  }


  listUsers(user: Register): Observable<Register> { 
    return this.http.post<Register>(`${this.urlPadrao}/v1/usuarios`, user); 
  }

}
