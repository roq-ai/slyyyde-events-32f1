import { UserInterface } from 'interfaces/user';
import { EventInterface } from 'interfaces/event';
import { GetQueryInterface } from 'interfaces';

export interface AttendanceInterface {
  id?: string;
  user_id?: string;
  event_id?: string;
  check_in_time?: any;
  check_out_time?: any;
  status: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  event?: EventInterface;
  _count?: {};
}

export interface AttendanceGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  event_id?: string;
  status?: string;
}
