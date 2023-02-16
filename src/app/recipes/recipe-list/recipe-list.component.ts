import { Component, OnInit, EventEmitter, Output } from '@angular/core'

import { Recipe } from '../recipe.model'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>()
  recipes: Recipe[] = [
    new Recipe(
      'Pizza',
      'just a simple pizza test',
      'https://assets.bonappetit.com/photos/61b775620fb3fcc4cbf036c1/master/pass/20211208%20Spaghetti%20Squash%20with%20Tomato%20Sauce%20and%20Mozarella%20LEDE.jpg'
    ),
    new Recipe(
      'Pasta',
      'just pasta description',
      'https://images.immediate.co.uk/production/volatile/sites/30/2013/05/Puttanesca-fd5810c.jpg'
    ),
  ]

  constructor() {}
  ngOnInit() {}

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe)
  }
}
