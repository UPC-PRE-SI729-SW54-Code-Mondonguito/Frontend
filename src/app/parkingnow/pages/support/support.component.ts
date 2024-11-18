import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';  // Importar el servicio de traducción

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.css']
})
export class SupportComponent {

  constructor(private translate: TranslateService) {
    // Establecer el idioma predeterminado
    this.translate.setDefaultLang('es');
  }

  // Método para cambiar el idioma
  switchLanguage() {
    const currentLang = this.translate.currentLang;
    const newLang = currentLang === 'es' ? 'en' : 'es';  // Alternar entre español e inglés
    this.translate.use(newLang);
  }
}
