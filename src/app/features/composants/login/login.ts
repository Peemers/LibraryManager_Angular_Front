import {Component, inject, signal} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {AuthService} from '../../../core/services/auth.service';
import {Router} from '@angular/router';
import {LoginRequestDTO, LoginResponceDTO} from '../../../shared/models/auth.models';
import {CommonModule} from '@angular/common';

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

    const credentials = this.loginFormGroup.value as LoginRequestDTO

    this.authService.login(credentials).subscribe({
      next: () => this.router.navigate(['/dashboard']),
      error: (error) => this.errorMessage.set("erreur de connexion")
    });
  }

  loginFormGroup: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  })}

