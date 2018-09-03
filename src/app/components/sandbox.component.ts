import {Component} from '@angular/core';

@Component({
selector: 'app-sandbox',
templateUrl: './sandbox.component.html',
styleUrls: ['./sandbox.component.css']
})


export class SandboxComponent {
  person: string;
  people = ['King kong', 'Dzoni b', 'blablabla', 'wtf'];

  removePerson(i) {
    this.people.splice(i, 1);
  }

  addPerson() {
    this.people.unshift(this.person);
    this.person = '';
  }
}
