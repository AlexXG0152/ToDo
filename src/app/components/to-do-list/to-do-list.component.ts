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
  constructor(private toDoService: ToDoService) {}

  tableView = false;
  changeView(): void {
    this.tableView = !this.tableView;
    this.allSelectedValues = []
  }

  allSelectedValues: ToDo[] = [];
  data: string[] = [];
  onChange(value: ToDo): void {
    if (this.allSelectedValues.includes(value)) {
      this.allSelectedValues = this.allSelectedValues.filter(
        (item) => item !== value
      );
    } else {
      this.allSelectedValues.push(value);
    }
    // console.log(this.allSelectedValues);
  }


  download(): void {
    this.data = this.allSelectedValues.map((item, index) => {
      return `
Number: ${index + 1}
Title: ${item.title}
Text: ${item.text}
Create: ${new Date(item.createDate).toLocaleString()}
Finish: ${new Date(item.finishDate).toLocaleString()}
Delete: ${new Date(item.deleteDate).toLocaleString()}
Completed: ${item.completed}
`;
    });

    const file = new Blob(this.data, { type: '.txt' });
    const filename = 'Your selected todos.txt';
    const a = document.createElement('a');
    const url = URL.createObjectURL(file);
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();

    setTimeout(function () {
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    }, 0);
  }

  sendByMail(): void {
    const mailToLink =
      'mailto:email-address?body=' +
      encodeURIComponent(JSON.stringify(this.data));
    window.location.href = mailToLink;
  }

  finishAllSelected(){
    this.allSelectedValues.forEach(item => {
      this.finish(item.id)
    })
  }

  deleteAllSelected(){
    this.allSelectedValues.forEach(item => {
      this.delete(item.id)
    })
  }


  results: ToDo[] | null | undefined = null;
  searchRequestSubscriptions: Subscription[] = [];

  ngOnInit(): void {
    this.toDoService.getData().subscribe((response: ToDo[]) => {
      this.results = response;
    });
    document.getElementById('exampleFormControlInput1')?.focus();
  }

  finish(id: string): void {
    const item = this.results!.find((x: { id: string }) => x.id === id);
    if (item) {
      item.completed = true;
    }
  }

  delete(id: string): void {
    if (this.allSelectedValues.length !== 0) {
      this.allSelectedValues = this.allSelectedValues.filter(
        (item) => item.id !== id
      );
    }

    const item = this.results?.filter((item: { id: string }) => item.id !== id);
    this.toDoService.deleteData(id);
    this.results = item;
    this.toDoService.getData().subscribe((response: ToDo[]) => {
      this.results = response;
    });
  }

  onTextChange(changedText: string): void {
    this.cancelPendingRequests();
    const filterSubscription = this.toDoService
      .getResults(changedText)
      .subscribe((response) => {
        this.results = response;
      });
    this.searchRequestSubscriptions.push(filterSubscription);
  }

  cancelPendingRequests(): void {
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

  edit(task: ToDo): void {
    this.editableTask = task;
    this.myEditForm.get('title')?.setValue(task.title);
    this.myEditForm.get('text')?.setValue(task.text);
  }

  save(): void {
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

  close(): void {
    this.myEditForm.reset();
    this.closebutton?.nativeElement.click();
  }
}
