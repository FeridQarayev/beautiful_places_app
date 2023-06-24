import axios, { type AxiosResponse } from 'axios';
import { BASE_URL } from '../constants/constant';
import type IUser from '../interfaces/user';

export const userCreate = async (user: IUser): Promise<AxiosResponse<{ message: string; error: boolean }>> =>
  await axios.post(`${BASE_URL}/v1/auth/sign-up`, {
    ...user,
  });

export const userLogin = async (
  user: IUser
): Promise<AxiosResponse<{ message: string; error: boolean; accesToken: string }>> =>
  await axios.post(`${BASE_URL}/v1/auth/sign-in`, {
    ...user,
  });
