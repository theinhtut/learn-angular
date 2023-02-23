import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { map, tap } from 'rxjs'
import { Recipe } from '../recipes/recipe.model'

import { RecipeService } from '../recipes/recipe.service'

@Injectable({ providedIn: 'root' })
export class DataStorageService {
  constructor(private http: HttpClient, private recipeService: RecipeService) {}

  storeRecipes() {
    const recipes = this.recipeService.getRecipes()
    this.http
      .put(
        'https://ng-max-udemy-course-default-rtdb.asia-southeast1.firebasedatabase.app/recipes.json',
        recipes
      )
      .subscribe((response) => {
        console.log(response)
      })
  }

  fetchRecipes() {
    return this.http
      .get<Recipe[]>(
        'https://ng-max-udemy-course-default-rtdb.asia-southeast1.firebasedatabase.app/recipes.json'
      )
      .pipe(
        map((response) => {
          return response.map((res) => {
            return {
              ...res,
              ingredients: res.ingredients ? res.ingredients : [],
            }
          })
        }),
        tap((response) => {
          this.recipeService.setRecipes(response)
        })
      )
  }
}
