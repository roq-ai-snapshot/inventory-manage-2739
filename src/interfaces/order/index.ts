import { OperationInterface } from 'interfaces/operation';
import { UserInterface } from 'interfaces/user';
import { ProductInterface } from 'interfaces/product';
import { GetQueryInterface } from 'interfaces';

export interface OrderInterface {
  id?: string;
  user_id: string;
  product_id: string;
  quantity: number;
  status: string;
  total_price: number;
  created_at?: any;
  updated_at?: any;
  operation?: OperationInterface[];
  user?: UserInterface;
  product?: ProductInterface;
  _count?: {
    operation?: number;
  };
}

export interface OrderGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  product_id?: string;
  status?: string;
}
