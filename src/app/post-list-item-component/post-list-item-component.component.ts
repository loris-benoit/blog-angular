import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-list-item-component',
  templateUrl: './post-list-item-component.component.html',
  styleUrls: ['./post-list-item-component.component.css']
})
export class PostListItemComponentComponent implements OnInit {

  @Input() title: string;
  @Input() content: string;
  @Input() loveIts: number = 0;
  @Input() created_at: Date;

  constructor() { }

  ngOnInit() {
  }

  onLove(){
    this.loveIts += 1;
  }

  onHate(){
    this.loveIts -= 1;
  }

  getColor(){
    if(this.loveIts > 0){
      return 'green';
    } else if (this.loveIts < 0){
      return 'red';
    } 
  }

  getBackgroundColor(){
    if(this.loveIts > 0){
      return 'rgba(0,240,0,0.1)';
    } else if (this.loveIts < 0){
      return 'rgba(240,0,0,0.1)';
    } 
  }
}
