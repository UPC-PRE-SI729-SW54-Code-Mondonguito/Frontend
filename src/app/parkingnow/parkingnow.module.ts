import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';

// Angular Material Modules
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule, MatNativeDateModule } from '@angular/material/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDatepickerModule } from '@angular/material/datepicker';

// ngx-translate
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

// Componentes del módulo ParkingNow
import { RegisterDriverComponent } from './pages/register-driver/register-driver.component';
import { RegisterOwnerComponent } from './pages/register-owner/register-owner.component';
import { DashboardOwnerComponent } from './pages/dashboard-owner/dashboard-owner.component';
import { DashboardDriverComponent } from './pages/dashboard-driver/dashboard-driver.component';
import { ReservationsComponent } from './pages/reservations/reservations.component';
import { PaymentModalComponent } from './pages/payment-modal/payment-modal.component';
import { SupportComponent } from './pages/support/support.component';
import { VehicleTrackingComponent } from './pages/vehicle-tracking/vehicle-tracking.component';
import { NotificationsComponent } from './pages/notifications/notifications.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { LocalRecordsComponent } from './pages/local-records/local-records.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { OwnerNotificationsComponent } from './pages/owner-notifications/owner-notifications.component';
import { OwnerConfigurationComponent } from './pages/owner-configuration/owner-configuration.component';
import { OwnerSecurityComponent } from './pages/owner-security/owner-security.component';
import { OwnerReservationsComponent } from './pages/owner-reservations/owner-reservations.component';

// Rutas específicas del módulo ParkingNow
import { RouterModule, Routes } from '@angular/router';

// Configuración del HttpLoader para las traducciones
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

// Rutas del módulo
const routes: Routes = [
  // Ruta principal para propietarios
  {
    path: 'dashboard-owner',
    component: DashboardOwnerComponent,
    children: [
      { path: '', redirectTo: 'local-records', pathMatch: 'full' },
      { path: 'local-records', component: LocalRecordsComponent },
      { path: 'owner-reservations', component: OwnerReservationsComponent },
      { path: 'owner-security', component: OwnerSecurityComponent },
      { path: 'owner-configuration', component: OwnerConfigurationComponent },
      { path: 'owner-notifications', component: OwnerNotificationsComponent }
    ]
  },
  // Ruta principal para conductores
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
  // Rutas independientes
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'register-driver', component: RegisterDriverComponent },
  { path: 'register-owner', component: RegisterOwnerComponent },
  { path: 'reservations', component: ReservationsComponent },
  { path: 'support', component: SupportComponent },
  { path: 'vehicle-tracking', component: VehicleTrackingComponent },
  { path: 'notifications', component: NotificationsComponent },
  { path: 'settings', component: SettingsComponent }
];

@NgModule({
  declarations: [
    RegisterDriverComponent,
    RegisterOwnerComponent,
    DashboardOwnerComponent,
    DashboardDriverComponent,
    ReservationsComponent,
    PaymentModalComponent,
    SupportComponent,
    VehicleTrackingComponent,
    NotificationsComponent,
    SettingsComponent,
    LocalRecordsComponent,
    ForgotPasswordComponent,
    OwnerNotificationsComponent,
    OwnerConfigurationComponent,
    OwnerSecurityComponent,
    OwnerReservationsComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    MatTableModule,
    MatIconModule,
    MatDialogModule,
    MatSelectModule,
    MatOptionModule,
    MatToolbarModule,
    MatDatepickerModule,
    MatNativeDateModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RegisterDriverComponent,
    RegisterOwnerComponent,
    DashboardOwnerComponent,
    DashboardDriverComponent,
    ReservationsComponent,
    LocalRecordsComponent,
    ForgotPasswordComponent,
    OwnerNotificationsComponent,
    OwnerConfigurationComponent,
    OwnerSecurityComponent,
    OwnerReservationsComponent,
    RouterModule
  ]
})
export class ParkingNowModule {}
