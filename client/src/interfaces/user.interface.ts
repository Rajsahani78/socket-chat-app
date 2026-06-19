export interface User {
  _id: string;
  name: string;
  email: string;
  avatar?: string;
}

export interface AllUsersResponse {
  success: boolean;
  data: User[];
}

export interface ProfileResponse{
  success: boolean;
  data: User
}