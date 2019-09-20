import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  date = new Date();

  posts = [
    {
      title: 'Premier post',
      content: 'Ceci est le contenu de mon 1er post',
      created: this.date
    },
    {
      title: 'Deuxieme post',
      content: 'Ceci est le contenu de mon 2nd post',
      created: this.date
    },
    {
      title: 'Troisieme post',
      content: 'Ceci est le contenu de mon dernier post',
      created: this.date
    }
  ];

}
