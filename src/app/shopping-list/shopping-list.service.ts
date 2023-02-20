import { Subject } from 'rxjs'
import { Ingredient } from '../shared/ingredient.model'

export class ShoppingListService {
  IngredientChanged = new Subject<Ingredient[]>()

  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ]

  getIngredients() {
    return this.ingredients.slice()
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient)
    this.IngredientChanged.next(this.ingredients.slice())
  }

  addIngredients(ingredients: Ingredient[]){
    this.ingredients.push(...ingredients)
    this.IngredientChanged.next(this.ingredients.slice())
  }

}
