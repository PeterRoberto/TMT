import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component'
import { RegistrarComponent } from './registrar/registrar.component'
import { CompletarCadastroComponent } from './completar-cadastro/completar-cadastro.component'
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

// const routes: Routes = [
//   {path: '', pathMatch: 'full', redirectTo: 'registrar' },
//   {path: 'login', component: LoginComponent},
//   {path: 'registrar', canActivate: [AuthGuard], component: RegistrarComponent},
//   {path: 'completar-cadastro', canActivate: [AuthGuard],component: CompletarCadastroComponent},
// ]; 

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'registrar' },
  {path: 'login', component: LoginComponent},
  {path: 'registrar', component: RegistrarComponent},
  {path: 'completar-cadastro',component: CompletarCadastroComponent},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
