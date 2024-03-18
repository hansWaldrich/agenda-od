import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CoreComponent } from './core.component';

describe('CoreComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [RouterTestingModule],
    declarations: [CoreComponent]
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(CoreComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'agenda-od'`, () => {
    const fixture = TestBed.createComponent(CoreComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('agenda-od');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(CoreComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('agenda-od app is running!');
  });
});
