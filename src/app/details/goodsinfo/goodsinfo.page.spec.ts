import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GoodsinfoPage } from './goodsinfo.page';

describe('GoodsinfoPage', () => {
  let component: GoodsinfoPage;
  let fixture: ComponentFixture<GoodsinfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoodsinfoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GoodsinfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
