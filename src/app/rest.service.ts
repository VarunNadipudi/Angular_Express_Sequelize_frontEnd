import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Policy } from './Policy';
import { User } from './User';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http : HttpClient) { }

  baseUrl = "http://localhost:8000/";
  userBaseUrl = "http://localhost:8001/";

  getUser(email:string, password:string):Observable<any> {
    let header = {'content-type':'application/json'};
    let body = {"email":email, "password":password};

    let url = this.userBaseUrl+"login"

    return this.http.post(url, body, {'headers':header, responseType:'text'});
  }



  //to insert the user we send request to '/signup' with the data and at backend we receive it and store it in DB using Sequelize
  insertUser(user:User):Observable<any> {
    let header = {'content-type':'application/json'};
    let body = JSON.stringify(user);

    var url = this.userBaseUrl + "signup";

    return this.http.post(url, body, {'headers':header, responseType:'text'});
  }


  // ************************* Policies ****************************

  getAllPolicies():Observable<any>{
    var url = this.baseUrl + "getAllPolicies";

    return this.http.get<Policy>(url);
  }

  getPolicyById(id:string):Observable<any> {
    var url = this.baseUrl + "getPolicyById/" +id;

    return this.http.get<Policy>(url);

  }


  insertPolicy(policy:Policy):Observable<any>{
    let header = {'content-type':'application/json'};
    let body = JSON.stringify(policy);

    var url = this.baseUrl + "insertPolicy";

    return this.http.post(url, body, {'headers' : header, responseType:'text'}); 
  }

  updatePolicy(policy:Policy):Observable<any> {

    let header = {'content-type':'application/json'};
    let body = JSON.stringify(policy);

    var url = this.baseUrl + "updatePolicy";

    return this.http.put(url, body, {'headers':header, responseType:'text'});
  }

  deletePolicy(id:string):Observable<any>{

    var url = this.baseUrl + "deletePolicy/" + id;

    return this.http.delete(url, {responseType:'text'});
  }

}
