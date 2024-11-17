import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

// Angular Material Modules
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select'; // Asegúrate de importar MatSelectModule
import { MatOptionModule } from '@angular/material/core'; // Asegúrate de importar MatOptionModule

// ngx-translate
import { TranslateModule } from '@ngx-translate/core';

// Componentes del módulo ParkingNow
import { RegisterDriverComponent } from './pages/register-driver/register-driver.component';
import { RegisterOwnerComponent } from './pages/register-owner/register-owner.component';
import { DashboardDriverComponent } from './pages/dashboard-driver/dashboard-driver.component';
import { ReservationsComponent } from './pages/reservations/reservations.component';
import { PaymentModalComponent } from './pages/payment-modal/payment-modal.component';

// Rutas específicas del módulo ParkingNow
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'register-driver', component: RegisterDriverComponent },
  { path: 'register-owner', component: RegisterOwnerComponent },
  { path: 'dashboard-driver', component: DashboardDriverComponent },
  { path: 'reservations', component: ReservationsComponent } // Ruta para ReservationsComponent
];

@NgModule({
  declarations: [
    RegisterDriverComponent,
    RegisterOwnerComponent,
    DashboardDriverComponent,
    ReservationsComponent, // Declara ReservationsComponent
    PaymentModalComponent // Declara PaymentModalComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TranslateModule, // Para soporte de traducciones
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    MatTableModule,
    MatIconModule,
    MatDialogModule, // Módulo para el modal de Angular Material
    MatSelectModule, // Asegúrate de incluir MatSelectModule
    MatOptionModule, // Asegúrate de incluir MatOptionModule
    RouterModule.forChild(routes) // Agregar enrutamiento específico del módulo
  ],
  exports: [
    RegisterDriverComponent,
    RegisterOwnerComponent,
    DashboardDriverComponent,
    ReservationsComponent, // Exporta ReservationsComponent si es necesario
  ]
})
export class ParkingNowModule {}
