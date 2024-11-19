import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './iam/pages/sign-in/sign-in.component';
import { SignUpComponent } from './iam/pages/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './parkingnow/pages/forgot-password/forgot-password.component';
import { RegisterDriverComponent } from './parkingnow/pages/register-driver/register-driver.component';
import { RegisterOwnerComponent } from './parkingnow/pages/register-owner/register-owner.component';
import { DashboardDriverComponent } from './parkingnow/pages/dashboard-driver/dashboard-driver.component';
import { DashboardOwnerComponent } from './parkingnow/pages/dashboard-owner/dashboard-owner.component';
import { ReservationsComponent } from './parkingnow/pages/reservations/reservations.component';
import { SupportComponent } from './parkingnow/pages/support/support.component';
import { VehicleTrackingComponent } from './parkingnow/pages/vehicle-tracking/vehicle-tracking.component';
import { SettingsComponent } from './parkingnow/pages/settings/settings.component';
import { NotificationsComponent } from './parkingnow/pages/notifications/notifications.component';
import { LocalRecordsComponent } from './parkingnow/pages/local-records/local-records.component';
import { OwnerReservationsComponent } from './parkingnow/pages/owner-reservations/owner-reservations.component';
import { OwnerNotificationsComponent } from './parkingnow/pages/owner-notifications/owner-notifications.component';
import { OwnerSecurityComponent } from './parkingnow/pages/owner-security/owner-security.component';
import { OwnerConfigurationComponent } from './parkingnow/pages/owner-configuration/owner-configuration.component';
import { PageNotFoundComponent } from './public/pages/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'sign-in', component: SignInComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'register-driver', component: RegisterDriverComponent },
  { path: 'register-owner', component: RegisterOwnerComponent },
  { path: 'dashboard-driver', component: DashboardDriverComponent },
  {
    path: 'dashboard-owner',
    component: DashboardOwnerComponent,
    children: [
      { path: 'reservations', component: OwnerReservationsComponent },
      { path: 'notifications', component: OwnerNotificationsComponent },
      { path: 'security', component: OwnerSecurityComponent },
      { path: 'configuration', component: OwnerConfigurationComponent },
      { path: '', redirectTo: 'reservations', pathMatch: 'full' },
    ],
  },
  { path: 'reservations', component: ReservationsComponent },
  { path: 'support', component: SupportComponent },
  { path: 'vehicle-tracking', component: VehicleTrackingComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'notifications', component: NotificationsComponent },
  { path: 'local-records', component: LocalRecordsComponent },
  { path: '', redirectTo: '/sign-in', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }, // Ruta para manejo de 404
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
