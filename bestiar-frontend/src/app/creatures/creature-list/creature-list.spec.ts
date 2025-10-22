import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreatureListComponent } from './creature-list.component';

describe('CreatureListComponent', () => {
  let component: CreatureListComponent;
  let fixture: ComponentFixture<CreatureListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      // componenta ta e standalone => o pui la "imports", nu la "declarations"
      imports: [CreatureListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CreatureListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
