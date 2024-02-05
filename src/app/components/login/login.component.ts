import { Component } from '@angular/core';
import { ChatService } from '../../services/chat-service/chat.service';
import { HttpClientModule } from '@angular/common/http';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth-service/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,RouterModule, HttpClientModule],
  providers:[ChatService,AuthService],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  'loginForm' :FormGroup
  constructor(private chatService :ChatService, private fb :FormBuilder, private router :Router){
    this.loginForm = this.fb.group({
      username: ['' , [Validators.required]],
      password : ['' , [Validators.required]] ,
    })
  }

  Login(){
    if(this.loginForm.valid){
      this.chatService.userLogin(this.loginForm.value).subscribe((res:any)=>{
        this.router.navigate(['/chat-page'])
      })
    }
  }
}