import { TestBed, async } from '@angular/core/testing';
import { DfxComponent } from './dfx.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        DfxComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(DfxComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'main1'`, () => {
    const fixture = TestBed.createComponent(DfxComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('main1');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(DfxComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to main1!');
  });
});
