import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonContent } from '@ionic/angular/standalone';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
  standalone: true,
  imports: [IonContent, CommonModule, RouterLink]
})
export class WelcomePage implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() { }

  goToLogin() {
    this.router.navigate(['/login']);
  }
}
