export interface PomodoroSession {
  id?: string;
  userId: string;
  subjectId?: string;
  taskId?: string;
  startTime: Date;
  durationMinutes: number;
  completed: boolean;
}
