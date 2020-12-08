import { UsersService } from './../../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { Page } from 'src/app/share/modules/core/models/page.model';
import { User } from '../../../models/User.model';
import { PageRequest } from 'src/app/share/modules/core/models/page-request.model';
import { take } from "rxjs/operators"

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public currentPage: Page<User>;
  constructor(private _usersService: UsersService) { }

  ngOnInit(): void {
    this._fetchPageOfUsers()
  }

  private _fetchPageOfUsers(pageRequest?: PageRequest) {
    this._usersService.findAllWithPagination(pageRequest).pipe(
      take(1)).subscribe((data => {
        console.log(data);
        this.currentPage = data;
      }))
  }

  public nextPage(): void {
    console.log(this.currentPage.next);
    this._fetchPageOfUsers(this.currentPage.next);
  }

  public prevPage(): void {
    console.log(this.currentPage.previous);
    this._fetchPageOfUsers(this.currentPage.previous);
  }

}
