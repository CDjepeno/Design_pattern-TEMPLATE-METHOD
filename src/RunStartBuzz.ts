import { The } from './classes/The';
import { Coffee } from './classes/Coffee';
export class RunStartBuzz {
  static main1() {
    const the = new The()
    return the.followRecipe()
  }
  static main2() {
    const the = new Coffee()
    return the.followRecipe()
  }

}