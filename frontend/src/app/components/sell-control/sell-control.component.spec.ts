import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SellControlComponent } from './sell-control.component';

describe('SellControlComponent', () => {
  let component: SellControlComponent;
  let fixture: ComponentFixture<SellControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SellControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SellControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
