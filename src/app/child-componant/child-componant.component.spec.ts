import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildComponantComponent } from './child-componant.component';

describe('ChildComponantComponent', () => {
  let component: ChildComponantComponent;
  let fixture: ComponentFixture<ChildComponantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildComponantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildComponantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
