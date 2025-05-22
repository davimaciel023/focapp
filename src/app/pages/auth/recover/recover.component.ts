import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { Auth, sendPasswordResetEmail } from '@angular/fire/auth';
import { ToastController } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-recover',
  templateUrl: './recover.component.html',
  styleUrls: ['./recover.component.scss'],
  standalone: true,
  imports: [IonicModule, FormsModule,  CommonModule],
})
export class RecoverComponent  implements OnInit {

  email: string = '';

  constructor(
    private auth: Auth,
    private router: Router,
    private toast: ToastController,

  ) { }

  ngOnInit() {

  }

  async recuperar() {
    if(!this.email) {
      const toast = await this.toast.create({
        message: 'Preencha o campo de email',
        duration: 3000,
        color: 'warning',
      });
      toast.present();
      return;
    }

    try {
      await sendPasswordResetEmail(this.auth, this.email);
      const toast = await this.toast.create({
        message: 'Email de recuperação enviado com sucesso',
        duration: 3000,
        color: 'success',
      })
      toast.present();
      this.router.navigate(['/login']);
    } catch(error) {
      const toast = await this.toast.create({
        message: 'Erro ao enviar email de recuperação, verifique o email e tente novamente',
        duration: 3000,
        color: 'danger',
      })
      toast.present();
    }

  }

  login() {
    this.router.navigate(['/login']);
  }

}
