export interface Task {
  id?: string;
  title: string;
  description?: string;
  dueDate?: Date;
  completed: boolean;
  subjectId: string; // Disciplina relacionada
  userId: string;    // Dono da tarefa
  createdAt: Date;
}
