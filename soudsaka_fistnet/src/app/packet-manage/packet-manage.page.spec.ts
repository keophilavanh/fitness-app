import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PacketManagePage } from './packet-manage.page';

describe('PacketManagePage', () => {
  let component: PacketManagePage;
  let fixture: ComponentFixture<PacketManagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PacketManagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PacketManagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
