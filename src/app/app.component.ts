import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { IToutou } from './itoutou';
import { ToutouService } from './toutou.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private toutouService: ToutouService) {}

  nameTitle = 'MyToutouList';
  
  list!: IToutou[];
  listSubscription!: Subscription;

  ngOnInit(): void {
    this.listSubscription = this.toutouService.list$.subscribe(
      (list: IToutou[]) => {
        this.list = list;
      }
    );
  }

  ngOnDestroy(): void {
    if (this.listSubscription) {
      this.listSubscription.unsubscribe();
    }
  }
}
