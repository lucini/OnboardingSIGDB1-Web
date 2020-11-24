import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { fadeInOut } from '@shared/animation/animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    fadeInOut,
  ],
})
export class AppComponent {
  prepareRoute(outlet: RouterOutlet): boolean {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }
}
