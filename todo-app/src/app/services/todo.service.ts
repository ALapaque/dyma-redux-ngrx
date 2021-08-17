import { Injectable } from '@angular/core';
import { Observable, timer } from 'rxjs';
import { map } from 'rxjs/operators';
import { Todo } from '../todo.model';

@Injectable()
export class TodoService {

  constructor() {
  }

  public getTodo(): Observable<Array<Todo>> {
    return timer(2000).pipe(
      map(() => [])
    );
  }

}
