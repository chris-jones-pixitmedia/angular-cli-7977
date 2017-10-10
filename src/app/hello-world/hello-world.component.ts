import { Component, OnInit } from '@angular/core';

import { HelloWorldService } from '../hello-world.service';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css'],
  providers: [HelloWorldService] // Tests now fail
})
export class HelloWorldComponent implements OnInit {

  constructor(
    private service: HelloWorldService
  ) { }

  ngOnInit() {
  }

}
