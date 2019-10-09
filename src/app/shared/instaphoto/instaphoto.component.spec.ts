import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstaphotoComponent } from './instaphoto.component';

describe('InstaphotoComponent', () => {
  let component: InstaphotoComponent;
  let fixture: ComponentFixture<InstaphotoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstaphotoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstaphotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
