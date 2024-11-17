import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Importar componentes
import { SignInComponent } from './iam/pages/sign-in/sign-in.component';
import { SignUpComponent } from './iam/pages/sign-up/sign-up.component';
import { RegisterDriverComponent } from './parkingnow/pages/register-driver/register-driver.component';
import { RegisterOwnerComponent } from './parkingnow/pages/register-owner/register-owner.component';
import { DashboardDriverComponent } from './parkingnow/pages/dashboard-driver/dashboard-driver.component';
import { ReservationsComponent } from './parkingnow/pages/reservations/reservations.component';
import { SupportComponent } from './parkingnow/pages/support/support.component';
import { VehicleTrackingComponent } from './parkingnow/pages/vehicle-tracking/vehicle-tracking.component';
import { SettingsComponent } from './parkingnow/pages/settings/settings.component';
import { NotificationsComponent } from './parkingnow/pages/notifications/notifications.component';

// Configuración de rutas
const routes: Routes = [
  { path: '', redirectTo: 'sign-in', pathMatch: 'full' }, // Redirección a sign-in por defecto
  { path: 'sign-in', component: SignInComponent }, // Ruta para inicio de sesión
  { path: 'sign-up', component: SignUpComponent }, // Ruta para registro
  { path: 'register-driver', component: RegisterDriverComponent }, // Ruta para registro de conductor
  { path: 'register-owner', component: RegisterOwnerComponent }, // Ruta para registro de dueño de playa
  { path: 'dashboard-driver', component: DashboardDriverComponent }, // Ruta para el dashboard de conductor
  { path: 'reservations', component: ReservationsComponent }, // Ruta para reservas
  { path: 'support', component: SupportComponent }, // Ruta para soporte
  { path: 'vehicle-tracking', component: VehicleTrackingComponent }, // Ruta para seguimiento de vehículos
  { path: 'settings', component: SettingsComponent }, // Ruta para configuración
  { path: 'notifications', component: NotificationsComponent }, // Ruta para notificaciones
  { path: '**', redirectTo: 'sign-in' } // Ruta por defecto en caso de que no coincida ninguna
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
