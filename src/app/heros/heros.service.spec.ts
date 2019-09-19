import { TestBed } from '@angular/core/testing';

import { HerosService } from './heros.service';
import { Heros } from './heros';
import { HEROS } from './mock-heros';

describe('HerosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HerosService = TestBed.get(HerosService);
    expect(service).toBeTruthy();
  });
});

describe('More HerosService', () => {
  let service: HerosService;
  //Avant utilisation du mock
  /*const HEROS: Heros[] = [
    { id: 11, nom: 'Mr. Nice' },
    { id: 1, nom: 'Windstorm'},
    { id: 15, nom: 'Magneta'},
  ];*/
  beforeEach(() => {
    // 1ere version
    // service = new HerosService();
    TestBed.configureTestingModule({
      providers: [HerosService]
    });
  });

  it('getHeros should return mock-heros content', () => {
    service = TestBed.get(HerosService);
    expect(service.getHeros()).toBeTruthy(HEROS);
  });
});
