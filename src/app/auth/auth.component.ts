import { Component } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {
  login: string='';
  password: string='';
  onClick(){
    alert(this.password)
  }
}
