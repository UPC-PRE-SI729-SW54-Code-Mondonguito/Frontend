import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core'; // Servicio de traducción

@Component({
  selector: 'app-local-records',
  templateUrl: './local-records.component.html',
  styleUrls: ['./local-records.component.css']
})
export class LocalRecordsComponent implements OnInit {
  localForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private translate: TranslateService // Inyectamos el servicio de traducción
  ) {
    // Inicializa el formulario reactivo
    this.localForm = this.fb.group({
      nombreLocal: ['', Validators.required],
      direccion: ['', Validators.required],
      telefono: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      descripcion: ['']
    });

    // Establece el idioma predeterminado
    this.translate.setDefaultLang('es');
  }

  ngOnInit(): void {}

  /**
   * Maneja el envío del formulario
   */
  onSubmit(): void {
    if (this.localForm.valid) {
      // Procesa los datos del formulario
      console.log('Formulario enviado:', this.localForm.value);
      alert('Formulario enviado exitosamente');
    } else {
      alert('Por favor, completa los campos requeridos');
    }
  }

  /**
   * Alterna entre los idiomas disponibles
   */
  switchLanguage(): void {
    const currentLang = this.translate.currentLang || 'es';
    const newLang = currentLang === 'es' ? 'en' : 'es';
    this.translate.use(newLang);
  }
}
