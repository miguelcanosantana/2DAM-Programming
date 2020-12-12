import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExampleNgclassPage } from './example-ngclass.page';

describe('ExampleNgclassPage', () => {
  let component: ExampleNgclassPage;
  let fixture: ComponentFixture<ExampleNgclassPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExampleNgclassPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ExampleNgclassPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
