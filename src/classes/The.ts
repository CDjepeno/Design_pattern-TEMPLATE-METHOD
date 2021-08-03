import { CaffeinDrink } from '../abstracts/CaffeineDrink';
export class The extends CaffeinDrink {

  prepare() {
    return "Infusion du thé"
  }

  addSupplement() {
    return "Ajout du citron"
  }

}