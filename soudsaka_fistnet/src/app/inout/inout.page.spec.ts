import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InoutPage } from './inout.page';

describe('InoutPage', () => {
  let component: InoutPage;
  let fixture: ComponentFixture<InoutPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InoutPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InoutPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
