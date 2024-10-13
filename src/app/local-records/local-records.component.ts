import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-local-records',
  templateUrl: './local-records.component.html',
  styleUrls: ['./local-records.component.css']
})
export class LocalRecordsComponent implements OnInit {

  localForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.localForm = this.fb.group({
      nombreLocal: ['', Validators.required],
      direccion: ['', Validators.required],
      telefono: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      descripcion: ['']
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.localForm.valid) {
      // Procesar el formulario aquí
      console.log('Formulario enviado', this.localForm.value);
    }
  }
}
