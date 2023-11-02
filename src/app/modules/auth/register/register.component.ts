import { Component } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  formulario: FormGroup = this.fb.group({
    id: [0, [Validators.required]],
    lastName: ['', [Validators.required]],
    name: ['', [Validators.required]],
    dni: ['', [Validators.required,Validators.minLength(7),Validators.maxLength(8)]],
    fechaNac: ['', [Validators.required]],
    email: ['', [Validators.required,Validators.email]],
    username: ['', [Validators.required]],
    password: ['', [Validators.required,Validators.minLength(7),Validators.maxLength(8)]] 
  })

  constructor(private fb: FormBuilder) { }
}
