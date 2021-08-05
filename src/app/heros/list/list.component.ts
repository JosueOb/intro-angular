import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  heros: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor'];
  hero_deleted: string = '';

  deleteHero(): void{
    //this.heros = [];
    const hero_deleted = this.heros.shift() || '';
    this.hero_deleted = hero_deleted;
  }
}
