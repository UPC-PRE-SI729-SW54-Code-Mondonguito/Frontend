import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http'; // Para ngx-translate
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

// Importar los componentes
import { SignInComponent } from './iam/pages/sign-in/sign-in.component';
import { SignUpComponent } from './iam/pages/sign-up/sign-up.component';
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

// Configuración para ngx-translate
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

// Configuración de rutas
const routes: Routes = [
  // Ruta inicial
  { path: '', redirectTo: 'sign-in', pathMatch: 'full' },

  // Rutas de autenticación
  { path: 'sign-in', component: SignInComponent },
  { path: 'sign-up', component: SignUpComponent },

  // Rutas de registro
  { path: 'register-driver', component: RegisterDriverComponent },
  { path: 'register-owner', component: RegisterOwnerComponent },

  // Dashboard del conductor
  {
    path: 'dashboard-driver',
    component: DashboardDriverComponent,
    children: [
      { path: '', redirectTo: 'reservations', pathMatch: 'full' },
      { path: 'reservations', component: ReservationsComponent },
      { path: 'vehicle-tracking', component: VehicleTrackingComponent },
      { path: 'notifications', component: NotificationsComponent },
      { path: 'settings', component: SettingsComponent }
    ]
  },

  // Dashboard del dueño
  {
    path: 'dashboard-owner',
    component: DashboardOwnerComponent,
    children: [
      { path: '', redirectTo: 'local-records', pathMatch: 'full' },
      { path: 'local-records', component: LocalRecordsComponent },
      { path: 'owner-reservations', component: ReservationsComponent },
      { path: 'owner-security', component: VehicleTrackingComponent },
      { path: 'owner-configuration', component: SettingsComponent },
      { path: 'owner-notifications', component: NotificationsComponent }
    ]
  },

  // Rutas generales
  { path: 'support', component: SupportComponent },

  // Logout
  { path: 'logout', redirectTo: 'sign-in', pathMatch: 'full' },

  // Ruta por defecto
  { path: '**', redirectTo: 'sign-in' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { useHash: true }), // Soporte para navegadores viejos
    HttpClientModule, // Necesario para ngx-translate
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  exports: [RouterModule, TranslateModule]
})
export class AppRoutingModule {}
