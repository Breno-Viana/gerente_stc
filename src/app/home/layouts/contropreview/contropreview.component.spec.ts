import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContropreviewComponent } from './contropreview.component';

describe('ContropreviewComponent', () => {
  let component: ContropreviewComponent;
  let fixture: ComponentFixture<ContropreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContropreviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContropreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
