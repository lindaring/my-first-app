import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A test recipe', 'This is simply a test',
      'https://www.readyseteat.com/sites/g/files/qyyrlu501/files/uploadedImages/img_4201_1466.jpg'),
    new Recipe('A test recipe', 'This is simply a test',
      'https://www.readyseteat.com/sites/g/files/qyyrlu501/files/uploadedImages/img_4201_1466.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
