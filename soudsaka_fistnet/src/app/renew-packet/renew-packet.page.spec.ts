import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RenewPacketPage } from './renew-packet.page';

describe('RenewPacketPage', () => {
  let component: RenewPacketPage;
  let fixture: ComponentFixture<RenewPacketPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RenewPacketPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RenewPacketPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
