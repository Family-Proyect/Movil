import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TestimonioPage } from './testimonio.page';

describe('TestimonioPage', () => {
  let component: TestimonioPage;
  let fixture: ComponentFixture<TestimonioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestimonioPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TestimonioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
