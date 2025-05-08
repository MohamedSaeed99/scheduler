import { useMutation, useQuery } from "@tanstack/react-query";
import { User } from "../../models/User.model";
import { getUserById, updateUser } from "./UserAPI";

const Users = {
    GetUserById: {
        useQuery: (id: string) =>
            useQuery({
                queryKey: ['users', id],
                queryFn: () => getUserById(id),
            })
    },
    UpdateUser: {
        useMutation: (user: User) =>
            useMutation({
                mutationFn: (user: User) => updateUser(user),
            })
    }
}

export default Users;
