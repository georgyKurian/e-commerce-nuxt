import { Model, createORM, useRepo, type PiniaOrmPlugin } from 'pinia-orm';
import Brand from './Brand';
import { useAxiosRepo } from '@pinia-orm/axios';
import { createPiniaOrmAxios } from '@pinia-orm/axios';
import axios from 'axios';

export class Product extends Model {
  static entity = 'products';

  static fields() {
    return {
      id: this.attr(null),
      //brand: this.belongsTo(Brand, 'brandId'),
      status: this.string(null),
      attribute_data: this.attr({}),
    };
  }

  declare id: number | null;
  //declare brand: typeof Brand;
  declare status: string;
  declare attribute_data: Object;
}

export const productRepository = useAxiosRepo(Product);
