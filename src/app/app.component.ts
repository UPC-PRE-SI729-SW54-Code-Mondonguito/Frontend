import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private translate: TranslateService) {
    // Define los idiomas disponibles
    this.translate.addLangs(['en', 'es']);
    // Establece el idioma predeterminado
    this.translate.setDefaultLang('en');

    // Cambiar al idioma almacenado o usar el predeterminado
    const browserLang = this.translate.getBrowserLang();
    this.translate.use(browserLang && browserLang.match(/en|es/) ? browserLang : 'en');
  }
}
