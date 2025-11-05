import type { ComponentType } from 'react';

export interface IMeta {
  page?: number;
  limit?: number;
  totalPage?: number;
  total?: number
}

export interface IResponse<T> {
  statusCode: number
  success: boolean
  message: string
  meta?: IMeta
  data: T
}

export interface ISidebarItem {
  title: string,
  items: {
    title: string,
    url: string,
    component: ComponentType
  }[],
}

export type TRole = "ADMIN" | "USER" | "AGENT";

type ZodIssue = {
  code: string;
  expected: string;
  received: string;
  path: string[];
  message: string;
};

type ErrorSource = {
  path: string;
  message: string;
};

export interface IErrorResponse {
  success: boolean;
  message: string;
  errorSources?: ErrorSource[];
  err?: {
    issues: ZodIssue[];
    name: string;
  };
  stack?: string;
}

export type TStatus = "ACTIVE" | "PENDING" | "BLOCKED";
export type TWalletStatus = "ACTIVE" | "BLOCKED";

export interface IUser {
  _id: string;
  name: string;
  phone: string;
  password: string;
  role: TRole;
  status: TStatus;
  auths: string[];
  createdAt: string;
  updatedAt: string;
  wallet: string;
  address: string;
  email: string;
}

export interface TWalletUser {
  _id: string;
  name: string;
  phone: string;
  role: TRole;
}

export interface TWallet {
  _id: string;
  user: TWalletUser;
  balance: number;
  status: TWalletStatus;
  createdAt: string;
  updatedAt: string;
}