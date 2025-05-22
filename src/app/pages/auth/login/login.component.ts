import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Auth } from '@angular/fire/auth';
import { signInWithEmailAndPassword } from 'firebase/auth';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [IonicModule, CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private auth: Auth
  )
  {
    this.form = this.fb.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
    });
  }

  login() {
    if (this.form.valid) {
      const { email, password } = this.form.value;
      signInWithEmailAndPassword(this.auth, email, password)
      .then((userCredential) => {
          const user = userCredential.user;
          console.log('Login bem sucedido', user);
          this.router.navigateByUrl('/dashboard');
        })
        .catch((error) => {
          console.error('Erro ao fazer login', error);
          alert('Erro ao fazer login. Verifique suas credenciais e tente novamente.');
        });
    }
  }

  register() {
    this.router.navigate(['/register']);
  }
  forgotPassword() {
    this.router.navigate(['/forgot-password']);
  }
}
