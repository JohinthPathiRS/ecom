import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('pageTransition', [
      state('normal', style({ /* normal styles */ })),
      state('centered', style({ /* styles for centered login container */ })),
      transition('normal => centered', animate('500ms ease-in')),
      transition('centered => normal', animate('500ms ease-out'))
    ])
  ]
})
export class AppComponent {
  currentState = 'normal';
  title='Ecom';

  // Method to toggle the state (call this when navigating)
  toggleState() {
    this.currentState = this.currentState === 'normal' ? 'centered' : 'normal';
  }
}
