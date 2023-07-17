import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToDo } from '../intefaces/todo';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs/internal/observable/of';

@Injectable({
  providedIn: 'root',
})
export class ToDoService {
  private todo_link = 'https://jsonplaceholder.typicode.com/todos';

  public taskData: ToDo[] = [
    {
      userId: 1,
      id: 'fd30a17f-377a-40ea-a6ce-4826f455aeac',
      title: 'delectus aut autem',
      text: 'delectus aut autem delectus aut autem',
      createDate: 1689173025956,
      finishDate: 0,
      deleteDate: 0,
      completed: false,
    },
    {
      userId: 1,
      id: '258d2a17-746b-47db-8762-3f185339a715',
      title: 'quis ut nam facilis et officia qui',
      text: 'q1uis ut nam facilis et officia quiquis ut nam facilis et officia qui',
      createDate: 1689173025956,
      finishDate: 1689173030226,
      deleteDate: 1689173035090,
      completed: false,
    },
    {
      userId: 1,
      id: 'b4f6e1ce-c5fd-4c16-8dbd-940166f5000d',
      title: 'q1fugiat veniam minus',
      text: 'fugiat veniam minusfugiat veniam minus',
      createDate: 1689173025956,
      finishDate: 1689173030226,
      deleteDate: 1689173035090,
      completed: false,
    },
    {
      userId: 1,
      id: '2274663c-aaf0-42f3-9bf6-cd924ea97ad8',
      title: 'et porro tempora',
      text: 'et porro temporaet porro temporaet porro tempora',
      createDate: 1689173025956,
      finishDate: 1689173030226,
      deleteDate: 1689173035090,
      completed: false,
    },
    {
      userId: 1,
      id: 'd2b4a0f5-bf1e-46a3-87e2-2515acc6673a',
      title: 'laboriosam mollitia et enim quasi adipisci quia provident illum',
      text: 'laboriosam mollitia et enim quasi adipisci quia provident illumlablaboriosam mollitia et enim quasi adipisci quia provident illum oriosam mollitia et enim quasi adipisci quia provident illum',
      createDate: 1689173025956,
      finishDate: 1689173030226,
      deleteDate: 1689173035090,
      completed: false,
    },
    {
      userId: 1,
      id: '6769b81e-0802-4524-9f05-b576b205df81',
      title: 'qui ullam ratione quibusdam voluptatem quia omnis',
      text: 'qui ullam ratione quibusdam voluptatem quia omnisqui ullam ratione quibusdam voluptatem quia omnis',
      createDate: 1689173025956,
      finishDate: 1689173030226,
      deleteDate: 1689173035090,
      completed: false,
    },
    {
      userId: 1,
      id: '6c42fc95-e76b-4f04-8950-63b627ca1134',
      title: 'illo expedita consequatur quia in',
      text: 'illo expedita consequatur quia inillo expedita consequatur quia in',
      createDate: 1689173025956,
      finishDate: 1689173030226,
      deleteDate: 1689173035090,
      completed: false,
    },
    {
      userId: 1,
      id: '57d0abb4-a5b5-4ab0-bb0a-afd32c23dde8',
      title: 'quo adipisci enim quam ut ab',
      text: 'quo adipisci enim quam ut abquo adipisci enim quam ut ab',
      createDate: 1689173025956,
      finishDate: 1689173030226,
      deleteDate: 1689173035090,
      completed: false,
    },
    {
      userId: 1,
      id: '1af39f0f-ab3c-4843-810d-c65be0f0d756',
      title: 'molestiae perspiciatis ipsa',
      text: 'molestiae perspiciatis ipsamolestiae perspiciatis ipsa',
      createDate: 1689173025956,
      finishDate: 1689173030226,
      deleteDate: 1689173035090,
      completed: false,
    },
    {
      userId: 1,
      id: '0d77f0cb-0e76-41ab-85a1-9943cd9692c0',
      title: 'illo est ratione doloremque quia maiores aut',
      text: 'illo est ratione doloremque quia maiores autillo est ratione doloremque quia maiores aut',
      createDate: 1689173025956,
      finishDate: 1689173030226,
      deleteDate: 1689173035090,
      completed: false,
    },
    {
      userId: 1,
      id: '1134b47c-e768-436a-b6fd-8d6bea1ac8b6',
      title: 'vero rerum temporibus dolor',
      text: 'vero rerum temporibus dolorvero rerum temporibus dolorvero rerum temporibus dolor',
      createDate: 1689173025956,
      finishDate: 1689173030226,
      deleteDate: 1689173035090,
      completed: false,
    },
    {
      userId: 1,
      id: '824563ff-d0db-46b2-9f3c-6d04343fb996',
      title: 'ipsa repellendus fugit nisi',
      text: 'ipsa repellendus fugit nisiipsa repellendus fugit nisiipsa repellendus fugit nisiipsa repellendus fugit nisi',
      createDate: 1689173025956,
      finishDate: 1689173030226,
      deleteDate: 1689173035090,
      completed: false,
    },
    {
      userId: 1,
      id: 'bcaeafe7-5f11-40b6-807d-4b2548209057',
      title: 'et doloremque nulla',
      text: 'et doloremque nullaet doloremque nullaet doloremque nullaet doloremque nullaet doloremque nullaet doloremque nulla',
      createDate: 1689173025956,
      finishDate: 1689173030226,
      deleteDate: 1689173035090,
      completed: false,
    },
    {
      userId: 1,
      id: '485eb01b-2887-40bf-a433-858b3ee27e7e',
      title: 'repellendus sunt dolores architecto voluptatum',
      text: 'repellendus sunt dolores architecto volupt atumrepellendus sunt dolores architecto voluptatum',
      createDate: 1689173025956,
      finishDate: 1689173030226,
      deleteDate: 1689173035090,
      completed: false,
    },
    {
      userId: 1,
      id: 'ee7b8c94-de38-43ba-bac1-e645ee68f1d3',
      title: 'ab voluptatum amet voluptas',
      text: 'ab voluptatum amet voluptasab voluptatum amet voluptas',
      createDate: 1689173025956,
      finishDate: 1689173030226,
      deleteDate: 1689173035090,
      completed: false,
    },
    {
      userId: 1,
      id: 'd7829e80-1126-4d25-81fb-15e20baf5213',
      title: 'accusamus eos facilis sint et aut voluptatem',
      text: 'ccusamus eos facilis sint et aut voluptatemccusamus eos facilis sint et aut voluptatem',
      createDate: 1689173025956,
      finishDate: 1689173030226,
      deleteDate: 1689173035090,
      completed: false,
    },
    {
      userId: 1,
      id: 'c86f55cc-5cae-4419-93d1-08170b666d05',
      title: 'quo laboriosam deleniti aut qui',
      text: 'quo laboriosam deleniti aut quiquo laboriosam deleniti aut quiquo laboriosam deleniti aut qui',
      createDate: 1689173025956,
      finishDate: 1689173030226,
      deleteDate: 1689173035090,
      completed: false,
    },
    {
      userId: 1,
      id: '14fcb78c-6447-4025-bb89-f907303ef43e',
      title: 'dolorum est consequatur ea mollitia in culpa',
      text: 'dolorum est consequatur ea mollitia in culpadolorum est consequatur ea mollitia in culpadolorum est consequatur ea mollitia in culpa',
      createDate: 1689173025956,
      finishDate: 1689173030226,
      deleteDate: 1689173035090,
      completed: false,
    },
    {
      userId: 1,
      id: '82cdf957-f538-4495-b819-2aadce294670',
      title: 'molestiae ipsa aut voluptatibus pariatur dolor nihil',
      text: 'molestiae ipsa aut voluptatibus pariatur dolor nihil molestiae ipsa aut voluptatibus pariatur dolor nihil',
      createDate: 1689173025956,
      finishDate: 1689173030226,
      deleteDate: 1689173035090,
      completed: true,
    },
    {
      userId: 1,
      id: 'a6f24a37-db91-4651-b4d5-7add41e725f1',
      title: 'ullam nobis libero sapiente ad optio sint',
      text: 'ullam nobis libero sapiente ad optio sintullam nobis libero sapiente ad optio sintullam nobis libero sapiente ad optio sint',
      createDate: 1689173025956,
      finishDate: 1689173030226,
      deleteDate: 1689173035090,
      completed: true,
    },
  ];

  constructor(private http: HttpClient) {}

  getData(): Observable<ToDo[]> {
    return of(this.taskData);
  }

  getResults(changedText: string): Observable<ToDo[]> {
    const result = this.taskData?.filter(
      (item) =>
        item.title.toLowerCase().includes(changedText.toLowerCase()) ||
        item.text.toLowerCase().includes(changedText.toLowerCase())
    );
    return of(result);
  }

  createData(data: ToDo): Observable<ToDo[]> {
    this.taskData.unshift(data);
    return of(this.taskData);
  }

  updateData(
    data: Omit<
      ToDo,
      'userId' | 'createDate' | 'finishDate' | 'deleteDate' | 'completed'
    >
  ): Observable<ToDo[]> {
    const item = this.taskData!.find((x: { id: string }) => x.id === data.id);
    if (item) {
      item.title = data.title;
      item.text = data.text;
    }

    return of(this.taskData);
    // return this.http.put<ToDo>(`${this.todo_link}/${data.id}`, data);
  }

  deleteData(id: string): Observable<ToDo[]> {
    const result = this.taskData?.filter((item) => item.id !== id);
    this.taskData = result;
    return of(this.taskData);
    // return this.http.delete<ToDo>(`${this.todo_link}/${id}`);
  }
}
