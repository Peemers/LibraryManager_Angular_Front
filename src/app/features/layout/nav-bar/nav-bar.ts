import {Component, computed, inject} from '@angular/core';
import {Router, RouterLink, RouterLinkActive} from '@angular/router';
import {AuthService} from '../../../core/services/auth.service';

@Component({
  selector: 'app-nav-bar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.css',
})
export class NavBar {

  private readonly _authService = inject(AuthService);
  private readonly _router = inject(Router);

  readonly isLoggedIn = computed(() => !! this._authService.currentUser());

  readonly displayName = computed(()=> {
    const user = this._authService.currentUser();
    if (!user) return '';
    return user.first_name?.trim() ? user.first_name : user.email;
  })

  onLogOut(): void {
    this._authService.logout();
    this._router.navigate(['/login']);
  }


}
