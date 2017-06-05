import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EventsService } from '../events.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  createForm: FormGroup;

  constructor(private fb: FormBuilder, private service: EventsService) {
  }

  ngOnInit() {
    this.createForm = this.fb.group({
      title: ['', Validators.required, Validators.minLength(10)],
      startDate: ['', Validators.required],
      description: ''
    });
  }

  onSubmit() {
    this.service.create(this.createForm.value);
  }

}
