import { UserInterface } from 'interfaces/user';
import { OrderInterface } from 'interfaces/order';
import { GetQueryInterface } from 'interfaces';

export interface OperationInterface {
  id?: string;
  user_id: string;
  order_id: string;
  type: string;
  status: string;
  description: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  order?: OrderInterface;
  _count?: {};
}

export interface OperationGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  order_id?: string;
  type?: string;
  status?: string;
  description?: string;
}
