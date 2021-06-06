import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsClientComponent } from './items-client.component';

describe('ItemsClientComponent', () => {
  let component: ItemsClientComponent;
  let fixture: ComponentFixture<ItemsClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemsClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemsClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
