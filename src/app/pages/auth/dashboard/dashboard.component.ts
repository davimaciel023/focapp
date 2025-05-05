import { Component, OnInit } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { IonicModule } from '@ionic/angular';
import { UserService } from 'src/app/service/user/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  standalone: true,
  imports: [IonicModule]
})
export class DashboardComponent  implements OnInit {
  userName: string = '';
  userPhotoUrl: string = 'assets/img/avatar.png';

  constructor(
    private auth: Auth,
    private userService: UserService
  ) { }

  async ngOnInit() {
    const user = this.auth.currentUser;
    if(user) {
      const userDocSnap = await this.userService.getUserByUid(user.uid);
      if(userDocSnap.exists()) {
        this.userName = userDocSnap.data()['usuario'];
      }
    }
  }

}
