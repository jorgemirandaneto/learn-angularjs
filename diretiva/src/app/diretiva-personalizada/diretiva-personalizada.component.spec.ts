import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DiretivaPersonalizadaComponent } from './diretiva-personalizada.component';

describe('DiretivaPersonalizadaComponent', () => {
  let component: DiretivaPersonalizadaComponent;
  let fixture: ComponentFixture<DiretivaPersonalizadaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiretivaPersonalizadaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiretivaPersonalizadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
