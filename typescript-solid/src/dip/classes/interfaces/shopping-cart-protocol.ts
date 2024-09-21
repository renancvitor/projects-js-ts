import { CartItem } from "./cart-item";

export interface ShoppingCartProcol {
  items: Readonly<CartItem[]>
  addItem(item: CartItem): void;
  removeItem(index: number): void;
  total(): number;
  totalWithDiscount(): number;
  isEmpty(): boolean;
  clear(): void;
}
