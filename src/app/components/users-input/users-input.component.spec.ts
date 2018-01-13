import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersInputComponent } from './users-input.component';

describe('UsersInputComponent', () => {
  let component: UsersInputComponent;
  let fixture: ComponentFixture<UsersInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
