import * as React from 'react';
import { createContext } from 'react';
import UserList from '../modules/userList';
import UserContext from '../hooks/userContext';

const Index = () => {

    return (
        <UserContext.Provider value={{ name: 'test', age: 23, dob: new Date('1987-23-23') }}>
            <div>
                <h1>Hello, Welcome to React and TypeScript</h1>
            </div>
            <UserList />
        </UserContext.Provider>
    );
};

export default Index;
