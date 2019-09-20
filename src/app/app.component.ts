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
      content: 'La nouvelle vidéo est déjà à + de 400k vues en 24h putain vs l’avez tellement partagée que mm l’algorithme YTube a explosé son shadowban et m’a foutu en tendance Jeux vidéo',
      created: this.date
    },
    {
      title: 'Deuxieme post',
      content: '@Eystein Bye iaverys solution is working just I am trying to reduce the distance between the FAA/ATC NEXT DAY PLAN and the date now it goes in extreme right',
      created: this.date
    },
    {
      title: 'Troisieme post',
      content: 'Angular appliquera donc systématiquement la classe  list-group-item , et selon le contenu de la variable  appareilStatus , appliquera lune ou lautre des deux autres classes.  Vous pouvez bien évidemment créer vos propres classes et les utiliser',
      created: this.date
    }
  ];

}
