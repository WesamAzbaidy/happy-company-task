export interface Warehouses {
  totalWarehouses: number;
  totalPages: number;
  pageNumber: number;
  pageSize: number;
  warehouses: Warehouse[];
}

export interface Warehouse {
  id: string;
  name: string;
  address: string;
  city: string;
  countryID: string;
}

export interface deleteWarehouse {
  message: string;
  warehouseDto: Warehouse;
}
