import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RollCharacterComponent } from './roll-character.component';

describe('RollCharacterComponent', () => {
  let component: RollCharacterComponent;
  let fixture: ComponentFixture<RollCharacterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RollCharacterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RollCharacterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
