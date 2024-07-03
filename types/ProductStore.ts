import type ProductType from './ProductType';

export default interface State {
  productInfo: typeof ProductType | null;
  items: ProductType[];
}
