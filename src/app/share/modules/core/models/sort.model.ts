import { SortColumn, SortDirection } from './sort-direction.enum';
export class Sort {
    public _order: SortDirection;
    public column: SortColumn;

    constructor(column: SortColumn = SortColumn.ID, _order: SortDirection = SortDirection.ASCENDING) {
        this._order = _order;
        this.column = column;
    }

    public static from(column: SortColumn, _order: SortDirection): Sort {
        return new Sort(column, SortDirection.ASCENDING);
        // switch (_order.toUpperCase()) {
        //     case 'ASC': return new Sort(column, SortDirection.ASCENDING);
        //     case 'DESC': return new Sort(column, SortDirection.DESCENDING);
        //     default: return new Sort(column, SortDirection.ASCENDING);
        // }
    }
}