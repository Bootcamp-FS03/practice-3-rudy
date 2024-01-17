import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-popup-alert',
  templateUrl: './popup-alert.component.html',
  styleUrls: ['./popup-alert.component.css'],
})
export class PopupAlertComponent {
  closePopup() {
    this.isVisible = false;
  }
  @Input() title: string | undefined;
  @Input() message: string | undefined;
  @Input() isVisible = true;
}
