import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { SequenceService } from 'src/app/services/sequence.service';
import { DataService } from 'src/app/services/data.service';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-add-sequence',
  templateUrl: './add-sequence.component.html',
  styleUrls: ['./add-sequence.component.css']
})
export class AddSequenceComponent implements OnInit {

  sequenceForm: FormGroup;
  isSubmitted = false;
  sequences: any[] = [];

  constructor(private notifierService: NotifierService, private dataService: DataService,
     private formBuilder: FormBuilder, private sequenceService: SequenceService) { }

  ngOnInit() {
    this.sequenceForm = this.formBuilder.group({
      name: [''],
      description: [''],
      dnaSequence: ['', [Validators.pattern('^[TtAaCcGg]*$')]]
    });
  }

  get formControls() { return this.sequenceForm.controls; }

  public getSequences() {
    this.sequenceService.getSequences().subscribe((data: any[]) => {
      this.sequences = data
    })
  }

  public createSequence(sequence) {
    this.isSubmitted = true;

    this.isUnique(sequence)

    if (this.sequenceForm.invalid) {      
      return;
    }

    this.sequenceService.createSequence(sequence).subscribe(() => {
      this.isSubmitted = false;
      sequence.id = this.dataService.genId(this.sequences)           
      this.sequences.push(sequence)
      this.notifierService.notify('success', 'Sequence successfully created!')
      })
  }

  public isUnique(sequence) {
    this.sequences.map(ele => {
      if (sequence['dnaSequence'] == ele.dnaSequence) {
        this.sequenceForm.controls['dnaSequence'].setErrors({'duplicate': true})
      }
    })
  }
}
