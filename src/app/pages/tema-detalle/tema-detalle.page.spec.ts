import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TemaDetallePage } from './tema-detalle.page';

describe('TemaDetallePage', () => {
  let component: TemaDetallePage;
  let fixture: ComponentFixture<TemaDetallePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemaDetallePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TemaDetallePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
