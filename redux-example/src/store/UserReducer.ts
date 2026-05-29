export const USER_TYPE = "USER_TYPE";

export interface User {
    id: number;
    username: string;
    email: string;
    city: string;
}

export interface UserAction {
    type: string;
    payload: User | null;
}

export const UserReducer = (state = USER_TYPE, action: UserAction): User | null => {

    switch (action.type) {
        case USER_TYPE:
            console.log('initial state', action.payload);
            console.log('state', state);
            return action.payload;
        default:
            return null;
    }
}