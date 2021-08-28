import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PrintInvoicePage } from './print-invoice.page';

describe('PrintInvoicePage', () => {
  let component: PrintInvoicePage;
  let fixture: ComponentFixture<PrintInvoicePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrintInvoicePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PrintInvoicePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
