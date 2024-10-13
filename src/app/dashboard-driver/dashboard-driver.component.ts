import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-dashboard-driver',
  templateUrl: './dashboard-driver.component.html',
  styleUrls: ['./dashboard-driver.component.css']
})
export class DashboardDriverComponent implements OnInit {
  driverName: string = 'Nombre del Conductor';  // Nombre del conductor
  private map: any;

  constructor() {
    // Puedes cargar el nombre del conductor desde un servicio o una API
  }

  ngOnInit(): void {
    this.initMap();
  }

  private initMap(): void {
    this.map = L.map('map').setView([40.7128, -74.0060], 13);  // Nueva York como punto inicial

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);

    const markerData = [
      { lat: 40.7128, lng: -74.0060, name: 'New York' },
      { lat: 34.0522, lng: -118.2437, name: 'Los Angeles' }
    ];

    markerData.forEach(marker => {
      L.marker([marker.lat, marker.lng])
        .addTo(this.map)
        .bindPopup(marker.name)
        .openPopup();
    });
  }
}
