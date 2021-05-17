import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { CompletarCadastroComponent } from './completar-cadastro/completar-cadastro.component';
import { MaterialModule } from './material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { RegistrarComponent } from './registrar/registrar.component';
import { ApiService } from './service/api.service';
import { AuthGuard } from './guards/auth.guard';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CompletarCadastroComponent,
    RegistrarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([]),
    AppRoutingModule
  ],
  providers: [ApiService, AuthGuard],
  bootstrap: [AppComponent]
}) 
export class AppModule { }
