import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Router } from '@angular/router';
import {
  DASHBOARD_ICON,
  USERS_ICON,
  REQUESTS_ICON,
  WAREHOUSE_ICON,
} from './icons';
@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  sidebarVisible1: boolean = true;
  isOpen = false;
  navItems: { link: string; name: string; icon: SafeHtml }[] = [];

  constructor(private sanitizer: DomSanitizer, private router: Router) {
    this.navItems = [
      {
        link: '/dashboard',
        name: 'Dashboard',
        icon: this.sanitizer.bypassSecurityTrustHtml(DASHBOARD_ICON),
      },
      {
        link: '/users',
        name: 'Users',
        icon: this.sanitizer.bypassSecurityTrustHtml(USERS_ICON),
      },
      {
        link: '/requests',
        name: 'Requests',
        icon: this.sanitizer.bypassSecurityTrustHtml(REQUESTS_ICON),
      },
      {
        link: '/warehouse',
        name: 'Warehouse',
        icon: this.sanitizer.bypassSecurityTrustHtml(WAREHOUSE_ICON),
      },
    ];
  }

  navigate(link: string) {
    this.router.navigate([link]);
  }

  logout() {
    this.router.navigate(['login']);
  }
}
