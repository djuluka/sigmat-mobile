import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TransportinfoPage } from './transportinfo.page';

describe('TransportinfoPage', () => {
  let component: TransportinfoPage;
  let fixture: ComponentFixture<TransportinfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransportinfoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TransportinfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
