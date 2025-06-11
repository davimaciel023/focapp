import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Auth } from '@angular/fire/auth';
import { createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';
import { UserService } from 'src/app/service/user/user.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [IonicModule, CommonModule, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private auth: Auth,
    private userService: UserService
  ) {
    this.form = this.fb.group({
      usuario: ['', Validators.compose([Validators.required, Validators.maxLength(10)])],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
      confirmPassword: ['', Validators.required]
    });
  }

  register() {
    const { usuario, email, password, confirmPassword } = this.form.value;

    if (password !== confirmPassword) {
      alert('As senhas estão diferentes. Por favor, verifique.');
      return;
    }

    if (this.form.valid) {
      createUserWithEmailAndPassword(this.auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log('Usuário registrado com sucesso:', user);

          this.userService.addUser({
            uid: user.uid,
            usuario,
            email,
            createdAt: new Date()
          });

          sendEmailVerification(user).then(() => {
            alert(`Verificação enviada, confirme seu email!`)
            this.router.navigate(["/login"])
          })

          alert('Cadastro realizado com sucesso!');
          this.router.navigateByUrl('/login');
        })
        .catch((error) => {
          console.error('Erro ao registrar usuário:', error);
          alert('Erro ao registrar. Verifique os dados e tente novamente.');
        });
    }
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }
}
