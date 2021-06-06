import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PacketInfoPage } from './packet-info.page';

describe('PacketInfoPage', () => {
  let component: PacketInfoPage;
  let fixture: ComponentFixture<PacketInfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PacketInfoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PacketInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
