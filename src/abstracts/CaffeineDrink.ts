export abstract class CaffeinDrink {
  followRecipe() {
    return `
    ${this.boilWater()}
    ${this.prepare()}
    ${this.pourIntoCup()}
    ${this.addSupplement()}`
  }

  abstract prepare(): string
  abstract addSupplement(): string

  boilWater() {
    return "Portage de l'eau à ébulition"
  }

  pourIntoCup() {
    return "Remplissage de la tasse"
  }

  

}