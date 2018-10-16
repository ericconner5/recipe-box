import { Component } from '@angular/core';
import Recipe from './models/recipe.model';
import { Converter } from './converter/converter.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'recipe-box';

  recipes: Recipe[] = [
    new Recipe("Rice", "some rice", [0,10], ["rice", "water", "salt"], ["cook", "eat"], 2),
    new Recipe("Hummus", "a tasty dip", [0,20], ["garbanzo beans", "water", "salt", "aquafaba (canned bean water)", "garlic", "EVOO"], ["open can", "cook", "blend", "eat"], 12, ["vegan", "vegetarian", "gluten-free"]),
    new Recipe("Toilet Wine", "a wine for when you have nothing but time... and raisins", [168,0], ["raisins", "water", "yeast", "zippered bag"], ["put raisins in zippered bag", "add water", "leave in toilet tank for a week"], 1, ["vegan", "vegetarian", "gluten-free"]),
    new Recipe("Banana Juice", "THE BANANA WON'T MELT!!!", [0,11], ["bananas", "water", "oil", "black pepper", "tomato juice"], ["put bananas in oil", "boil", "melt", "burn", "add pepper", "pour water into pot", "pour tomato juice on fire to extinguish"], 5, ["vegan", "vegetarian", "gluten-free"])
  ]
}
