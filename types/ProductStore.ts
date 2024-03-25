import type Product from './Product';

export default interface State {
  productInfo: Product | null;
  items: Product[];
}
