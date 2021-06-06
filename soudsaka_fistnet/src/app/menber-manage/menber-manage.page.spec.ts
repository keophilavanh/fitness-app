import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MenberManagePage } from './menber-manage.page';

describe('MenberManagePage', () => {
  let component: MenberManagePage;
  let fixture: ComponentFixture<MenberManagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenberManagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MenberManagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
