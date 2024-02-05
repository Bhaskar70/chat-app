import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ChatService } from '../../services/chat-service/chat.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth-service/auth.service';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,RouterModule, HttpClientModule],
  providers:[AuthService,ChatService],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {
  constructor(private router:Router){}
loginPage(){
this.router.navigate(['login'])
}
RegisterPage(){
this.router.navigate(['register'])
  
}
}