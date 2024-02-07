import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ChatService } from '../../services/chat-service/chat.service';
import { AuthService } from '../../services/auth-service/auth.service';
import { MatDialog } from '@angular/material/dialog';
import { AddfriendComponent } from '../../models/addfriend/addfriend.component';

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
  constructor(private chatserive: ChatService,   public dialog: MatDialog,){}
  ngOnInit(){
    console.log(this.userdata)
    this.chatserive.getUser().subscribe(res=>{
      this.userdata = res
    })
  }
  addFriend(){
    const dialogRef = this.dialog.open(AddfriendComponent);
    dialogRef.afterClosed().subscribe((result:any)=>{
      if(result){
        const userId = this.userdata._id
        const payload = {userId , ...result}
        this.chatserive.addFriend(payload).subscribe(res=>console.log(res , 'add friend'))

      }
    })
  }
}