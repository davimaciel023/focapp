import { Component, inject ,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from '@angular/fire/auth';
import { onAuthStateChanged } from 'firebase/auth';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.scss'],
})
export class SplashComponent  implements OnInit {

  private auth = inject(Auth);
  private router = inject(Router);

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      onAuthStateChanged(this.auth, (user) => {
        if (user) {
          this.router.navigate(['/dashboard']);
        } else {
          this.router.navigate(['/login']);
        }
      });
    }, 2500);
  }
}
