import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DireitivaNgstyleComponent } from './direitiva-ngstyle.component';

describe('DireitivaNgstyleComponent', () => {
  let component: DireitivaNgstyleComponent;
  let fixture: ComponentFixture<DireitivaNgstyleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DireitivaNgstyleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DireitivaNgstyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
