import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ConsejeriaPage } from './consejeria.page';

describe('ConsejeriaPage', () => {
  let component: ConsejeriaPage;
  let fixture: ComponentFixture<ConsejeriaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsejeriaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ConsejeriaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
