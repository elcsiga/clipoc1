import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatformTestComponent } from './platform-test.component';

describe('PlatformTestComponent', () => {
  let component: PlatformTestComponent;
  let fixture: ComponentFixture<PlatformTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlatformTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlatformTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
