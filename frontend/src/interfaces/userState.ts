import { User } from "./user";

export interface UserState {
    isAuth: boolean;
    user: User | null;
    token: string | null;
    error: string | null;
}