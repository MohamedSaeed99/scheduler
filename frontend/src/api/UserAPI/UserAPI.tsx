import { User } from "../../models/User.model";

export const getUserById = async (id: string) => {
    const response = await fetch('http://localhost:8080/users');
    return response.json();
};

export const updateUser = async (user: User) => {
    const response = await fetch('http://localhost:8080/users', {
        method: 'PUT',
        body: JSON.stringify(user),
    });
    return response.json();
};

