import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HerosComponent } from './heros.component';
import { FormsModule } from '@angular/forms';
import { Observable, of } from 'rxjs';
import {HEROS} from './mock-heros';
import {HerosService} from './heros.service';

describe('HerosComponent', () => {
  let component: HerosComponent;
  let fixture: ComponentFixture<HerosComponent>;

  beforeEach(async(() => {
    // Créer un faux service avec un espion sur la méthode getHeros
    const fauxService = jasmine.createSpyObj('HerosService', ['getHeros']);
    // Make the spy return a synchronous Observable with the test data
    const getHerosSpy = fauxService.getHeros.and.returnValue( of(HEROS) );

    TestBed.configureTestingModule({
      declarations: [ HerosComponent ],
      imports : [ FormsModule ],
      providers: [{ provide: HerosService, useValue: fauxService }] // utiliser le faux service
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HerosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have heros after Angular calls ngOnInit', () => {
    component.ngOnInit();
    const service = TestBed.get(HerosService);
    expect(component.heros).toBeTruthy(service.getHeros());
  });
});
