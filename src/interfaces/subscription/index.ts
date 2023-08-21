import { UserInterface } from 'interfaces/user';
import { EventInterface } from 'interfaces/event';
import { GetQueryInterface } from 'interfaces';

export interface SubscriptionInterface {
  id?: string;
  user_id?: string;
  event_id?: string;
  subscription_date: any;
  status: boolean;
  expiry_date?: any;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  event?: EventInterface;
  _count?: {};
}

export interface SubscriptionGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  event_id?: string;
}
