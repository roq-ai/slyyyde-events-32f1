import { AttendanceInterface } from 'interfaces/attendance';
import { SubscriptionInterface } from 'interfaces/subscription';
import { UserInterface } from 'interfaces/user';
import { PlatformInterface } from 'interfaces/platform';
import { GetQueryInterface } from 'interfaces';

export interface EventInterface {
  id?: string;
  name: string;
  description: string;
  location: string;
  date_time: any;
  organizer_id?: string;
  platform_id?: string;
  created_at?: any;
  updated_at?: any;
  attendance?: AttendanceInterface[];
  subscription?: SubscriptionInterface[];
  user?: UserInterface;
  platform?: PlatformInterface;
  _count?: {
    attendance?: number;
    subscription?: number;
  };
}

export interface EventGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  description?: string;
  location?: string;
  organizer_id?: string;
  platform_id?: string;
}
