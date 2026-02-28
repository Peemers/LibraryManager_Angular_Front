import {Component, signal} from '@angular/core';
import {AuthService} from '../../../core/services/auth.service';
import{Router} from '@angular/router';
import {FormBuilder, FormControl, ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  errorMessage = signal<null | "">

  onSubmit(){
    console.log("Tentative de connexion")
  }

}
