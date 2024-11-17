import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';  // Importar TranslateService

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent {

  // Define la variable 'lugares' como un arreglo de objetos
  lugares = [
    { nombre: 'Lima Centro - Cerca de la playa', seleccionado: false },
    { nombre: 'Miraflores - Parque Kennedy', seleccionado: false },
    { nombre: 'Barranco - Estacionamiento Central', seleccionado: false }
  ];

  constructor(private translate: TranslateService) { }

  // Función que maneja el cambio en los lugares favoritos
  onFavoriteChange(index: number): void {
    this.lugares[index].seleccionado = !this.lugares[index].seleccionado;
    console.log(`Lugar favorito cambiado: ${this.lugares[index].nombre}, seleccionado: ${this.lugares[index].seleccionado}`);
  }

  // Función para cambiar el idioma
  switchLanguage(): void {
    const currentLang = this.translate.currentLang;
    const newLang = currentLang === 'es' ? 'en' : 'es';  // Alternar entre español e inglés
    this.translate.use(newLang);
    localStorage.setItem('selectedLanguage', newLang); // Guarda la preferencia de idioma en localStorage
  }
}
