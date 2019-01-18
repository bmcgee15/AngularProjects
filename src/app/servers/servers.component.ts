import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers', // most common
  // selector: '[app-servers]' use if accessing attribute not element
  // selector: '.app-servers' use if accessing class name (id does not work)
  templateUrl: './servers.component.html',
  // template: `<p>html multiline code</p>` one or the other not both
  styleUrls: ['./servers.component.scss']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverCreationStatus = 'No server was created';
  serverName = '';
  serverCreated = false;
  servers = ['Testserver', 'Testserver 2'];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = `Server was created! ServerName: ${this.serverName}`;
  }

  onUpdateServerName(event: Event) {
    console.log(event); // use to find the target value
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
