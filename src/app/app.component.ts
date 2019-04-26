import { Component } from '@angular/core';
import { trigger, style, state, animate, transition } from "@angular/animations";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

  animations: [
    trigger('toggleBox', [
      state('open', style({
        height: '200px',
        backgroundColor: '#061ff0'
      })),
      state('close', style({
        height: '70px',
        backgroundColor: '#E91E63',
      })),
      transition('open => close', [
        animate('0.3s')
      ]),
      transition('close => open', [
        animate('0.3s')
      ]),
    ])
  ]
})
export class AppComponent {
  title = 'animationToggleBlock';
  isOpen: any;

  toggle(){
    this.isOpen = !this.isOpen;
    console.log(this.isOpen);
  }
}
