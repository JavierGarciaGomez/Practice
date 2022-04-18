export class Todo {
  id: number;
  title: string;
  notes: {
    text: string;
    isCompleted: boolean;
  };
  labels?: {
    id: number;
    name: string;
  };

  constructor(title: string) {
    this.title = title;
    this.id = 2;
    this.notes = { text: "nota", isCompleted: false };
  }
}
