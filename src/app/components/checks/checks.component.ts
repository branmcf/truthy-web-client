import { Component, OnInit, NgZone } from '@angular/core';
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
  public progressRequests = [];
  public comeon;

  constructor(private api: ApiService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.paramId = this.route.snapshot.paramMap.get('id');
    this.getUserById(this.paramId)
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
          const paramObj = {
            paramId: paramId
          }
            this.api.getAllRequestsByUserId1(paramObj).subscribe(data => {
              console.log('SERVER RESPONSE: ', data)
              this.openRequests = [];
              this.completeRequests = [];
              for( let i in data.rows ) {
                console.log(data.rows[i])
                if (data.rows[i].complete === true) {
                  this.completeRequests.push(data.rows[i]);
                }
                else if (data.rows[i].in_progress === true ) {
                  this.progressRequests.push(data.rows[i]);
                }
                else {
                  this.openRequests.push(data.rows[i]);
                }
              }
              console.log(this.completeRequests, this.progressRequests, this.openRequests);
              this.callsMade = true;
            })
        }
        else if (data.userType.toLowerCase() == 'responder') {
          this.viewType = 0;
          const paramObj = {
            paramId: paramId
          }
            this.api.getAllRequestsByUserId2(paramObj).subscribe(data => {
              console.log('SERVER RESPONSE: ', data)
              this.progressRequests = [];
              this.completeRequests = [];
              for( let i in data.rows ) {
                console.log(data.rows[i])
                if (data.rows[i].complete === true) {
                  this.completeRequests.push(data.rows[i]);
                }
                else if (data.rows[i].in_progress === true ) {
                  this.progressRequests.push(data.rows[i]);
                }
              }
              console.log(this.completeRequests, this.progressRequests, this.openRequests);
              this.callsMade = true;
            })
        }
      }
    })


  }

  public getAllRequestsByUserId1(paramId) {
    const paramObj = {
      paramId: paramId
    }
      this.api.getAllRequestsByUserId1(paramObj).subscribe(data => {
        console.log('SERVER RESPONSE: ', data)
        this.openRequests = [];
        this.completeRequests = [];
        for( let i in data.rows ) {
          console.log(data.rows[i])
          if (data.rows[i].complete === true) {
            this.completeRequests.push(data.rows[i]);
          }
          else if (data.rows[i].in_progress === true ) {
            this.progressRequests.push(data.rows[i]);
          }
          else {
            this.openRequests.push(data.rows[i]);
          }
        }
        console.log(this.completeRequests, this.progressRequests, this.openRequests);
        this.callsMade = true;
      })
  }

  public getAllRequestsByUserId2(paramId) {
    const paramObj = {
      paramId: paramId
    }
      this.api.getAllRequestsByUserId2(paramObj).subscribe(data => {
        console.log('SERVER RESPONSE: ', data)
        this.progressRequests = [];
        this.completeRequests = [];
        for( let i in data.rows ) {
          console.log(data.rows[i])
          if (data.rows[i].complete === true) {
            this.completeRequests.push(data.rows[i]);
          }
          else if (data.rows[i].in_progress === true ) {
            this.progressRequests.push(data.rows[i]);
          }
        }
        console.log(this.completeRequests, this.progressRequests, this.openRequests);
        this.callsMade = true;
      })
  }
}