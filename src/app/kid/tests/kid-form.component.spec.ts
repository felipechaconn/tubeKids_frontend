import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KidFormComponent } from '../kid-form/kid-form.component';

describe('KidFormComponent', () => {
  let component: KidFormComponent;
  let fixture: ComponentFixture<KidFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KidFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KidFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
