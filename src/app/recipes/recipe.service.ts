import {Recipe} from './recipe.model';
import {Injectable} from '@angular/core';
import {Ingredient} from '../shared/Ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';
import {Subject} from 'rxjs';

@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();

  recipes: Recipe[] = [
    new Recipe('A test recipe', 'This is simply a test',
      'https://www.readyseteat.com/sites/g/files/qyyrlu501/files/uploadedImages/img_4201_1466.jpg',
      [new Ingredient('Meat', 1), new Ingredient('French Fries', 20)]),
    new Recipe('Another test recipe', 'This is simply a test',
      'https://cdn.pixabay.com/photo/2014/07/08/12/34/pizza-386717__340.jpg',
      [new Ingredient('Buns', 2), new Ingredient('Meat', 1)])
  ];

  constructor(private slService: ShoppingListService) {

  }

  getRecipie(id: number) {
    return this.recipes[id];
  }

  getRecipies() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

}
