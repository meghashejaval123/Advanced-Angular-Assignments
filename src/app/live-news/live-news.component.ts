import { Component, OnDestroy, OnInit } from '@angular/core';
import { BulletinService } from '../bulletin.service';
import { Subscription, timer } from 'rxjs';


@Component({
  selector: 'app-live-news',
  template: `
    <div *ngIf="bulletin">
      <h2>Bulletin News</h2>
      <p>{{ bulletin }}</p>
    </div>
  `,
  styleUrl: './live-news.component.css'
})
export class LiveNewsComponent {

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
         if (news.length > 0) {
          const randomIndex = Math.floor(Math.random() * news.length);
          this.bulletin = news[randomIndex];
        }
      });
    });
  }
}
