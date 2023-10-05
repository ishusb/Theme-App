import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeServiceService {

  private activeTheme: string = 'light';

  setActiveTheme(theme: string) {
    this.activeTheme = theme;
    document.documentElement.setAttribute('data-theme', theme);
  }

  getActiveTheme() {
    return this.activeTheme;
  }

  constructor() {
    this.setActiveTheme('light');
   }
}
