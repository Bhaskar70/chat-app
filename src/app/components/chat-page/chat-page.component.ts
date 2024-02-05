import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ChatService } from '../../services/chat-service/chat.service';
import { AuthService } from '../../services/auth-service/auth.service';

@Component({
  selector: 'app-chat-page',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,RouterModule, HttpClientModule],
  providers:[ChatService,AuthService],
  templateUrl: './chat-page.component.html',
  styleUrl: './chat-page.component.scss'
})
export class ChatPageComponent {
  userdata:any
  constructor(private chatserive: ChatService){}
  ngOnInit(){
    console.log(this.userdata)
    this.chatserive.getUser()?.subscribe(res=>{
      console.log(res , 'user details')
    })
  }
  addFriend(){
    // const payload = {
    // userId : this.userdata._id , friendName : 'sandeep', friendUserName :'7123456789'
    // }
    // this.chatserive.addFriend(payload).subscribe(res=>console.log(res , 'add friend'))
  }
}