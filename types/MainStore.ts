export interface MainStore {
  user: typeof User | null;
  cart: (typeof CartItem)[];
}
