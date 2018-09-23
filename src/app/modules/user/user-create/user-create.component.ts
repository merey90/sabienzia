import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { User } from '../user.model';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.scss']
})
export class UserCreateComponent implements OnInit {
  @Output() addUser = new EventEmitter<User>();

  private EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
  private PHONE_REGEXP = /^\d{3}\s\d{4}\s\d{3}$/;
  private email = new FormControl('', [
    Validators.required,
    Validators.pattern(this.EMAIL_REGEXP)
  ]);
  private firstname = new FormControl('', [
    Validators.required,
  ]);
  private lastname = new FormControl('', [
    Validators.required
  ]);
  private phone = new FormControl('', [
    Validators.required,
    Validators.pattern(this.PHONE_REGEXP)
  ]);
  private role = new FormControl('', [
    Validators.required
  ]);

  createUserForm: FormGroup = this.builder.group({
    email: this.email,
    firstname: this.firstname,
    lastname: this.lastname,
    phone: this.phone,
    role: this.role
  });

  constructor(private builder: FormBuilder) { }

  ngOnInit() {
  }

  handleSubmit(event: Event) {
    event.preventDefault();
    if (this.createUserForm.valid) {
      this.addUser.emit(this.createUserForm.value);
    }
  }
}
