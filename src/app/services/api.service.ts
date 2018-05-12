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

  // // LOCAL TESTING
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

  getAllRequestsByUserId1(paramId) : Observable<any> {
    return this.http.post('http://localhost:5000/allRequestsByUserId1', paramId);
  }

  getAllRequestsByUserId2(paramId) : Observable<any> {
    return this.http.post('http://localhost:5000/allRequestsByUserId2', paramId);
  }

  getUserById(paramId) : Observable<any> {
    return this.http.post('http://localhost:5000/oneUser', paramId);
  }

  getRequestById(params) : Observable<any> {
    return this.http.post('http://localhost:5000/getRequestById', params);
  }

  getBidsForRequest(paramId) : Observable<any> {
    return this.http.post('http://localhost:5000/getBidsForRequest', paramId);
  }

  addFunds(formData) : Observable<any> {
    return this.http.post('http://localhost:5000/addFunds', formData);
  }

  saveCorpus(params) : Observable<any> {
    return this.http.post('http://localhost:5000/saveCorpus', params);
  }

  markInProgress(params) : Observable<any> {
    return this.http.post('http://localhost:5000/markInProgress', params);
  }

  markComplete(params) : Observable<any> {
    return this.http.post('http://localhost:5000/markComplete', params);
  }



  // PRODUCTION ENDPOINTS
  // constructor(private http: HttpClient) {
  //   this.touchBase();
  // }

  // // LOCAL TESTING
  // touchBase() : Observable<any> {
  //   return this.http.get('https://https://blooming-waters-65278.herokuapp.com/');

  // }

  // addUser(formData) : Observable<any> {
  //   return this.http.post('https://https://blooming-waters-65278.herokuapp.com/signup', formData);
  // }

  // loginUser(formData) : Observable<any> {
  //   return this.http.post('https://https://blooming-waters-65278.herokuapp.com/login', formData);
  // }

  // addRequest(formData) : Observable<any> {
  //   return this.http.post('https://https://blooming-waters-65278.herokuapp.com/addRequest', formData);
  // }

  // getAllRequests() : Observable<any> {
  //   return this.http.get('https://https://blooming-waters-65278.herokuapp.com/allRequests');
  // }

  // getAllOpenRequests() : Observable<any> {
  //   return this.http.get('https://https://blooming-waters-65278.herokuapp.com/allOpenRequests');
  // }

  // deleteRequestById(reqId) : Observable<any> {
  //   return this.http.post('https://https://blooming-waters-65278.herokuapp.com/deteteRequest', reqId);
  // }

  // getAllRequestsByUserId1(paramId) : Observable<any> {
  //   return this.http.post('https://https://blooming-waters-65278.herokuapp.com/allRequestsByUserId1', paramId);
  // }

  // getAllRequestsByUserId2(paramId) : Observable<any> {
  //   return this.http.post('https://https://blooming-waters-65278.herokuapp.com/allRequestsByUserId2', paramId);
  // }

  // getUserById(paramId) : Observable<any> {
  //   return this.http.post('https://https://blooming-waters-65278.herokuapp.com/oneUser', paramId);
  // }

  // getRequestById(params) : Observable<any> {
  //   return this.http.post('https://https://blooming-waters-65278.herokuapp.com/getRequestById', params);
  // }

  // getBidsForRequest(paramId) : Observable<any> {
  //   return this.http.post('https://https://blooming-waters-65278.herokuapp.com/getBidsForRequest', paramId);
  // }

  // addFunds(formData) : Observable<any> {
  //   return this.http.post('https://https://blooming-waters-65278.herokuapp.com/addFunds', formData);
  // }

  // saveCorpus(params) : Observable<any> {
  //   return this.http.post('https://https://blooming-waters-65278.herokuapp.com/saveCorpus', params);
  // }

  // markInProgress(params) : Observable<any> {
  //   return this.http.post('https://https://blooming-waters-65278.herokuapp.com/markInProgress', params);
  // }

  // markComplete(params) : Observable<any> {
  //   return this.http.post('https://https://blooming-waters-65278.herokuapp.com/markComplete', params);
  // }
}
