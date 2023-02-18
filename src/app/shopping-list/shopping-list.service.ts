import { EventEmitter } from '@angular/core'
import { Ingredient } from '../shared/ingredient.model'

export class ShoppingListService {
  IngredientChanged = new EventEmitter<Ingredient[]>()

  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ]

  getIngredients() {
    return this.ingredients.slice()
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient)
    this.IngredientChanged.emit(this.ingredients.slice())
  }

  addIngredients(ingredients: Ingredient[]){
    this.ingredients.push(...ingredients)
    this.IngredientChanged.emit(this.ingredients.slice())
  }

}
