import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RemoveSpacesPipe } from '../remove-spaces-pipe';
import { InputFormatDirective } from '../input-format';

@Component({
  selector: 'app-heros',
  standalone: true,
  imports: [CommonModule, RemoveSpacesPipe, InputFormatDirective],
  templateUrl: './heros.html',
  styleUrl: './heros.css'
})
export class Heros {
  heroes = [
    { id: 1, name: 'Iron-Man' },
    { id: 2, name: 'Spider-Man' },
    { id: 3, name: 'Captain-America' }
  ];
}