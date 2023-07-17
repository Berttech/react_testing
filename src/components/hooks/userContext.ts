import { createContext } from 'react';

interface User {
    name: string;
    age: number;
    dob: Date;
}

const UserContext = createContext<User | null>(null);

export default UserContext;
