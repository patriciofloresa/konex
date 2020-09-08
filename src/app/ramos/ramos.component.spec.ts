import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RamosComponent } from './ramos.component';

describe('RamosComponent', () => {
  let component: RamosComponent;
  let fixture: ComponentFixture<RamosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RamosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RamosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
