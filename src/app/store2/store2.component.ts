import { Component } from '@angular/core';

@Component({
  selector: 'app-store2',
  templateUrl: './store2.component.html',
  styleUrl: './store2.component.css'
})
export class Store2Component {
  goToLink(url: string){
    window.open(url, "_blank");
}
}
