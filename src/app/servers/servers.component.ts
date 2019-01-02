import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers', // most common
  // selector: '[app-servers]' use if accessing attribute not element
  // sellector: '.app-servers' use if accessing class name (id does not work)
  templateUrl: './servers.component.html',
  // template: `<p>html multiline code</p>` one or the other not both
  styleUrls: ['./servers.component.scss']
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
