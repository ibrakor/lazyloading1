import {ComponentFixture, TestBed} from '@angular/core/testing';

import {UsersdetailComponent} from './usersdetail.component';

describe('UsersdetailComponent', () => {
  let component: UsersdetailComponent;
  let fixture: ComponentFixture<UsersdetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UsersdetailComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(UsersdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
