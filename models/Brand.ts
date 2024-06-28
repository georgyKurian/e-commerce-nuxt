import { Model } from 'pinia-orm';

export default class Brand extends Model {
  static entity = 'brands';

  static fields() {
    return {
      id: this.attr(null),
      name: this.string('John Doe'),
    };
  }

  declare id: number | null;
  declare name: string;
}
