import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {AuthService} from '../../../core/services/auth.service';
import {User} from '../../../shared/models/auth.models';
import {Router} from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
  changeDetection: ChangeDetectionStrategy.OnPush //onpush car angular ne verifiera le composant que si les signaux changent
})
export class Dashboard {

  private readonly _authService = inject(AuthService); //importation authservice
  private readonly _router = inject(Router); //importation router

  readonly user = this._authService.currentUser //user = currentuser de authservice

  onLogOut(){
    this._authService.logout();
    this._router.navigate(['/login']);
  }
}
