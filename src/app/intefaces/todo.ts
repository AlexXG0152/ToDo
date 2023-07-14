export interface ToDo {
  userId: number;
  id: string;
  title: string;
  text: string;
  createDate: number;
  finishDate: number;
  deleteDate: number;
  completed: boolean;
}
