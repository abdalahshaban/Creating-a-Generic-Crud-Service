import { Page } from './../share/modules/core/models/page.model';
import { PageRequest } from './../share/modules/core/models/page-request.model';
import { Observable } from 'rxjs';

export interface CrudRepository<T, ID> {
    save(t: T): Observable<T>;
    update(id: ID, t: T): Observable<T>;
    findOne(id: ID): Observable<T>;
    findAll?(): Observable<T[]>;
    findAllWithPagination?(pageRequest?: PageRequest): Observable<Page<T>>;
    delete(id: ID): Observable<any>;

}