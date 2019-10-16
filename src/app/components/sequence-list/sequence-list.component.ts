import { Component, Input } from '@angular/core';
import * as _ from "lodash";
declare var $ : any;


@Component({
  selector: 'app-sequence-list',
  templateUrl: './sequence-list.component.html',
  styleUrls: ['./sequence-list.component.css']
})


export class SequenceListComponent {

  @Input() sequences
  public counter = 0
  public up: boolean
  public down: boolean
  public dna;


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

  showSequence(e) {        
     this.dna = e.target.innerHTML
  }
}
