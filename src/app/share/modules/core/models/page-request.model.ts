import { Sort } from './sort.model';

export class PageRequest {
    public _page: number;
    public _limit: number;
    public _sort: Sort;

    constructor(_page: number = 1, _limit: number = 10, _sort: Sort = new Sort()) {
        this._page = _page;
        this._limit = _limit;
        this._sort = _sort;
    }

    public static from(_page: number, _limit: number, sortColumn: string, sortDirection: string): PageRequest {
        const _sort: Sort = Sort.from(sortColumn, sortDirection);
        return new PageRequest(_page, _limit, _sort);
    }
}