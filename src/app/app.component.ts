import { Component, Input } from '@angular/core';
import { User } from './model/user';
import { UserService } from './service/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'The good Angular programmer';

  userList: User[] = this.userService.dataList;
  currentUser: User = new User();

  constructor(private userService: UserService,) {

    // console.log('app-component', this.userList)
    console.log('app-component', this.userList)

  }

  onSelect(user: User): void {
    this.currentUser = user;
    // console.log('app-component', this.currentUser.selectClick.emit())
  }

  onUpdate(user: User) {
    this.userService.updateUser(user);
  }

  onDelete(user: User) {
    this.userService.removeUser(user);
  }

}
