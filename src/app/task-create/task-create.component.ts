import { Component, OnInit } from '@angular/core';
import { ToutouService } from '../toutou.service';

@Component({
  selector: 'app-task-create',
  templateUrl: './task-create.component.html',
  styleUrls: ['./task-create.component.scss'],
})
export class TaskCreateComponent implements OnInit {
  dogName!: string;
  dogTask!: string;
  constructor(private toutService: ToutouService) {}

  ngOnInit(): void {}

  addTask(): void {
    this.toutService.addTask(this.dogName, this.dogTask);
    this.dogName = '';
    this.dogTask = '';
  }
}
