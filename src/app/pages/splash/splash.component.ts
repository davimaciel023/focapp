import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from '@angular/fire/auth';
import { onAuthStateChanged } from 'firebase/auth';
import { IonContent } from "@ionic/angular/standalone";

@Component({
  standalone: true,
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.scss'],
  imports: [IonContent]
})
export class SplashComponent implements OnInit {
  private auth = inject(Auth);
  private router = inject(Router);

  ngOnInit() {
    setTimeout(() => {
      console.log('Verificando estado de autenticación...');
      onAuthStateChanged(this.auth, (user) => {
        console.log('Estado de autenticación:', user);
        if (user) {
          this.router.navigate(['/dashboard']);
        } else {
          this.router.navigate(['/login']);
        }
      });
    }, 1500);
  }
}
