import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-images',
    templateUrl: './images.component.html',
    styleUrl: './images.component.scss',
    standalone: false
})
export class ImagesComponent {
  @Input() backdrops: any[] = [];
  @Input() posters: any[] = [];
  @Input() type: 'movie' | 'tv' | 'person' = 'movie';
}
