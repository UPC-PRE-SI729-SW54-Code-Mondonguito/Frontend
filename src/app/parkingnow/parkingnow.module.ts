import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http'; // Importar HttpClient para ngx-translate

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
import { MatOptionModule } from '@angular/material/core';
import { MatToolbarModule } from '@angular/material/toolbar';

// ngx-translate
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

// Componentes del módulo ParkingNow
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
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

// Rutas específicas del módulo ParkingNow
import { RouterModule, Routes } from '@angular/router';

// Configuración del HttpLoader para las traducciones
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

// Rutas ajustadas específicamente para ParkingNow
const routes: Routes = [
  { path: 'forgot-password', component: ForgotPasswordComponent }, // Ruta para ForgotPasswordComponent
  { path: 'register-driver', component: RegisterDriverComponent },
  { path: 'register-owner', component: RegisterOwnerComponent },
  { path: 'dashboard-owner', component: DashboardOwnerComponent },
  { path: 'dashboard-driver', component: DashboardDriverComponent },
  { path: 'reservations', component: ReservationsComponent },
  { path: 'support', component: SupportComponent },
  { path: 'vehicle-tracking', component: VehicleTrackingComponent },
  { path: 'notifications', component: NotificationsComponent },
  { path: 'settings', component: SettingsComponent },
  { path: '', redirectTo: 'dashboard-owner', pathMatch: 'full' } // Redirección predeterminada
];

@NgModule({
  declarations: [
    ForgotPasswordComponent, // Declaramos ForgotPasswordComponent
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
        deps: [HttpClient],
      },
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
    RouterModule.forChild(routes), // Configura las rutas para este módulo
  ],
  exports: [
    ForgotPasswordComponent, // Exportamos si se necesita usar fuera del módulo
    RegisterDriverComponent,
    RegisterOwnerComponent,
    DashboardOwnerComponent,
    DashboardDriverComponent,
    ReservationsComponent,
    LocalRecordsComponent,
    RouterModule, // Exportamos RouterModule si es necesario
  ],
})
export class ParkingNowModule {}
