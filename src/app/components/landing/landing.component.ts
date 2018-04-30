import { Component, OnInit, HostListener } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  text: Observable<any>;

  constructor(private api: ApiService) { }

  ngOnInit() {
  }

  @HostListener('window:load')
  windowLoaded() {
    this.touchBase();
  }

  touchBase() : Observable<any> {
    this.api.touchBase().subscribe(data => {
      console.log('SERVER RESPONSE: ', data)
    })
    return;
  }

}
