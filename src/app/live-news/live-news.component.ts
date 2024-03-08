import { Component, OnDestroy, OnInit } from '@angular/core';
import { BulletinService } from '../bulletin-service.service';
import { Subscription, timer } from 'rxjs';

@Component({
  selector: 'app-live-news',
  template: `
    <div *ngIf="bulletin">
      <h2>Bulletin News</h2>
      <p>{{ bulletin }}</p>
    </div>
  `,
  styleUrls: ['./live-news.component.css']
})
export class LiveNewsComponent implements OnInit, OnDestroy {
  bulletin: string | undefined;
  private bulletinSubscription: Subscription | undefined;

  constructor(private bulletinService: BulletinService) { }

  ngOnInit(): void {
    this.loadBulletinNews();
  }

  ngOnDestroy(): void {
    this.bulletinSubscription?.unsubscribe();
  }

  private loadBulletinNews(): void {
    this.bulletinSubscription = timer(0, 5000).subscribe(() => {
      this.bulletinService.getBulletinNews().subscribe(news => {
        // Assuming news is an array of bulletin news
        if (news.length > 0) {
          const randomIndex = Math.floor(Math.random() * news.length);
          this.bulletin = news[randomIndex];
        }
      });
    });
  }


  
}
