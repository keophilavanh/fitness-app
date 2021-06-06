import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PrintCardPage } from './print-card.page';

describe('PrintCardPage', () => {
  let component: PrintCardPage;
  let fixture: ComponentFixture<PrintCardPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrintCardPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PrintCardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
