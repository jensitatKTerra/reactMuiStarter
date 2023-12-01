import { mockUsersData } from "../data/__mocks__/users";

export const getUser = (id: string): User | null => {
  return mockUsersData.find((user) => user.id === id) ?? null;
};
