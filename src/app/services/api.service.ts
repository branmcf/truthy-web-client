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

  touchBase() : Observable<any> {
    // return this.http.get('https://blooming-waters-65278.herokuapp.com/');
    return this.http.get('http://localhost:5000/');

  }

  addUser(formData) : Observable<any> {
    // return this.http.post('https://blooming-waters-65278.herokuapp.com/signup', formData);
    return this.http.post('http://localhost:5000/signup', formData);
  }

  loginUser(formData) : Observable<any> {
    // return this.http.post('https://blooming-waters-65278.herokuapp.com/login', formData);
    return this.http.post('http://localhost:5000/login', formData);
  }

  addRequest(formData) : Observable<any> {
    // return this.http.post('https://blooming-waters-65278.herokuapp.com/login', formData);
    return this.http.post('http://localhost:5000/addRequest', formData);
  }

  getAllRequests() : Observable<any> {
    // return this.http.get('https://blooming-waters-65278.herokuapp.com/');
    return this.http.get('http://localhost:5000/allRequests');
  }

  getAllOpenRequests() : Observable<any> {
    // return this.http.get('https://blooming-waters-65278.herokuapp.com/');
    return this.http.get('http://localhost:5000/allOpenRequests');
  }

  deleteRequestById(reqId) : Observable<any> {
    // return this.http.get('https://blooming-waters-65278.herokuapp.com/');
    return this.http.post('http://localhost:5000/deteteRequest', reqId);
  }

  getAllRequestsByUserId(paramId) : Observable<any> {
    // return this.http.get('https://blooming-waters-65278.herokuapp.com/');
    return this.http.post('http://localhost:5000/allRequestsByUserId', paramId);
  }

  getUserById(paramId) : Observable<any> {
    // return this.http.get('https://blooming-waters-65278.herokuapp.com/');
    return this.http.post('http://localhost:5000/oneUser', paramId);
  }

  getRequestById(paramId) : Observable<any> {
    // return this.http.get('https://blooming-waters-65278.herokuapp.com/');
    return this.http.post('http://localhost:5000/getRequestById', paramId);
  }

  getBidsForRequest(paramId) : Observable<any> {
    // return this.http.get('https://blooming-waters-65278.herokuapp.com/');
    return this.http.post('http://localhost:5000/getBidsForRequest', paramId);
  }
}
