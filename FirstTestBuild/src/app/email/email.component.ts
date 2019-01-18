import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.scss']
})
export class EmailComponent implements OnInit {

  allowNewEmail = false;
  emailName = 'Johnny Cash';
  emailCreationStatus = 'Email Not Created Yet';

  constructor() {
    setTimeout(() => {
      this.allowNewEmail = true;
    }, 2000);
  }

  ngOnInit() {
  }

  onCreateEmail() {
    this.emailCreationStatus = `Email was created! EmailName: ${this.emailName}`;
  }

  onUpdateEmailName(event: Event) {
    console.log(event); // use to find the target value
    this.emailName = (<HTMLInputElement>event.target).value;
  }

}
