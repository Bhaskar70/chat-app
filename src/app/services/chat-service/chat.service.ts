import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
   apiUrl = 'http://localhost:3000/api'
   'document' :Document
  constructor(private http :HttpClient) { }
  userData = new BehaviorSubject('')
  registerUser(payload :any){
   return  this.http.post(`${this.apiUrl}/register` , payload)
  }
  userLogin(payload :any){
    return  this.http.post(`${this.apiUrl}/login` , payload,{ withCredentials: true })
   }
   addFriend(payload :any){
    return  this.http.post(`${this.apiUrl}/addfriend` , payload)
   }
   getUser(){
    return  this.http.get(`${this.apiUrl}/user`,{ withCredentials: true })
   }
}