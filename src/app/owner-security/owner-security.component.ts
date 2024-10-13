import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-owner-security',
  templateUrl: './owner-security.component.html',
  styleUrls: ['./owner-security.component.css']
})
export class OwnerSecurityComponent implements OnInit {
  vehicles = [
    { plate: 'ABC-123', model: 'Toyota Corolla', owner: 'John Doe' },
    { plate: 'XYZ-789', model: 'Honda Civic', owner: 'Jane Smith' },
    { plate: 'JKL-456', model: 'Ford Focus', owner: 'Michael Brown' }
  ];

  alerts = [
    { date: new Date(), type: 'Alerta de Seguridad', description: 'Movimiento detectado en la zona de entrada.' },
    { date: new Date(), type: 'Fallo de Sistema', description: 'Cámara de seguridad desconectada.' }
  ];

  constructor() {}

  ngOnInit(): void {}
}
