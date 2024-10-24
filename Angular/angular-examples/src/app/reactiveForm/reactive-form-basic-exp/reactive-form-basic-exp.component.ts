import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  ValidatorFn,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-reactive-form-basic-exp',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './reactive-form-basic-exp.component.html',
  styleUrl: './reactive-form-basic-exp.component.scss',
})
export class ReactiveFormBasicExpComponent {
  userForm!: FormGroup;

  readonly formInfos = {
    username: {
      id: 'username',
      label: 'User Name',
      placeholder: 'Enter username',
      defaultValue: '',
      validators: [Validators.required, Validators.minLength(3)],
    },
    email: {
      id: 'email',
      label: 'Email',
      placeholder: 'Enter email',
      defaultValue: '',
      validators: [Validators.required, Validators.email],
    },
    password: {
      id: 'password',
      label: 'Password',
      placeholder: '',
      defaultValue: '',
      validators: [Validators.required, Validators.minLength(6)]
    },
    confirmPassword: {
      id: 'confirmPassword',
      label: 'Confirm Password',
      placeholder: '',
      defaultValue: '',
      validators: [Validators.required]
    },
  };

  constructor() { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.userForm = new FormGroup({
      [this.formInfos.username.id]: new FormControl(
        this.formInfos.username.defaultValue,
        this.formInfos.username.validators
      ),
      [this.formInfos.email.id]: new FormControl(
        this.formInfos.email.defaultValue,
        this.formInfos.email.validators
      ),
      [this.formInfos.password.id]: new FormControl(
        this.formInfos.password.defaultValue,
        this.formInfos.password.validators
      ),
      [this.formInfos.confirmPassword.id]: new FormControl(
        this.formInfos.confirmPassword.defaultValue,
        this.formInfos.password.validators
      ),
    }, { validators: this.getPasswordMatchValidator() });

  }

  // Custom validator
  getPasswordMatchValidator(): ValidatorFn {
    return (formGroup: AbstractControl): { [key: string]: any } | null => {

      const password = formGroup.get('password')?.value;
      const confirmPassword = formGroup.get('confirmPassword')?.value;
      return password === confirmPassword ? null : { mismatch: true };
    }
  }

  onSubmit() {
    Object.keys(this.userForm.controls).forEach((key) => {
      const control = this.userForm.controls[key];
      control.markAsDirty();
      control.updateValueAndValidity();
    });

    if (this.userForm.invalid) {
      console.log(this.userForm);
      return;
    }

  }
}
