import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AseguradorComponent } from './asegurador.component';

describe('AseguradorComponent', () => {
  let component: AseguradorComponent;
  let fixture: ComponentFixture<AseguradorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AseguradorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AseguradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
