import { Account } from "./account";
import { User } from "./user";

export interface UserData {
    user: User;
    account: Account[];
}