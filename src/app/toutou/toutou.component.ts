import { Component, Input, OnInit } from '@angular/core';
import { ToutouService } from '../toutou.service';

@Component({
  selector: 'app-toutou',
  templateUrl: './toutou.component.html',
  styleUrls: ['./toutou.component.scss'],
})
export class ToutouComponent implements OnInit {
  @Input() listId!: number;
  @Input() dogName!: any;
  @Input() dogTask!: any;

  constructor(private toutouService: ToutouService) {}

  ngOnInit(): void {}

  deleteTask(): void {
    this.toutouService.deleteTask(this.listId);
  }

  editTask(): void {
    this.toutouService.editTask(this.listId, this.dogName, this.dogTask);
  }
}
