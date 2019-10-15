import { Component, Input } from '@angular/core';
import * as _ from "lodash";
@Component({
  selector: 'app-sequence-list',
  templateUrl: './sequence-list.component.html',
  styleUrls: ['./sequence-list.component.css']
})


export class SequenceListComponent {

  @Input() sequences
  counter = 0
  up: boolean
  down: boolean

  constructor() { }

  sortName() {
    if(this.counter % 2 === 0) {
      const data = _.orderBy(this.sequences, ['name'], ['asc'])
      this.sequences = data
      this.up = false
      this.down = true
      this.counter++
    } else {
      const data = _.orderBy(this.sequences, ['name'], ['desc'])
      this.sequences = data
      this.up = true
      this.down = false
      this.counter++
    }
    
  }
}
