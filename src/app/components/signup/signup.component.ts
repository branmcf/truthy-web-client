import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {

  public email: string;
  public password1: string;
  public password2: string;
  public accountType: string;

  constructor(private api: ApiService) { }

  ngOnInit() {
  }

  public submitSignup() :string {
    const formData = {
      email: this.email,
      password: this.password1,
      accountType: this.accountType
    }
    this.api.addUser(formData).subscribe(data => {
      console.log('SERVER RESPONSE: ', data)
    })
    return;
  }
}
