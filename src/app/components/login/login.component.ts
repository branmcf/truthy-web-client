import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public email: string;
  public password: string;

  constructor(private api: ApiService, private router: Router) { }

  ngOnInit() {
  }

  public submitLogin() : string {
    const formData = {
      email: this.email,
      password: this.password,
    }
    try {
      this.api.loginUser(formData).subscribe(data => {
        // console.log('SERVER RESPONSE: ', data)
        if (data.isAuthenticated === true && data.userId) {
            this.router.navigate(['../', 'home', data.userId]);
        }
      }, error => alert('Login Error'))
    }
    catch (e) {
      alert('Login Error')
    }
    return;
  }

}
