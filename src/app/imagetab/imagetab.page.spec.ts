import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagetabPage } from './imagetab.page';

describe('HomePage', () => {
  let component: ImagetabPage;
  let fixture: ComponentFixture<ImagetabPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImagetabPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagetabPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
