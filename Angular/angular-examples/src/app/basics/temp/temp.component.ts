import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/User';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-temp',
  templateUrl: './temp.component.html',
  styleUrls: ['./temp.component.scss']
})
export class TempComponent implements OnInit {

  public users: User[] = [];
  public nameInput = '';
  public ageInput = '';
  public idInput: string | number = '';
  public isEdit = false;

  constructor(private _userService: UserService) { }

  ngOnInit(): void {
    this._userService.getUsers().subscribe(users => this.users = users);
  }

  onSubmit() {

    if (this.isEdit) {
      const updatedUser: User = {
        id: this.idInput,
        name: this.nameInput,
        age: parseInt(this.ageInput),
      };
      this._userService
        .updateUser(updatedUser)
        .subscribe(updatedUser =>
          this.users = this.users.map(u => u.id === updatedUser.id ? updatedUser : u));
      this.isEdit = false;
    } else {

      const newUser: User = {
        id: this.nameInput + this.ageInput,
        name: this.nameInput,
        age: parseInt(this.ageInput),
      };
      this._userService.addUser(newUser).subscribe(user => this.users.push(user));
    }



    this.nameInput = '';
    this.ageInput = '';
  }


  onToggleEdit(user: User) {
    this.nameInput = user.name
    this.ageInput = user.age.toString();
    this.idInput = user.id;
    this.isEdit = true;

  }

  onDelete(user: User) {
    this._userService
      .deleteUser(user)
      .subscribe(
        () => (this.users = this.users.filter((u) => u.id !== user.id))
      );
  }
}
