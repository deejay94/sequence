import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from  '@angular/forms';
import { Router } from  '@angular/router';

@Component({
  selector: 'app-add-sequence',
  templateUrl: './add-sequence.component.html',
  styleUrls: ['./add-sequence.component.css']
})
export class AddSequenceComponent implements OnInit {

  sequenceForm: FormGroup;
  isSubmitted  =  false;

  constructor( private router: Router, private formBuilder: FormBuilder ) { }

  ngOnInit() {
    this.sequenceForm  =  this.formBuilder.group({
      name: ['', [Validators.required]],
      description: ['', [Validators.required]],
      dnaSequence: ['', [Validators.required]]
  });
  }

  get formControls() { return this.sequenceForm.controls; }

  submit(){
    this.isSubmitted = true;
    if(this.sequenceForm.invalid){
      return;
    }
    console.log('form submitted')
  }

}
