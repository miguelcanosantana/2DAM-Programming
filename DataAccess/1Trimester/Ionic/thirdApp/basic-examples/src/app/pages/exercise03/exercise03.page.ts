import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/model/article';
import { shoppingCart } from 'src/app/model/shopping-cart';

@Component({
  selector: 'app-exercise03',
  templateUrl: './exercise03.page.html',
  styleUrls: ['./exercise03.page.scss'],
})
export class Exercise03Page implements OnInit {

  totalPrice: number = 0;
  newArticle: Article;
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
    //newArticle: Article;
    this.newArticle.item = this.newName;
    this.newArticle.price = this.newPrice;
    this.newArticle.quantity = this.newQuantity;

    this.articles.push(this.newArticle);

    this.calculateTotal();
  }

  //Calculate on init total price of total articles
  calculateTotal(){
    for (let i = 0; i < this.articles.length; i++) {
      let tempArtic: Article = this.articles[i];
      let tempPrice: number = (tempArtic.price * tempArtic.quantity);
      this.totalPrice += tempPrice;
    }

  }

}
