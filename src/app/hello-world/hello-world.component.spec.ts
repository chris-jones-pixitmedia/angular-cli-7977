import { async, getTestBed, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloWorldComponent } from './hello-world.component';
import { HelloWorldService } from '../hello-world.service';

describe('HelloWorldComponent', () => {
  let component: HelloWorldComponent;
  let fixture: ComponentFixture<HelloWorldComponent>;

  let helloWorldService: HelloWorldService;

  beforeEach(async(() => {
    TestBed
      .configureTestingModule({
        declarations: [HelloWorldComponent]
      })
      .overrideComponent(HelloWorldComponent, {
        set: {
          providers: [
            { provide: HelloWorldService, useFactory: () => new HelloWorldService(null) }
          ]
        }
      })
      .compileComponents().then(() => {
        fixture = TestBed.createComponent(HelloWorldComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();

        const testBed: TestBed = getTestBed();

        helloWorldService = testBed.get(HelloWorldService);
      });
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
