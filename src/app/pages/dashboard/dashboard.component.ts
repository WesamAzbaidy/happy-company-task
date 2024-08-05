import { Component } from '@angular/core';
import { ItemsService } from '../../../services/items/items.service';
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  requests = [];
  constructor() {}
  ngOnInit() {
    // this.requestService.getRequest().subscribe((data: any) => {
    //   this.requests = data;
    // });
  }
}
