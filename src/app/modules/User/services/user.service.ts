import { Post, User } from './../models/User.model';
import { environment } from '../../../../environments/environment';
import { CrudService } from '../../../share/crud/crud.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService extends CrudService<Post, number> {

  constructor(protected _http: HttpClient) {
    super(_http, `${environment.api.baseUrl}/posts`)
  }

}
