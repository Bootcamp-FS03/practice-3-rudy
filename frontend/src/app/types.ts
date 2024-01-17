import { JwtPayload } from 'jwt-decode';

export type PostOwner = {
  id: number;
  username: string;
  profilePicture: string;
};

export type Post = {
  owner: PostOwner;
  id: string;
  images: string[];
  description: string;
  postedAt: Date;
};

export type ApiResponse<T> = {
  status: string;
  payload?: T;
  error?: string;
};

export interface JwtAPIPayload extends JwtPayload {
  user: SessionUser
}

export type RegisterRequest = {
  name: string;
  email: string;
  password: string;
};

export type SessionUser = {
  id: number;
  name: string,
  lastName:string
  email: string;
  username: string;
  profilePicture: string;
}
