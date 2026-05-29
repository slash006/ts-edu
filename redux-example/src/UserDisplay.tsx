import {useSelector} from "react-redux";
import {AppState} from "./store/AppState";
import React from "react";
import {User} from "./store/UserReducer";

const UserDisplay: React.FC = () => {

    const user = useSelector((state: AppState): User | null => state.user);

    if(user)
        return <>{user.username}</>

    return <></>
}

export default UserDisplay;