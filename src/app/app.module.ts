import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Importar módulos de Angular Material
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatDatepickerModule } from '@angular/material/datepicker';  // Importar el módulo de Datepicker
import { MatNativeDateModule } from '@angular/material/core';  // Importar el módulo para fechas nativas

// Importar ngx-translate para la traducción
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

// Importar componentes
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
import { OwnerSecurityComponent } from './owner-security/owner-security.component';
import { NotificationsComponent } from './notifications/notifications.component'; // Declarar el componente de notificaciones
import { LocalRecordsComponent } from './local-records/local-records.component'; // Declarar el componente local-records
import { OwnerReservationsComponent } from './owner-reservations/owner-reservations.component'; // Declarar el componente de reservas del propietario
import { OwnerNotificationsComponent } from './owner-notifications/owner-notifications.component'; // Declarar el componente de notificaciones del propietario
import { OwnerConfigurationComponent } from './owner-configuration/owner-configuration.component'; // Declarar el componente de configuración

// Cargar los archivos de traducción
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    RegisterDriverComponent,
    RegisterOwnerComponent,
    ForgotPasswordComponent,
    DashboardDriverComponent,
    DashboardOwnerComponent,
    ReservationsComponent,
    SupportComponent,
    VehicleTrackingComponent,
    SettingsComponent,
    NotificationsComponent, // Declarar el componente de notificaciones
    LocalRecordsComponent, // Declarar el componente local-records
    OwnerReservationsComponent, // Declarar el componente de reservas del propietario
    OwnerNotificationsComponent, // Declarar el componente de notificaciones del propietario
    OwnerSecurityComponent, // Declarar el componente de seguridad del propietario
    OwnerConfigurationComponent // Declarar el componente de configuración del propietario
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatListModule,
    MatTableModule,
    MatSelectModule,
    MatToolbarModule,
    MatMenuModule,
    MatDatepickerModule,  // Añadir el módulo del Datepicker
    MatNativeDateModule,  // Añadir el módulo de fechas nativas
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
