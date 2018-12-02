import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  loggedIn = false;
  loginForm: FormGroup;

  constructor(
    private auth: AuthenticationService,
    private formBuilder: FormBuilder
  ) {}
  ngOnInit() {
    if (localStorage.getItem('id_token')) {
      this.loggedIn = true;
    }
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.loginForm.invalid) {
      return;
    }
    this.auth.login(
      this.loginForm.controls.email.value,
      this.loginForm.controls.password.value
    );

    if (localStorage.getItem('id_token')) {
      this.loggedIn = true;
    } else {
      this.loggedIn = false;
    }
  }
}
