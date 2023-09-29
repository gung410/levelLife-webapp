import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Route, Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AuthenticationService } from 'src/app/services/authenticate.service';
import { finalize } from 'rxjs';
import { UserLoginInfoDto } from 'src/app/models/loginModelDTO';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  @Input() error?: string | null;
  @Output() submitEM = new EventEmitter();

  username: string = '';
  password: string = '';

  form: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(
    private router: Router,
    private auth: AuthenticationService,
    ) {

  }
  onSubmit() {
    if (!this.form.valid) {
      alert('Invalid credentials');
    }
    this.submitEM.emit(this.form.value);
    this.username = this.form.value.username
    this.password = this.form.value.password
    const infoLogin = new UserLoginInfoDto
    infoLogin.UserName = this.username
    infoLogin.PassWord = this.password
    this.auth.login(infoLogin).pipe(
      finalize(() => {
        alert('faill')
      })
    ).subscribe((loginInfo) => {
      console.log(loginInfo)
    }, (error) => {
      alert(error)
    })
    return
    if (this.username === 'hung' && this.password === '1') {
          this.router.navigate(['/home']);
      } else {
          alert('Invalid credentials');
      }
    console.log(this.form)
  }
}
