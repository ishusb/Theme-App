import { Component } from '@angular/core';
import { ThemeServiceService } from './theme-service.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'theme_app';

  constructor(
    private themeService: ThemeServiceService,
    private cookieService: CookieService,
  ) {}

  ngOnInit() {
    // Retrieve the theme value from cookies
    const storedTheme = this.cookieService.get('theme');
    
    // Set the retrieved theme value in the service (or provide a default theme if none is found)
    const defaultTheme = 'light'; // You can define your default theme here
    const themeToApply = storedTheme || defaultTheme;
    this.themeService.setActiveTheme(themeToApply);
  }

  toggleTheme() {
    const currentTheme = this.themeService.getActiveTheme();
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    // Set the new theme value in a cookie
    this.cookieService.set('theme', newTheme);
    
    // Update the theme in the service
    this.themeService.setActiveTheme(newTheme);
  }
  
}
