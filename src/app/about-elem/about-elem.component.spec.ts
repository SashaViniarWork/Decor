import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutElemComponent } from './about-elem.component';

describe('AboutElemComponent', () => {
  let component: AboutElemComponent;
  let fixture: ComponentFixture<AboutElemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutElemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutElemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
