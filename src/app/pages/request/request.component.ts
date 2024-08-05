import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TableModule } from 'primeng/table';
import { RequestService } from '../../../services/admin/requests/request.service';

@Component({
  selector: 'app-request',
  standalone: true,
  imports: [CommonModule, TableModule],
  templateUrl: './request.component.html',
  styleUrl: './request.component.css',
})
export class RequestComponent implements OnInit {
  requests = [];
  constructor(private requestService: RequestService) {}
  ngOnInit() {
    this.requestService.getRequest().subscribe((data: any) => {
      this.requests = data;
    });
  }
}
