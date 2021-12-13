import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { RegisterUser } from 'src/app/models/register-user';
import { UserService } from 'src/app/services/user-service';

@Component({
  selector: 'user-registration',
  templateUrl: './user-registration.component.html',
})
export class UserRegistrationComponent {
  title = 'Register for stuff';
  formGroup;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService
  ) {

    this.formGroup = this.formBuilder.group({
      firstName: '',
      lastName: '',
      email: '',
      mobilePhone: '',
    });
  }

  onSubmit(formData: any) {
    let user: RegisterUser = {
      firstName: formData["firstName"],
      lastName: formData["lastName"],
      emailAddress: formData["emailAddress"],
      mobilePhone: formData["mobilePhone"],
    };

    this.userService.createUser(user).subscribe(() => console.log('success'));
  }
}