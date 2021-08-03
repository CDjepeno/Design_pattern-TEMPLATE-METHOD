import { CaffeinDrink } from '../abstracts/CaffeineDrink';
export class Coffee extends CaffeinDrink {

  prepare() {
    return "Passage du café"
  }

  addSupplement() {
    return "Ajout du lait et du sucre"
  }

}