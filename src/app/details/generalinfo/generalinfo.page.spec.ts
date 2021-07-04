import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GeneralinfoPage } from './generalinfo.page';

describe('GeneralinfoPage', () => {
  let component: GeneralinfoPage;
  let fixture: ComponentFixture<GeneralinfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneralinfoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GeneralinfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
