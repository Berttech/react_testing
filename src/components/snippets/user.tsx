import * as React from 'react';
import { useContext } from 'react';
import UserContext from '../hooks/userContext';

const User = () => {
    const user = useContext(UserContext)
    return (
        <div>
            <div>User: {user.name}</div>
            <div>Age: {user.age}</div>
            <div>DOB: {user.dob.toString()}</div>
        </div>
    );
}

export default User;
