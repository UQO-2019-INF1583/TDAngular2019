import { Injectable } from '@angular/core';
import { Heros } from './heros';
import { HEROS } from './mock-heros';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HerosService {

  constructor() { }

  // Exercice 1.7 méthode qui retourne HEROS (qui provient de mock-heros)
  getHeros(): Observable<Heros[]> {
    return of (HEROS);
  }
}
