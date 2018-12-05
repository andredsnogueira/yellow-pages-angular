import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/core/services/request.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  companies: any;
  companyForm: FormGroup;
  constructor(
    private request: RequestService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.companyForm = this.formBuilder.group({
      name: ['', Validators.required],
      address: ['', Validators.required],
      contact: ['', Validators.required],
      city: ['', Validators.required],
      postalCode: ['', Validators.required],
      long: ['', Validators.required],
      lat: ['', Validators.required]
    });
    this.request.getCompanies().subscribe(res => (this.companies = res));
  }

  onSubmit() {
    if (this.companyForm.invalid) {
      return;
    }
    this.companies.push({
      name: this.companyForm.controls.name.value,
      address: this.companyForm.controls.address.value,
      contact: this.companyForm.controls.contact.value,
      city: this.companyForm.controls.city.value,
      postalCode: this.companyForm.controls.postalCode.value,
      long: this.companyForm.controls.long.value,
      lat: this.companyForm.controls.lat.value
    });
    this.request
      .postCompany(
        this.companyForm.controls.name.value,
        this.companyForm.controls.address.value,
        this.companyForm.controls.contact.value,
        this.companyForm.controls.city.value,
        this.companyForm.controls.postalCode.value,
        this.companyForm.controls.long.value,
        this.companyForm.controls.lat.value
      )
      .subscribe();
  }

  deleteCompany(id) {
    // TODO: Pop company
    this.request.deleteCompany(id).subscribe();
  }
}
