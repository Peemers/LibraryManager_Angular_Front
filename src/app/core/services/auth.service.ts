import {computed, inject, Injectable, signal} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {LoginRequestDTO, LoginResponceDTO, User, UserSignUpDTO} from '../../shared/models/auth.models';
import {Observable, tap} from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class AuthService {
  private readonly http: HttpClient = inject(HttpClient);
  private readonly apiUrl: string = "http://localhost:5001/api/User";
  private readonly _currentUser = signal<User | null>(null);
  readonly currentUser = this._currentUser.asReadonly();
  readonly isAuthenticated = computed(() => this._currentUser() !== null);

  constructor() { //constructeur pour l'objet
    const savedUser = localStorage.getItem("auth_user"); //mettre le authuser dans localStorage des la creation de l'objet
    if (savedUser) {
      const user = JSON.parse(savedUser) as User; //transformation en jso
      this._currentUser.set(user);
    }
  }

  login(credentials: LoginRequestDTO) {
    return this.http.post<LoginResponceDTO>(`${this.apiUrl}/login`, credentials).pipe(
      tap((response: LoginResponceDTO) => {
        this._currentUser.set(response.user)

        localStorage.setItem("auth_token", response.token) //insertion
        localStorage.setItem("auth_user", JSON.stringify(response.user));
      })
    )
  };

  logout() {
    this._currentUser.set(null);
    localStorage.removeItem("auth_token");
    localStorage.removeItem("auth_user");
  };

  register(data: UserSignUpDTO ):Observable<void> {
    return this.http.post<void>(`${this.apiUrl}/CreateUser`, data)
  };
}




