import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Importa ngx-translate y sus dependencias
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

// Importa el módulo de IAM
import { IamModule } from './iam/iam.module';

// Configuración del cargador de traducciones
export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent // Declara solo AppComponent aquí
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    IamModule, // Importa el módulo IAM
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      },
      defaultLanguage: 'es' // Idioma predeterminado
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
