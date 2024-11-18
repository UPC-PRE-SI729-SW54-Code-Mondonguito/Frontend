import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-dashboard-driver',
  templateUrl: './dashboard-driver.component.html',
  styleUrls: ['./dashboard-driver.component.css']
})
export class DashboardDriverComponent {
  constructor(private router: Router, private translate: TranslateService) {}

  setLanguage(language: string) {
    this.translate.use(language);
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/logout']);
  }
}
