import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ApiService {
  
  constructor(private http: HttpClient) {
    this.touchBase();
  }

  // LOCAL TESTING
  touchBase() : Observable<any> {
    return this.http.get('http://localhost:5000/');

  }

  addUser(formData) : Observable<any> {
    return this.http.post('http://localhost:5000/signup', formData);
  }

  loginUser(formData) : Observable<any> {
    return this.http.post('http://localhost:5000/login', formData);
  }

  addRequest(formData) : Observable<any> {
    return this.http.post('http://localhost:5000/addRequest', formData);
  }

  getAllRequests() : Observable<any> {
    return this.http.get('http://localhost:5000/allRequests');
  }

  getAllOpenRequests() : Observable<any> {
    return this.http.get('http://localhost:5000/allOpenRequests');
  }

  deleteRequestById(reqId) : Observable<any> {
    return this.http.post('http://localhost:5000/deteteRequest', reqId);
  }

  getAllRequestsByUserId(paramId) : Observable<any> {
    return this.http.post('http://localhost:5000/allRequestsByUserId', paramId);
  }

  getUserById(paramId) : Observable<any> {
    return this.http.post('http://localhost:5000/oneUser', paramId);
  }

  getRequestById(paramId) : Observable<any> {
    return this.http.post('http://localhost:5000/getRequestById', paramId);
  }

  getBidsForRequest(paramId) : Observable<any> {
    return this.http.post('http://localhost:5000/getBidsForRequest', paramId);
  }

  // PRODUCTION ENDPOINTS
  // touchBase() : Observable<any> {
  //   return this.http.get('https://blooming-waters-65278.herokuapp.com/');
  // }

  // addUser(formData) : Observable<any> {
  //   return this.http.post('https://blooming-waters-65278.herokuapp.com/signup', formData);
  // }

  // loginUser(formData) : Observable<any> {
  //   return this.http.post('https://blooming-waters-65278.herokuapp.com/login', formData);
  // }

  // addRequest(formData) : Observable<any> {
  //   return this.http.post('https://blooming-waters-65278.herokuapp.com/addRequest', formData);
  // }

  // getAllRequests() : Observable<any> {
  //   return this.http.get('https://blooming-waters-65278.herokuapp.com/allRequests');
  // }

  // getAllOpenRequests() : Observable<any> {
  //   return this.http.get('https://blooming-waters-65278.herokuapp.com/allOpenRequests');
  // }

  // deleteRequestById(reqId) : Observable<any> {
  //   return this.http.post('https://blooming-waters-65278.herokuapp.com/deteteRequest', reqId);
  // }

  // getAllRequestsByUserId(paramId) : Observable<any> {
  //   return this.http.post('https://blooming-waters-65278.herokuapp.com/allRequestsByUserId', paramId);
  // }

  // getUserById(paramId) : Observable<any> {
  //   return this.http.post('https://blooming-waters-65278.herokuapp.com/oneUser', paramId);
  // }

  // getRequestById(paramId) : Observable<any> {
  //   return this.http.post('https://blooming-waters-65278.herokuapp.com/getRequestById', paramId);
  // }

  // getBidsForRequest(paramId) : Observable<any> {
  //   return this.http.post('https://blooming-waters-65278.herokuapp.com/getBidsForRequest', paramId);
  // }
}
