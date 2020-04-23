import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTwoFactorAuthComponent } from '../user-two-factor-auth/user-two-factor-auth.component';

describe('UserTwoFactorAuthComponent', () => {
  let component: UserTwoFactorAuthComponent;
  let fixture: ComponentFixture<UserTwoFactorAuthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserTwoFactorAuthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserTwoFactorAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
