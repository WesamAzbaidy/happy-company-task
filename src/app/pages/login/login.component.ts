import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../../services/login/authentication.service';
import { ItemsService } from '../../../services/items/items.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(
    private router: Router,
    private authService: AuthenticationService,
    private itemsService: ItemsService
  ) {}

  onLogin() {
    this.itemsService.getItems().subscribe((items) => {
      console.log('Fetched items:', items);
    });
    this.authService.login(this.email, this.password).subscribe(
      (response) => {
        console.log('Login successful', response);
        // Navigate to the dashboard or any other page
        this.router.navigate(['/dashboard']);
        // Optionally fetch items
      },
      (error) => {
        console.error('Login failed', error);
      }
    );
  }
}
