import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NtestimonioPage } from './ntestimonio.page';

describe('NtestimonioPage', () => {
  let component: NtestimonioPage;
  let fixture: ComponentFixture<NtestimonioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NtestimonioPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NtestimonioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
