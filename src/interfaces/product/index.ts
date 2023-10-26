import { InventoryInterface } from 'interfaces/inventory';
import { OrderInterface } from 'interfaces/order';
import { GetQueryInterface } from 'interfaces';

export interface ProductInterface {
  id?: string;
  name: string;
  barcode: string;
  price: number;
  quantity: number;
  created_at?: any;
  updated_at?: any;
  inventory?: InventoryInterface[];
  order?: OrderInterface[];

  _count?: {
    inventory?: number;
    order?: number;
  };
}

export interface ProductGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  barcode?: string;
}
