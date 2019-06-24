import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EventsDataService } from '../state/events-data.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  createForm: FormGroup;

  constructor(private fb: FormBuilder, private service: EventsDataService) {
  }

  ngOnInit() {
    this.createForm = this.fb.group({
      title: ['', Validators.compose([Validators.required, Validators.minLength(10)])],
      startDate: ['', Validators.required],
      description: ''
    });
  }

  onSubmit() {
    this.service.create(this.createForm.value);
  }

}
