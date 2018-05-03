import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public statement: string;
  public expiry: string;
  public price: number;
  public userId: string;
  public paramId: string;
  public userType: string;
  public fundingAmount: number;
  public showSubmitMessage: boolean;
  public viewType: number;
  public balance: number;
  public goodFunds;
  public callsMade;
  public requestRows = [];

  constructor(private api: ApiService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.paramId = this.route.snapshot.paramMap.get('id');
    this.getUserById(this.paramId);
  }

  public getUserById(paramId) {
    const paramObj = {
      paramId: paramId
    }
    this.api.getUserById(paramObj).subscribe(data => {
      console.log('SERVER RESPONSE: ', data)
      if (data.userType) {
        if (data.userType.toLowerCase() == 'requester') {
          this.viewType = 1;
          this.callsMade = true;
          this.balance = data.balance;
        }
        else if (data.userType.toLowerCase() == 'responder') {
          this.viewType = 0;
          this.getAllOpenRequests();
        }
      }
    })
  }

  public addFunds() {
    const formData = {
      amount: +this.fundingAmount + +this.balance,
      userId: this.paramId
    }
    this.api.addFunds(formData).subscribe(data => {
      console.log('SERVER RESPONSE: ', data)
      this.balance = data.newBalance;
    })
  }

  public getAllOpenRequests() {
    this.api.getAllOpenRequests().subscribe(data => {
      console.log('SERVER RESPONSE: ', data)
      for( let i in data.rows ) {
        this.requestRows.push(data.rows[i]);
      }
    })
    this.callsMade = true;
  }
    
  public formReset() {
    this.showSubmitMessage = false;
  }

  public addRequest() : string {
    const formData = {
      statement: this.statement,
      expiry: this.expiry,
      price: this.price,
      userId: this.paramId,
      currentBalance: this.balance
    }
    if ( +this.price > this.balance ) {
      this.goodFunds = false

    }
    else if ( +this.price < this.balance ) {
      this.goodFunds = true
    }
    if ( this.goodFunds ) {
      this.api.addRequest(formData).subscribe(data => {
        console.log('SERVER RESPONSE: ', data)
        if (data.submitted === true) {
          this.balance = data.balance;
          this.showSubmitMessage = true;
        }
      })
    }
    else {
      console.log(this.price, this.balance)
      alert('Insufficient funds.')
    }
    return;
  }

}
