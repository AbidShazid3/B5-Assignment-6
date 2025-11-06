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
export type TransactionType = "SEND" | "WITHDRAW" | "TOP_UP" | "CASH_IN" | "CASH_OUT";
export type TransactionStatus = "PENDING" | "COMPLETED" | "REVERSED";
export type Direction = "SENT" | "RECEIVED";

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

export interface IWalletInfo {
  _id: string;
  user: TWalletUser;
}

export interface ITransaction {
  _id: string;
  from: IWalletInfo | null;
  to: IWalletInfo | null;
  amount: number;
  fee: number;
  type: TransactionType;
  status: TransactionStatus;
  direction: Direction;
  createdAt: string;
  updatedAt: string;
}