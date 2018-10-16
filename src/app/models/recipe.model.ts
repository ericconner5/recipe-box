export default class Recipe {
  public beenCooked: boolean = false;
  constructor(public title: string, public description: string, public cookTime: [number, number], public ingredients: string[], public directions: string[], public servings: number, public dietaryRestrictions: string[] = ['none']) {}

  cooked() {
    this.beenCooked = true;
  }
}
