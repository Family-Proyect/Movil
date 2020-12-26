import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NtipPage } from './ntip.page';

describe('NtipPage', () => {
  let component: NtipPage;
  let fixture: ComponentFixture<NtipPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NtipPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NtipPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
