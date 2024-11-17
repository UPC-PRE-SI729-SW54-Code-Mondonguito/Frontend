import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './iam/pages/sign-in/sign-in.component';
import { SignUpComponent } from './iam/pages/sign-up/sign-up.component';

const routes: Routes = [
  { path: '', redirectTo: 'sign-in', pathMatch: 'full' }, // Ruta predeterminada redirige a Sign In
  { path: 'sign-in', component: SignInComponent }, // Ruta para Sign In
  { path: 'sign-up', component: SignUpComponent }  // Ruta para Sign Up
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
