import { Component, Input, OnInit } from '@angular/core';
import { Character } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-create-character',
  templateUrl: './create-character.component.html',
})
export class CreateCharacterComponent {
  @Input() newCharacter: Character = {
    name: '',
    power: 0,
  };

  @Input() characters: Character[] = [];

  add(): void {
    //Termina la ejecución de la función en caso que el el nombre del personaje sea un string vacío
    if (this.newCharacter.name.trim().length === 0) {
      return;
    }

    console.log(this.newCharacter);
    this.characters.push(this.newCharacter);
    this.newCharacter = {
      name: '',
      power: 0,
    };
    console.log(this.characters);
  }
}
