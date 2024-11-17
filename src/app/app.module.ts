import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Importa ngx-translate y sus dependencias
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

// Importa los módulos correspondientes
import { IamModule } from './iam/iam.module';
import { ParkingNowModule } from './parkingnow/parkingnow.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Importa los módulos de Angular Material
import { MatSelectModule } from '@angular/material/select'; // Para mat-select
import { MatFormFieldModule } from '@angular/material/form-field'; // Para mat-form-field
import { MatInputModule } from '@angular/material/input'; // Para matInput
import { MatButtonModule } from '@angular/material/button'; // Para botones
import { MatIconModule } from '@angular/material/icon'; // Para iconos
import { MatOptionModule } from '@angular/material/core'; // Asegúrate de incluir este módulo para mat-option
import { MatTableModule } from '@angular/material/table'; // Para tablas

export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    IamModule,
    ParkingNowModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatOptionModule,  // Mantén MatOptionModule para mat-option
    MatTableModule, // Si usas tablas
    // Configura ngx-translate
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      },
      defaultLanguage: 'es', // Idioma por defecto
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
