import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import User from '../../types/user';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [MatInputModule, MatButtonModule, ReactiveFormsModule],
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.css'
})
export class UserFormComponent {

  formBuilder = inject(FormBuilder);
  userForm: FormGroup = this.formBuilder.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.required]],
    age: [''],
    address: [''],
  });

  userService = inject(UserService);
  router = inject(Router); 

  addUser() {
     console.log(this.userForm.value);
     const model: User = this.userForm.value;
     this.userService.addUsers(model).subscribe(result => {
      alert("User added Successfully!")
     });
     this.router.navigateByUrl("/"); 
  }
}
