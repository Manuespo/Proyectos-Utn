import { Component } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { User } from 'src/app/core/models.module';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  formulario: FormGroup = this.fb.group({
    email: ['', [Validators.required,Validators.email]],
    password: ['', [Validators.required,Validators.minLength(7),Validators.maxLength(8)]] 
  })

  constructor(private fb: FormBuilder) { }

userLogin :User={
  id: 0,
  lastName: '',
  name: '',
  dni: '',
  fechaNac: '',
  email: '',
  userName: '',
  password: ''
}


initSession(){

}
}
