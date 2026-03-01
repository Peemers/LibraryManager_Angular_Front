import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Login} from './features/composants/login/login';
import {NavBar} from './features/layout/nav-bar/nav-bar';

@Component({
  selector: 'app-root',
  imports: [Login, RouterOutlet, NavBar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('LibraryFront');
}
