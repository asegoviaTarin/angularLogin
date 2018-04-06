import { Component, OnInit } from '@angular/core';
import { ChartComponent } from '../chart/index';
import { TableComponent } from '../table/index';
import { User } from '../_models/index';
import { UserService } from '../_services/index';

@Component({
    moduleId: module.id.toString(),
    templateUrl: 'home.component.html'
})

export class HomeComponent implements OnInit {
    currentUser: User;
    users: User[] = [];
    data: any;

    constructor(private userService: UserService) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }

    ngOnInit() {
        this.getMockData();
    }

    deleteUser(id: number) {
        this.userService.delete(id).subscribe(() => { this.loadAllUsers() });
    }

    private loadAllUsers() {
        this.userService.getAll().subscribe(users => { this.users = users; });
    }

    private getMockData() {
        this.userService.getHomeMockData().subscribe(data => { 
          const body='body';
          this.data = data[body]; 
        });
    }
}