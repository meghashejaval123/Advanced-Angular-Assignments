import { Component } from '@angular/core';

@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  
  styleUrls: ['./image-list.component.css'],
})
export class ImageListComponent {
  imageList: string[] = [
    '/assets/SampleJPGImage_50kbmb.jpg',
    '/assets/istockphoto-1091007944-170667a.webp',
    'assets/istockphoto-531535155-170667a.webp',
  ];
}
