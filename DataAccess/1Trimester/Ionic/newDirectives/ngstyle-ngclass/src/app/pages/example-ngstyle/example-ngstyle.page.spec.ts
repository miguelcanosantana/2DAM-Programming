import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExampleNgstylePage } from './example-ngstyle.page';

describe('ExampleNgstylePage', () => {
  let component: ExampleNgstylePage;
  let fixture: ComponentFixture<ExampleNgstylePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExampleNgstylePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ExampleNgstylePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
