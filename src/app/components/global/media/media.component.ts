import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-media',
    templateUrl: './media.component.html',
    styleUrl: './media.component.scss',
    standalone: false
})
export class MediaComponent {
  @Input() data: any;
  @Input() externalData: any;
  @Input() type: 'movie' | 'tv' | 'person' = 'movie';
}
