import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import {
  Subject,
  debounceTime,
  distinctUntilChanged,
  Subscription,
} from 'rxjs';

@Component({
  selector: 'app-filter-to-do',
  templateUrl: './filter-to-do.component.html',
  styleUrls: ['./filter-to-do.component.scss'],
})
export class FilterToDoComponent implements OnInit, OnDestroy {
  @Input() initialValue: string = '';
  @Input() debounceTime = 300;

  @Output() textChange = new EventEmitter<string>();

  inputValue = new Subject<string>();
  trigger = this.inputValue.pipe(
    debounceTime(this.debounceTime),
    distinctUntilChanged()
  );

  subscriptions: Subscription[] = [];

  ngOnInit() {
    const subscription = this.trigger.subscribe((currentValue) => {
      this.textChange.emit(currentValue);
    });
    this.subscriptions.push(subscription);
  }

  ngOnDestroy() {
    this.subscriptions.forEach((sub) => sub.unsubscribe());
  }

  onInput(e: any) {
    this.inputValue.next(e.target.value);
  }
}
