import { SortDirection } from './sort-direction.enum';
export class Sort {
    public _order: SortDirection;
    public column: string;

    constructor(column: string = 'id', _order: SortDirection = SortDirection.ASCENDING) {
        this._order = _order;
        this.column = column;
    }

    public static from(column: string, _order: string): Sort {
        switch (_order.toUpperCase()) {
            case 'ASC': return new Sort(column, SortDirection.ASCENDING);
            case 'DESC': return new Sort(column, SortDirection.DESCENDING);
            default: return new Sort(column, SortDirection.ASCENDING);
        }
    }
}