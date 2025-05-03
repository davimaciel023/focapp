export interface Note {
  id?: string;
  title: string;
  content: string;
  subjectId?: string;
  userId: string;
  createdAt: Date;
}
