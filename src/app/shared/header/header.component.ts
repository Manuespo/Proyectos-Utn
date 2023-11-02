import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  ngOnInit(): void { }
  constructor(private router: Router) { }

  initSession() { this.router.navigate(['/login']) }
  register() { this.router.navigate(['/register']); console.log('hola'); }

}
