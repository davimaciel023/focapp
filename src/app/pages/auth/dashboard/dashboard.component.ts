import { AfterViewInit, Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Auth, onAuthStateChanged } from '@angular/fire/auth';
import { IonicModule } from '@ionic/angular';
import { UserService } from 'src/app/service/user/user.service';
import Chart from 'chart.js/auto';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule]
})
export class DashboardComponent implements OnInit, AfterViewInit {
  userName: string = '';
  userPhotoUrl: string = 'assets/img/avatar.png';

  @ViewChild('barCanvas') barCanvas!: ElementRef<HTMLCanvasElement>;
  barChart: any;

  constructor(
    private auth: Auth,
    private userService: UserService
  ) {}

  async ngOnInit() {
    onAuthStateChanged(this.auth, async (user) => {
      console.log('Usuário autenticado:', user);

      if (user) {
        const userDocSnap = await this.userService.getUserByUid(user.uid);
        if (userDocSnap.exists()) {
          const data = userDocSnap.data();
          console.log('Dados do usuário:', data);
          this.userName = data['usuario'];
          this.userPhotoUrl = data['photoUrl'] || 'assets/img/avatar.png';
        } else {
          console.warn('Documento do usuário não encontrado no Firestore');
        }
      } else {
        console.warn('Nenhum usuário autenticado!');
      }
    });
  }

  ngAfterViewInit() {
    setTimeout(() => {
      if (this.barCanvas) {
        this.createBarChart();
      }
    }, 0);
  }

  createBarChart() {
    this.barChart = new Chart(this.barCanvas.nativeElement.getContext('2d')!, {
      type: 'bar',
      data: {
        labels: ['Tarefas', 'Notas', 'Matérias', 'Pomodoro'],
        datasets: [{
          label: 'Atividades',
          data: [12, 8, 5, 10],
          backgroundColor: ['#3B82F6', '#F59E0B', '#10B981', '#8B5CF6'],
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top'
          },
          title: {
            display: true,
            text: 'Resumo de Atividades'
          }
        }
      }
    });
  }
}
