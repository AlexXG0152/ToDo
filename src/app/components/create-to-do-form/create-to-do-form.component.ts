import { Component, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToDo } from 'src/app/intefaces/todo';
import { ToDoService } from 'src/app/services/to-do-service.service';
import * as uuid from 'uuid';

@Component({
  selector: 'app-create-to-do-form',
  templateUrl: './create-to-do-form.component.html',
  styleUrls: ['./create-to-do-form.component.scss'],
})
export class CreateToDoFormComponent {
  constructor(private ToDoService: ToDoService) {}

  @ViewChild('closebutton') closebutton:
    | { nativeElement: { click: () => void } }
    | undefined;

  myForm: FormGroup = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.minLength(3)]),
    text: new FormControl('', [Validators.required, Validators.minLength(3)]),
  });

  create(): void {
    const newData: ToDo = {
      userId: 1,
      id: uuid.v4(),
      title: this.myForm.value['title'],
      completed: false,
      text: this.myForm.value['text'],
      createDate: Date.now(),
      finishDate: 0,
      deleteDate: 0,
    };

    this.ToDoService.createData(newData).subscribe();
    console.log('Data created successfully');
    this.close();
  }

  close(): void {
    this.myForm.reset();
    this.closebutton?.nativeElement.click();
  }
}
