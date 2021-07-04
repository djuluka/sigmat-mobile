import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TabBarSettingsPage } from './tab-bar-settings.page';

describe('TabBarSettingsPage', () => {
  let component: TabBarSettingsPage;
  let fixture: ComponentFixture<TabBarSettingsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabBarSettingsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TabBarSettingsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
