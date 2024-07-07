import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaddEditComponent } from './listadd-edit.component';

describe('ListaddEditComponent', () => {
  let component: ListaddEditComponent;
  let fixture: ComponentFixture<ListaddEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaddEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListaddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
