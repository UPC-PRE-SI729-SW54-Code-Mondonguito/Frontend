import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Importar componentes
import { SignInComponent } from './iam/pages/sign-in/sign-in.component';
import { SignUpComponent } from './iam/pages/sign-up/sign-up.component';
import { RegisterDriverComponent } from './parkingnow/pages/register-driver/register-driver.component';
import { RegisterOwnerComponent } from './parkingnow/pages/register-owner/register-owner.component';


const routes: Routes = [
  { path: '', redirectTo: 'sign-in', pathMatch: 'full' }, // Redirección por defecto
  { path: 'sign-in', component: SignInComponent }, // Inicio de sesión
  { path: 'sign-up', component: SignUpComponent }, // Registro
  { path: 'register-driver', component: RegisterDriverComponent }, // Registro de conductor
  { path: 'register-owner', component: RegisterOwnerComponent }, // Registro de dueño de playa
  // Puedes agregar más rutas si es necesario.
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
