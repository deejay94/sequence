import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SequenceService } from 'src/app/services/sequence.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-add-sequence',
  templateUrl: './add-sequence.component.html',
  styleUrls: ['./add-sequence.component.css']
})
export class AddSequenceComponent implements OnInit {

  sequenceForm: FormGroup;
  isSubmitted = false;
  sequences: any[] = [];

  constructor(private dataService: DataService, private formBuilder: FormBuilder, private sequenceService: SequenceService) { }

  ngOnInit() {
    this.sequenceForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      description: ['', [Validators.required]],
      dnaSequence: ['', [Validators.required, Validators.pattern('^[TtAaCcGg]*$')]]
    });
  }

  get formControls() { return this.sequenceForm.controls; }

  public createSequence(sequence) {
    this.isSubmitted = true;
    if (this.sequenceForm.invalid) {
      return;
    }

    this.sequenceService.getSequences().subscribe((res: any[]) => {
      res.map(ele => {
        if (ele.dnaSequence == sequence.dnaSequence) {
          this.sequenceForm.controls['dnaSequence'].setErrors({ 'unique': true });
          return
        }
      })
    })

    this.sequenceService.createSequence(sequence).subscribe((ret) => {
      sequence.id = this.dataService.genId(this.sequences)
      this.sequences.push(sequence);
    })
  }
}
