import { PageRequest } from './page-request.model';

export class Page<T> {
    public Data: T[];
    public totalData: number;
    public totalPages: number;
    // public current: PageRequest;
    // public next: PageRequest;
    // public previous: PageRequest;

    constructor(obj: any) {
        Object.assign(this, obj);
    }
}