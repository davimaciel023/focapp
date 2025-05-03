export interface Material {
  id?: string;
  title: string;
  link?: string;       // Pode ser URL, PDF, vídeo, etc.
  notes?: string;
  subjectId: string;
  userId: string;
  createdAt: Date;
}
