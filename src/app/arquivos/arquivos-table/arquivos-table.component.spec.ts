import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArquivosTableComponent } from './arquivos-table.component';

describe('ArquivosTableComponent', () => {
  let component: ArquivosTableComponent;
  let fixture: ComponentFixture<ArquivosTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArquivosTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArquivosTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
