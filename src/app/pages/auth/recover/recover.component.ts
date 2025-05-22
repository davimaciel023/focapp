import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { Auth } from '@angular/fire/auth';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-recover',
  templateUrl: './recover.component.html',
  styleUrls: ['./recover.component.scss'],
  standalone: true,
  imports: [IonicModule]
})
export class RecoverComponent  implements OnInit {

  form = this.fb.group({
    email: ['']
  })

  constructor(
    private auth: Auth,
    private router: Router,
    private fb: FormBuilder

  ) { }

  ngOnInit() {

  }

  recuperar() {}

  login() {
    this.router.navigate(['/login']);
  }

}
