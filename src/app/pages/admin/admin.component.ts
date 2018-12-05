import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/core/services/request.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  companies: any;
  constructor(private request: RequestService) {}

  ngOnInit() {
    this.request.getCompanies().subscribe(res => (this.companies = res));
  }
}
