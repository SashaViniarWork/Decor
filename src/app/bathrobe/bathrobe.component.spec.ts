import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BathrobeComponent } from './bathrobe.component';

describe('BathrobeComponent', () => {
  let component: BathrobeComponent;
  let fixture: ComponentFixture<BathrobeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BathrobeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BathrobeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
