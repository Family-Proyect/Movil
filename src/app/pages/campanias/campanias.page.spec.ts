import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CampaniasPage } from './campanias.page';

describe('CampaniasPage', () => {
  let component: CampaniasPage;
  let fixture: ComponentFixture<CampaniasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampaniasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CampaniasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
