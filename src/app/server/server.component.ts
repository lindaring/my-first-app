import { Component } from '@angular/core';

@Component ({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles: [`
    .online { color: white }
  `]
})
export class ServerComponent {
  STATUS_ONLINE = 'online';
  STATUS_OFFLINE = 'offline';

  serverId: number = 10;
  serverStatus: string = 'offline';

  constructor() {
    this.serverStatus = Math.random() > .5 ? this.STATUS_OFFLINE : this.STATUS_ONLINE;
  }

  getServerStatus() {
    return this.serverStatus;
  }

  getColour() {
    return this.serverStatus === this.STATUS_ONLINE ? 'lightgreen' : 'pink';
  }
}
