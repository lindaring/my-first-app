import {Recipe} from './recipe.model';

export class RecipeService {
  recipes: Recipe[] = [
    new Recipe('A test recipe', 'This is simply a test',
      'https://www.readyseteat.com/sites/g/files/qyyrlu501/files/uploadedImages/img_4201_1466.jpg'),
    new Recipe('Another test recipe', 'This is simply a test',
      'https://www.readyseteat.com/sites/g/files/qyyrlu501/files/uploadedImages/img_4201_1466.jpg')
  ];

  getRecipies() {
    return this.recipes.slice();
  }
}
