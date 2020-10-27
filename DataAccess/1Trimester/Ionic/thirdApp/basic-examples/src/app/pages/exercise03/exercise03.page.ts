import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/model/article';
import { shoppingCart } from 'src/app/model/shopping-cart';

@Component({
  selector: 'app-exercise03',
  templateUrl: './exercise03.page.html',
  styleUrls: ['./exercise03.page.scss'],
})
export class Exercise03Page implements OnInit {

  totalPrice: number;

  newName: string;
  newPrice: number;
  newQuantity: number;

  //Imported from model/article.ts
  articles: Article[];


  constructor() { }

  ngOnInit() {
    //Imported from model/shopping-cart.ts
    this.articles = shoppingCart;

    //Calculates total for the first time
    this.calculateTotal();
    

  }

  //Add new article to the list pushing inside Array
  addArticle() {

    //Need to define the new Article JSON
    let newArticle: Article = {
      item: "",
      price: 0,
      quantity: 0,
    }

    newArticle.item = this.newName;
    newArticle.price = this.newPrice;
    newArticle.quantity = this.newQuantity;

    this.articles.push(newArticle);

    this.calculateTotal();
  }

  //Calculate total price of total articles
  calculateTotal(){

    //Resets to 0 every new calc
    this.totalPrice = 0

    for (let i = 0; i < this.articles.length; i++) {
      let tempArtic: Article = this.articles[i];
      let tempPrice: number = (tempArtic.price * tempArtic.quantity);
      this.totalPrice += tempPrice;
    }

  }

}
