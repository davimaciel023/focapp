import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Auth, onAuthStateChanged } from '@angular/fire/auth';
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
    // Aguarda a mudança real no estado de autenticação
    onAuthStateChanged(this.auth, (user) => {
      console.log('Estado de autenticação:', user);

      setTimeout(() => {
        if (user) {
          this.router.navigate(['/dashboard']);
        } else {
          this.router.navigate(['/login']);
        }
      }, 1500); // a animação espera 1.5s antes de mudar
    });
  }
}
