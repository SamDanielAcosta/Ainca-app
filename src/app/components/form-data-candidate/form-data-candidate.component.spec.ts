import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDataCandidateComponent } from './form-data-candidate.component';

describe('FormDataCandidateComponent', () => {
  let component: FormDataCandidateComponent;
  let fixture: ComponentFixture<FormDataCandidateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormDataCandidateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormDataCandidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
