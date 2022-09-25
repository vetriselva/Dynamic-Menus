import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SampleService {
  notify: Subject<boolean> = new Subject<boolean>();
  onNotify(event:boolean) {
      this.notify.next(event);
  }
}
