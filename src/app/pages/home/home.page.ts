import { Component } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  constructor(private authService: AuthService) {

  }

  onLogout() {
    this.authService.logout();
  }

  doRefresh(event: any) {
    setTimeout(() => {
      event.target.complete();
    }, 1000);

  }
}
