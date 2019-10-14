import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sequence-list',
  templateUrl: './sequence-list.component.html',
  styleUrls: ['./sequence-list.component.css']
})
export class SequenceListComponent implements OnInit {

  @Input() sequences

  constructor( ) { }

  ngOnInit() {
    
  }
}
