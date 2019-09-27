import {Recipe} from './recipe.model';
import {EventEmitter} from '@angular/core';
import {Ingredient} from '../shared/Ingredient.model';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('A test recipe', 'This is simply a test',
      'https://www.readyseteat.com/sites/g/files/qyyrlu501/files/uploadedImages/img_4201_1466.jpg',
      [new Ingredient('Meat', 1), new Ingredient('French Fries', 20)]),
    new Recipe('Another test recipe', 'This is simply a test',
      'https://cdn.pixabay.com/photo/2014/07/08/12/34/pizza-386717__340.jpg',
      [new Ingredient('Buns', 2), new Ingredient('Meat', 1)])
  ];

  getRecipies() {
    return this.recipes.slice();
  }
}
