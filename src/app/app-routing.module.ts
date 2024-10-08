import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RegisterDriverComponent } from './register-driver/register-driver.component';
import { RegisterOwnerComponent } from './register-owner/register-owner.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { DashboardDriverComponent } from './dashboard-driver/dashboard-driver.component';
import { DashboardOwnerComponent } from './dashboard-owner/dashboard-owner.component';
import { ReservationsComponent } from './reservations/reservations.component';
import { SupportComponent } from './support/support.component';
import { VehicleTrackingComponent } from './vehicle-tracking/vehicle-tracking.component';
import { SettingsComponent } from './settings/settings.component';
import { NotificationsComponent } from './notifications/notifications.component'; // Importar componente de notificaciones
import { LocalRecordsComponent } from './local-records/local-records.component'; // Importar componente local-records
import { OwnerReservationsComponent } from './owner-reservations/owner-reservations.component'; // Importar componente de reservas del propietario
import { OwnerNotificationsComponent } from './owner-notifications/owner-notifications.component'; // Importar componente de notificaciones del propietario
import { OwnerSecurityComponent } from './owner-security/owner-security.component'; // Importar componente de seguridad del propietario
import { OwnerConfigurationComponent } from './owner-configuration/owner-configuration.component'; // Importar componente de configuración del propietario

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'register-driver', component: RegisterDriverComponent },
  { path: 'register-owner', component: RegisterOwnerComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'dashboard-driver', component: DashboardDriverComponent },
  { path: 'dashboard-owner', component: DashboardOwnerComponent },
  { path: 'reservations', component: ReservationsComponent },
  { path: 'support', component: SupportComponent },
  { path: 'vehicle-tracking', component: VehicleTrackingComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'notifications', component: NotificationsComponent }, // Ruta para el componente de notificaciones generales
  { path: 'local-records', component: LocalRecordsComponent }, // Ruta para Registro de Locales
  { path: 'owner-reservations', component: OwnerReservationsComponent }, // Ruta para reservas del propietario
  { path: 'owner-notifications', component: OwnerNotificationsComponent }, // Ruta para notificaciones del propietario
  { path: 'owner-security', component: OwnerSecurityComponent }, // Ruta para seguridad del propietario
  { path: 'owner-configuration', component: OwnerConfigurationComponent }, // Ruta para configuración del propietario
  { path: '', redirectTo: '/login', pathMatch: 'full' } // Redirección por defecto a login
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
