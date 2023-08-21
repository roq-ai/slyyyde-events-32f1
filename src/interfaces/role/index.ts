import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface RoleInterface {
  id?: string;
  name: string;
  description?: string;
  user_id?: string;
  permissions: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  _count?: {};
}

export interface RoleGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  description?: string;
  user_id?: string;
  permissions?: string;
}
