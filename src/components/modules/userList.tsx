import * as React from 'react';
import User from '../snippets/user';
import UserContext from '../hooks/userContext';

const UserList = () => {
    return (
        <div>
            <User />
            <UserContext.Provider value={{name: 'teste2', age: 45, dob: new Date('1987-12-23')}}>
                <User />
            </UserContext.Provider>
            <User />
        </div>
    )
}

export default UserList;
