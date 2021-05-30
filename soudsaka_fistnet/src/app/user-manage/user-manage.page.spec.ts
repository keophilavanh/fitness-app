import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UserManagePage } from './user-manage.page';

describe('UserManagePage', () => {
  let component: UserManagePage;
  let fixture: ComponentFixture<UserManagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserManagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UserManagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
