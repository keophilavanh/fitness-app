import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PacketAddPage } from './packet-add.page';

describe('PacketAddPage', () => {
  let component: PacketAddPage;
  let fixture: ComponentFixture<PacketAddPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PacketAddPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PacketAddPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
