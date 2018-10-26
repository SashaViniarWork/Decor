import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TulleComponent } from './tulle.component';

describe('TulleComponent', () => {
  let component: TulleComponent;
  let fixture: ComponentFixture<TulleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TulleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TulleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
