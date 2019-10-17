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
  public text;
  public dna = "";

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
     this.text = e.target.innerHTML
     for (let i = 0; i < this.text.length; i++) {
      this.dna += "<span style=\"color:" + this.getRandomColor() + ";\">" + this.text[i] + "</span>"
     }
     document.getElementById("modalbody").innerHTML=this.dna;
  }

  getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
}
