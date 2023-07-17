import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs/internal/Subscription';
import { ToDo } from 'src/app/intefaces/todo';
import { ToDoService } from 'src/app/services/to-do-service.service';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss'],
})
export class ToDoListComponent implements OnInit {
  tableView = false

  changeView(){
    this.tableView = !this.tableView
  }

  results: ToDo[] | null | undefined = null;
  searchRequestSubscriptions: Subscription[] = [];

  constructor(private toDoService: ToDoService) {}

  ngOnInit() {
    this.toDoService.getData().subscribe((response: ToDo[]) => {
      this.results = response;
    });
    document.getElementById('exampleFormControlInput1')?.focus();
  }

  finish(id: string) {
    const item = this.results!.find((x: { id: string }) => x.id === id);
    if (item) {
      item.completed = true;
    }
  }

  delete(id: string) {
    const item = this.results?.filter((item: { id: string }) => item.id !== id);
    this.toDoService.deleteData(id);
    this.results = item;
    this.toDoService.getData().subscribe((response: ToDo[]) => {
      this.results = response;
    });
  }

  onTextChange(changedText: string) {
    this.cancelPendingRequests();
    const filterSubscription = this.toDoService
      .getResults(changedText)
      .subscribe((response) => {
        this.results = response;
      });
    this.searchRequestSubscriptions.push(filterSubscription);
  }

  cancelPendingRequests() {
    this.searchRequestSubscriptions.forEach((sub) => sub.unsubscribe());
  }

  @ViewChild('closebutton') closebutton:
    | { nativeElement: { click: () => void } }
    | undefined;

  myEditForm: FormGroup = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.minLength(3)]),
    text: new FormControl('', [Validators.required, Validators.minLength(3)]),
  });

  editableTask: ToDo | undefined;

  edit(task: ToDo) {
    this.editableTask = task;
    this.myEditForm.get('title')?.setValue(task.title);
    this.myEditForm.get('text')?.setValue(task.text);
  }

  save() {
    const newData: Omit<
      ToDo,
      'userId' | 'createDate' | 'finishDate' | 'deleteDate' | 'completed'
    > = {
      id: this.editableTask!.id,
      title: this.myEditForm.value['title'],
      text: this.myEditForm.value['text'],
    };

    this.toDoService.updateData(newData).subscribe();
    console.log('Data updated successfully');
    this.close();
  }

  close() {
    this.myEditForm.reset();
    this.closebutton?.nativeElement.click();
  }
}
