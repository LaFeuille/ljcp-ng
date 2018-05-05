import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Health } from '../health';
import { HealthService } from '../health.service';

@Component({
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit, OnDestroy {

  health: Health;

  private subs: Subscription[] = [];

  constructor(private service: HealthService) {
  }

  ngOnInit() {
    this.subs.push(
      this.service.data$()
        .subscribe(health => this.health = health)
    );
  }

  ngOnDestroy() {
    this.subs.forEach(sub => sub.unsubscribe());
  }

}
