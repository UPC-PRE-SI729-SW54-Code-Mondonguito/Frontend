import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';  // Añadido FormsModule

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
import { MatToolbarModule } from '@angular/material/toolbar';  // Importa MatToolbarModule

// ngx-translate
import { TranslateModule } from '@ngx-translate/core';

// Componentes del módulo ParkingNow
import { RegisterDriverComponent } from './pages/register-driver/register-driver.component';
import { RegisterOwnerComponent } from './pages/register-owner/register-owner.component';
import { DashboardDriverComponent } from './pages/dashboard-driver/dashboard-driver.component';
import { ReservationsComponent } from './pages/reservations/reservations.component';
import { PaymentModalComponent } from './pages/payment-modal/payment-modal.component';
import { SupportComponent } from './pages/support/support.component';
import { VehicleTrackingComponent } from './pages/vehicle-tracking/vehicle-tracking.component';  // Añadido el componente de vehicle-tracking
import { NotificationsComponent } from './pages/notifications/notifications.component';  // Añadido el componente Notifications
import { SettingsComponent } from './pages/settings/settings.component';  // Importar el componente Settings

// Rutas específicas del módulo ParkingNow
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'register-driver', component: RegisterDriverComponent },
  { path: 'register-owner', component: RegisterOwnerComponent },
  { path: 'dashboard-driver', component: DashboardDriverComponent },
  { path: 'reservations', component: ReservationsComponent },
  { path: 'support', component: SupportComponent },
  { path: 'vehicle-tracking', component: VehicleTrackingComponent },
  { path: 'notifications', component: NotificationsComponent },  // Ruta añadida para NotificationsComponent
  { path: 'settings', component: SettingsComponent }  // Añadir ruta para SettingsComponent
];

@NgModule({
  declarations: [
    RegisterDriverComponent,
    RegisterOwnerComponent,
    DashboardDriverComponent,
    ReservationsComponent,
    PaymentModalComponent,
    SupportComponent,
    VehicleTrackingComponent,
    NotificationsComponent,  // Declarado el componente aquí
    SettingsComponent  // Declarar el componente SettingsComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,  // Asegúrate de importar FormsModule aquí para usar ngModel
    TranslateModule,
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
    MatToolbarModule,  // Asegúrate de incluir MatToolbarModule aquí
    RouterModule.forChild(routes)
  ],
  exports: [
    RegisterDriverComponent,
    RegisterOwnerComponent,
    DashboardDriverComponent,
    ReservationsComponent
  ]
})
export class ParkingNowModule {}
