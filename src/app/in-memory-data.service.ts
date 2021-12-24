import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 1, name: 'Hoparoblo' },
      { id: 2, name: 'Axperoblo' },
      { id: 3, name: 'Kutuzov' },
      { id: 4, name: 'Arthur Terrorist' },
      { id: 5, name: 'Macak' },
      { id: 6, name: 'Ktrich Davo' },
      { id: 7, name: 'Vanush' },
      { id: 8, name: 'Yeva' },
      { id: 9, name: 'Sevo' },
      { id: 10, name: 'Qot' },
    ];
    return { heroes };
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0
      ? Math.max(...heroes.map((hero) => hero.id)) + 1
      : 11;
  }
}
