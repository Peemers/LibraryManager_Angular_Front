import {ChangeDetectionStrategy, Component, inject, signal} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {Router, RouterLink} from '@angular/router';
import {AuthService} from '../../../core/services/auth.service';
import {UserSignUpDTO} from '../../../shared/models/auth.models';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule, CommonModule, RouterLink],
  templateUrl: './register.html',
  styleUrl: './register.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Register {

  private readonly _authService = inject(AuthService);
  private readonly _router = inject(Router);

  errorMessage = signal<string | null>(null);
  isSubmitting = signal<boolean>(false);


  registerFormGroup: FormGroup = new FormGroup({
    email: new FormControl('', {nonNullable: true, validators: [Validators.required, Validators.email]}),
    password: new FormControl('', {nonNullable: true, validators: [Validators.required, Validators.minLength(6)]}),
    last_name: new FormControl('', []),
    first_name: new FormControl('', []),
  });

  onSubmit() {
    if (this.registerFormGroup.invalid){
      this.registerFormGroup.markAllAsTouched();
      return
    }
    this.isSubmitting.set(true);
    this.errorMessage.set(null)

    const signUpData = this.registerFormGroup.value() as UserSignUpDTO;

    this._authService.register(signUpData).subscribe({
      next: () => {
        this._router.navigate(['/login']);
      },
      error: error => {
        this.errorMessage.set("Une erreur est survenue à l'inscription");
        this.isSubmitting.set(false);
        console.error("Register Error", error);
      }
    });
  }
}

