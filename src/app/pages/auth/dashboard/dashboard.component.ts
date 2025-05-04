import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  standalone: true,
  imports: [IonicModule]
})
export class DashboardComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

  userName: string = 'Student Name';
  userPhotoUrl: string = 'assets/img/avatar.png'; // Pode vir do Firebase futuramente


}
