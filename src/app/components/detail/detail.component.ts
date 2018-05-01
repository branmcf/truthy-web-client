import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  public paramId: string;
  public viewType: number;
  public callsMade;
  public request;
  public userId;
  public bids = [];

  constructor(private api: ApiService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.paramId = this.route.snapshot.paramMap.get('id');
    this.getRequestById(this.paramId);
    this.getBidsForRequest(this.paramId);
  }

  public getBidsForRequest(paramId) {
    const paramObj = {
      paramId: paramId
    }
    this.api.getBidsForRequest(paramObj).subscribe(data => {
      console.log('SERVER RESPONSE: ', data)
      this.bids = data.data;
    })

  }

  public deteteRequest() {
    const paramObj = {
      reqId: this.request.request_id
    }
    console.log(paramObj)
    this.api.deleteRequestById(paramObj).subscribe(data => {
      console.log('SERVER RESPONSE: ', data)
    })
    this.router.navigate(['/checks', this.userId]);

  }

  public getRequestById(paramId) {
    const paramObj = {
      paramId: paramId
    }
    this.api.getRequestById(paramObj).subscribe(data => {
      console.log('SERVER RESPONSE: ', data)
      if (data.data.type.toLowerCase() == 'requester') {
        this.viewType = 1;
        this.request = data.data;
        this.userId = data.data.user_id;
        this.callsMade = true;
      }
      else if (data.data.type.toLowerCase() == 'responder') {
        this.viewType = 0;
        this.request = data.data;
        this.callsMade = true;
      }
    })
  }

}
