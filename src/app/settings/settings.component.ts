import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  showMore: boolean = false;
  selectedLanguage: string = 'es'; // Idioma seleccionado por defecto
  refundForm: FormGroup;
  theftDescription: string = ''; // Declaración de la variable para la descripción del robo

  constructor(
    private fb: FormBuilder,
    private translate: TranslateService,
    private router: Router
  ) {
    // Inicializar el formulario de reembolso
    this.refundForm = this.fb.group({
      name: [''],
      email: [''],
      reason: ['']
    });
  }

  ngOnInit(): void {
    // Recupera el idioma guardado en localStorage o establece 'es' como predeterminado
    const savedLanguage = localStorage.getItem('selectedLanguage') || 'es';
    this.selectedLanguage = savedLanguage;
    this.translate.use(this.selectedLanguage);

    // Escucha los cambios de la ruta para asegurarse de que el idioma se mantenga
    this.router.events.subscribe(() => {
      const lang = localStorage.getItem('selectedLanguage');
      if (lang) {
        this.translate.use(lang);
      }
    });
  }

  // Cambia el idioma y lo guarda en localStorage
  changeLanguage(lang: string) {
    this.selectedLanguage = lang;
    this.translate.use(lang);
    localStorage.setItem('selectedLanguage', lang); // Guarda la preferencia de idioma en localStorage
  }

  // Alternar entre mostrar más o menos texto
  toggleShowMore() {
    this.showMore = !this.showMore;
  }

  // Método para enviar el formulario de reembolso
  submitRefund() {
    if (this.refundForm.valid) {
      console.log('Formulario enviado:', this.refundForm.value);
    }
  }

  // Método para registrar el robo
  reportTheft() {
    console.log('Descripción del robo:', this.theftDescription);
  }

  // Método para eliminar la cuenta
  deleteAccount() {
    console.log('Cuenta eliminada');
    // Lógica adicional para eliminar cuenta o redirigir
  }
}
