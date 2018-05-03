import { Component, OnInit, NgZone } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';
import { nmcall } from 'q';

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
  public resourceId;
  public bids = [];
  public inProgress: boolean;
  public corpus: string = '';
  public requesterId;

  constructor(private api: ApiService, private route: ActivatedRoute, private router: Router, private zone:NgZone) { }

  ngOnInit() {
    this.paramId = this.route.snapshot.paramMap.get('id');
    this.resourceId = this.route.snapshot.paramMap.get('resource_id');
    this.getRequestById(this.paramId, this.resourceId);
    this.getBidsForRequest(this.paramId);
  }

  public markInProgress () {
    const paramObj = {
      requesterId: this.requesterId,
      responderId: this.userId,
      requestId: this.resourceId
    }
    this.api.markInProgress(paramObj).subscribe(data => {
      console.log('SERVER RESPONSE: ', data)
      this.inProgress = true;
    })
  }

  public saveWork(corpus) {
    const paramObj = {
      reqId: this.resourceId,
      corpus: this.corpus
    }
    this.api.saveCorpus(paramObj).subscribe(data => {
      console.log('SERVER RESPONSE: ', data)
    })
  }

  public markComplete() {
    const paramObj = {
      requestId: this.resourceId
    }
    this.api.markComplete(paramObj).subscribe(data => {
      console.log('SERVER RESPONSE: ', data)
    })
    this.zone.run(() => this.router.navigate(['/checks', this.userId]))
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
      reqId: this.resourceId
    }
    console.log('paramObj', this.resourceId)
    this.api.deleteRequestById(paramObj).subscribe(data => {
      console.log('SERVER RESPONSE: ', data)
    })
    // this.router.navigate(['/checks', this.userId]);
    this.zone.run(() => this.router.navigate(['/checks', this.userId]))
  }



  public getRequestById(paramId, resourceId) {
    const paramObj = {
      paramId: paramId,
      resourceId: resourceId
    }
    this.api.getRequestById(paramObj).subscribe(data => {
      console.log('SERVER RESPONSE: ', data)
      if (data.data.type.toLowerCase() == 'requester') {
        this.viewType = 1;
        this.request = data.data;
        this.userId = data.data.user_id;
        this.corpus = data.data.corpus;
        this.inProgress = data.data.in_progress;
        this.requesterId = data.data.requester_id;
        this.callsMade = true;
        console.log('USER IS A REQUESTER')
      }
      else if (data.data.type.toLowerCase() == 'responder') {
        this.viewType = 0;
        this.request = data.data;
        this.userId = data.data.user_id;
        this.corpus = data.data.corpus;
        this.inProgress = data.data.in_progress;
        this.requesterId = data.data.requester_id;
        this.callsMade = true;
        console.log('USER IS A RESPONDER')
      }
    })
  }

}