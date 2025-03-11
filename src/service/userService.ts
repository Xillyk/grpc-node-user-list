import { User, UserResponse } from "../proto/users_pb";
import axios from "axios";
import type { IUserApiResponse } from "../type";

const API_URL = "https://your-api.com/users";

const fetchUsers = async () => {
  const response = (await axios.get(API_URL)) as IUserApiResponse;
  return response.users;
};

export const userService = {
  GetFilteredUsers: async (
    call: { request: { getDepartment: () => any } },
    callback: (arg0: null, arg1: UserResponse) => void
  ) => {
    const department = call.request.getDepartment();
    const users = await fetchUsers();

    const filteredUsers = users
      .filter(
        (user: { company: { department: any } }) =>
          user.company.department === department
      )
      .map(
        (user: {
          id: number;
          firstName: string;
          lastName: string;
          company: { department: string };
        }) => {
          const grpcUser = new User();
          grpcUser.setId(user.id);
          grpcUser.setFirstname(user.firstName);
          grpcUser.setLastname(user.lastName);
          grpcUser.setCompany(
            new User.Company().setDepartment(user.company.department)
          );
          return grpcUser;
        }
      );

    const response = new UserResponse();
    response.setUsersList(filteredUsers);

    callback(null, response);
  },
};
