import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavelementsComponent } from './navelements.component';

describe('NavelementsComponent', () => {
  let component: NavelementsComponent;
  let fixture: ComponentFixture<NavelementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavelementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavelementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
