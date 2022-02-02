import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IToutou } from './itoutou';

@Injectable({
  providedIn: 'root',
})
export class ToutouService {
  private list: IToutou[] = [
    {
      id: 1,
      dogName: 'Lucas',
      dogTask: 'Va te coucher',
    },
  ];

  public list$!: BehaviorSubject<IToutou[]>;

  constructor() {
    this.list$ = new BehaviorSubject<IToutou[]>(this.list);
  }

  addTask(dogName: any, dogTask: any): void {
    const id =
      this.list.length === 0
        ? 1
        : Math.max.apply(
            Math,
            this.list.map((list) => {
              return list.id;
            })
          ) + 1;
    this.list.push({
      id,
      dogName,
      dogTask,
    });
    this.list$.next(this.list);
  }

  deleteTask(listId: number): void {
    const index = this.list.findIndex((x) => x.id === listId);
    if (index > -1) {
      this.list.splice(index, 1);
      this.list$.next(this.list);
    }
  }

  //edit not ok
  editTask(listId: number, dogName: any, dogTask: any): void {
    this.list[listId].dogName = dogName;
    this.list[listId].dogTask = dogTask;
  }
}
