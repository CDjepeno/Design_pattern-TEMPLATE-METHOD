import { RunStartBuzz } from '../src/RunStartBuzz';
import { Coffee } from '../src/classes/Coffee';
import { The } from '../src/classes/The';
describe('Coffee class test', () => {
  it("should be have coffee classe", () => {
    const result = new The()
    expect(result).toBeDefined()
  })
  it("should be have followRecipe method in classe", () => {
    const result = new The()
    expect(result.followRecipe).toBeDefined()
  })
  it("should be have boilWater method in classe and return right string", () => {
    const result = new The()
    expect(result.boilWater()).toBe("Portage de l'eau à ébulition")
  })

  it("should be have pouInToCup method in classe and return right string", () => {
    const result = new The()
    expect(result.pourIntoCup()).toBe("Remplissage de la tasse")
  })

})

describe('The class test', () => {
  it("should be have coffee classe", () => {
    const result = new Coffee()
    expect(result).toBeDefined()
  })
  it("should be have coffee followRecipe in classe", () => {
    const result = new Coffee()
    expect(result.followRecipe).toBeDefined()
  })
  it("should be have coffee boilWater in classe and return right string", () => {
    const result = new Coffee()
    expect(result.boilWater()).toBe("Portage de l'eau à ébulition")
  })
  it("should be have coffee pouInToCup in classe and return right string", () => {
    const result = new Coffee()
    expect(result.pourIntoCup()).toBe("Remplissage de la tasse")
  })
})
 
describe('RunStartbuzz', () => {
  it("Should be return good string", () => {
    expect(RunStartBuzz.main1()).toBe(`
    Portage de l'eau à ébulition
    Infusion du thé
    Remplissage de la tasse
    Ajout du citron`)
  })
  it("Should be return good string", () => {
    expect(RunStartBuzz.main2()).toBe(`
    Portage de l'eau à ébulition
    Passage du café
    Remplissage de la tasse
    Ajout du lait et du sucre`) 
  })
})
