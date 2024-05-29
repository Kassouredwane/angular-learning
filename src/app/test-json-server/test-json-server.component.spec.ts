import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestJsonServerComponent } from './test-json-server.component';

describe('TestJsonServerComponent', () => {
  let component: TestJsonServerComponent;
  let fixture: ComponentFixture<TestJsonServerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TestJsonServerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TestJsonServerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
