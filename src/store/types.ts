export interface PriceRanges {
  min: number;
  max: number;
}
export interface Color {
  id:string;
  color:string;
}
export interface Size{
  id:string;
  size:string;
}
export interface Category{
  name:string;
}
export interface Items{
  id:string;
  name:string;
  category:string;
  category_name:string;
  category_id:string;
  gender:string;
  price:number;
  type:string;
  colors:Color[];
  sizes:Size[];
}
export interface Item{
  items:Item[];
}


