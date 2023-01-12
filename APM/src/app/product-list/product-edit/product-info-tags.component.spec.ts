import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductInfoTagsComponent } from './product-info-tags.component';

describe('ProductInfoTagsComponent', () => {
  let component: ProductInfoTagsComponent;
  let fixture: ComponentFixture<ProductInfoTagsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductInfoTagsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductInfoTagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
