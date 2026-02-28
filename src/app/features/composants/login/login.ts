import {Component, inject, signal} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {AuthService} from '../../../core/services/auth.service';
import {Router} from '@angular/router';
import {LoginRequestDTO, LoginResponceDTO} from '../../../shared/models/auth.models';
import {CommonModule} from '@angular/common';
import {disableVersionCheck} from '@angular/cli/src/utilities/environment-options';
import {email} from '@angular/forms/signals';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);

  errorMessage = signal<string | null>(null)

  onSubmit(){
    if (this.loginFormGroup.invalid) return

    const credentials = this.loginFormGroup.value as LoginResponceDTO

    this.authService.login(credentials).subscribe({
      next: (response) => {
        this.router.navigate(['/dashboard']); //a changer plus tard
      },
      error: (error) => {
        this.errorMessage.set("Username or password is incorrect");
        console.error("Erreur de connexion", error);
      }
    })
  }

  loginFormGroup: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  })}

