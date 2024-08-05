export interface Item {
  id: string;
  name: string;
  skuCode: string;
  qty: number;
  costPrice: number;
  msrpPrice: number;
  warehouseId: string;
}
export interface deleteItem {
  message: string;
  itemDTO: Item;
}
