import {Company} from './Company';
import {Permission} from './Permission';

export class User {
    public id: number;
    public name: string;
    public email: string;
    public password: string;
    public permission: Permission;
    public company: Company;
}