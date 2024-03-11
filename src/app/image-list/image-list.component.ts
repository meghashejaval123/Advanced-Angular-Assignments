import { Component } from '@angular/core';

@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.css'],
})
export class ImageListComponent {
  imageList = [
    { title: 'Image 1', imageUrl: 'https://placekitten.com/100/100' },
    { title: 'Image 2', imageUrl: 'https://placekitten.com/101/100' },
    { title: 'Image 3', imageUrl: 'https://placekitten.com/102/100' },
    
  ];
}
