import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-checks',
  templateUrl: './checks.component.html',
  styleUrls: ['./checks.component.css']
})
export class ChecksComponent implements OnInit {

  public paramId: string;
  public viewType: number;
  public callsMade;
  public openRequests = [];
  public completeRequests = [];

  constructor(private api: ApiService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.paramId = this.route.snapshot.paramMap.get('id');
    this.getUserById(this.paramId);
    this.getAllRequestsByUserId(this.paramId);
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
        }
        else if (data.userType.toLowerCase() == 'responder') {
          this.viewType = 0;
        }
      }
    })
  }

  public getAllRequestsByUserId(paramId) {
    const paramObj = {
      paramId: paramId
    }
    this.api.getAllRequestsByUserId(paramObj).subscribe(data => {
      console.log('SERVER RESPONSE: ', data)
      this.openRequests = [];
      this.completeRequests = [];
      for( let i in data.rows ) {
        if (data.rows[i].complete === false) {
          this.openRequests.push(data.rows[i]);
        }
        else {
          this.completeRequests.push(data.rows[i]);
        }
      }
    })
    this.callsMade = true;
  }

}
