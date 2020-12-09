export class User {
    public id: number;
    public name: string;
    public username: string;
    public email: string;
    public address: Address;
    public phone: string;
    public website: string;
    public company: Company;

}

export class Post {
    public id: number;
    public title: string;
    public author: string;
}

class Address {
    public street: string;
    public suite: string;
    public city: string;
    public zipcode: string;
    public geo: {
        lat: string;
        lng: string;
    };
}

class Company {
    public name: string;
    public catchPhrase: string;
    public bs: string;
}

