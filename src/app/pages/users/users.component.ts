import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputSwitchModule } from 'primeng/inputswitch';
import { MenuModule } from 'primeng/menu';
import { FormsModule } from '@angular/forms';
import { RequestService } from '../../../services/admin/users/users.service';
import { LookupsService } from '../../../services/lookup/lookup.service';
import {
  IUser,
  IUserAdd,
  IUserEdit,
} from '../../../services/admin/users/users';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { DialogModule } from 'primeng/dialog';

interface IRole {
  id: string;
  type: string;
}

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [
    CommonModule,
    TableModule,
    ButtonModule,
    InputSwitchModule,
    MenuModule,
    FormsModule,
    ToastModule,
    DialogModule,
  ],
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers: [RequestService, MessageService, LookupsService],
})
export class UsersComponent implements OnInit {
  users!: [];
  page = 1;
  rows = 5;
  totalRecords = 0;
  visible: boolean = false;
  visibleEditUser: boolean = false;
  visibleAddUser: boolean = false;
  userID: string = '';
  userName: string = '';
  userEmail: string = '';
  userRole: string = '';
  userPassword: string = '';
  roles?: [IRole];
  editUserVar!: IUserEdit;
  addUserVar: any = {};
  userNameAdd: string = '';
  userEmailAdd: string = '';
  userRoleAdd: string = '';
  userPasswordAdd: string = '';
  showDialog(user: IUser) {
    this.visible = true;
    this.userID = user.id;
  }
  showDialogAdd() {
    this.visibleAddUser = true;
  }
  showDialogEdit(user: IUser) {
    this.requestService.getUserById(user.id).subscribe((data: any) => {
      this.userName = data.name;
      this.userEmail = data.email;
      this.userRole = data.roleType;
      this.userPassword = data.password;
    });
    this.visibleEditUser = true;
    this.userID = user.id;
  }
  constructor(
    private requestService: RequestService,
    private messageService: MessageService,
    private lookupsService: LookupsService
  ) {}
  ngOnInit() {
    this.loadUsers();
    this.getLookups();
  }

  getLookups() {
    this.lookupsService.getLookups().subscribe((data: any) => {
      this.roles = data.roles;
    });
  }
  loadUsers() {
    this.requestService
      .getUsers(this.page, this.rows)
      .subscribe((data: any) => {
        this.users = data.users;
        this.totalRecords = data.totalUsers;
      });
  }

  onPageChange(event: any) {
    this.page = event.first / event.rows + 1;
    this.rows = event.rows;
    this.loadUsers();
  }
  onSwitchChange(event: any, user: IUser) {
    this.requestService.activeUser(event.checked, user.id).subscribe(() => {
      this.loadUsers();
    });
  }
  showSuccess(message: string) {
    this.messageService.add({
      severity: 'success',
      summary: 'Success',
      detail: message,
    });
  }
  editUser() {
    this.editUserVar = {
      name: this.userName,
      email: this.userEmail,
      password: this.userPassword,
      roleId: this.userRole,
    };
    this.requestService
      .editUser(this.userID, this.editUserVar)
      .subscribe((data: any) => {
        this.showSuccess('User updated successfully');
        this.loadUsers();
        this.visibleEditUser = false;
      });
  }

  deleteUser() {
    this.requestService.deleteUserById(this.userID).subscribe((data: any) => {
      this.showSuccess(data.message);
      this.loadUsers();
      this.visible = false;
    });
  }

  addUser() {
    console.log(this.addUserVar);

    this.addUserVar.roleId = this.userRoleAdd;
    this.addUserVar.password = this.userPasswordAdd;
    this.addUserVar.email = this.userEmailAdd;
    this.addUserVar.name = this.userNameAdd;
    this.addUserVar.active = false;
    this.requestService.addUser(this.addUserVar).subscribe((data: any) => {
      this.showSuccess('Added successfully');
      this.loadUsers();
      this.visibleAddUser = false;
    });
  }
}
