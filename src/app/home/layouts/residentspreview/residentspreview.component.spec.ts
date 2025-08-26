import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResidentspreviewComponent } from './residentspreview.component';

describe('ResidentspreviewComponent', () => {
  let component: ResidentspreviewComponent;
  let fixture: ComponentFixture<ResidentspreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResidentspreviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResidentspreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
