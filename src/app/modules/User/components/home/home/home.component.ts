import { Post } from './../../../models/User.model';
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
  public currentPage: Page<Post>;
  constructor(private _usersService: UsersService) { }

  pageRequest = new PageRequest();
  pageCount: number;
  totalData = 22;
  _limit = 10;
  _sort = 'title';
  _order = 'ASC';

  ngOnInit(): void {
    this._fetchPageOfUsers(this.pageRequest);
  }

  private _fetchPageOfUsers(pageRequest?: PageRequest) {
    this._usersService.findAllWithPagination(pageRequest).pipe(
      take(1)).subscribe((data => {
        this.currentPage = data;
        this.pageCount = Math.ceil(this.totalData / this.pageRequest._limit);
      }))
  }

  public nextPage(): void {
    if (this.pageRequest._page === this.pageCount) {
      return;
    }
    this.pageRequest._page++
    this._fetchPageOfUsers(this.pageRequest);
  }

  public prevPage(): void {
    if (this.pageRequest._page === 1) {
      return;
    }
    this.pageRequest._page--;
    this._fetchPageOfUsers(this.pageRequest);
  }

}
