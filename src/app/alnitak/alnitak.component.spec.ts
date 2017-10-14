import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlnitakComponent } from './alnitak.component';

describe('AlnitakComponent', () => {
  let component: AlnitakComponent;
  let fixture: ComponentFixture<AlnitakComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlnitakComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlnitakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
