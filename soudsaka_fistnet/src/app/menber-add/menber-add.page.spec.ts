import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MenberAddPage } from './menber-add.page';

describe('MenberAddPage', () => {
  let component: MenberAddPage;
  let fixture: ComponentFixture<MenberAddPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenberAddPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MenberAddPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
