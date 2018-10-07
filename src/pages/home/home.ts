import { BookPage } from './../book/book';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

export class Book {
  label: string;
  file: string;
}

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  books: {}[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.books = [];

    

    let book3 = new Book();
    book3.label = "Open";
    book3.file =  "assets/books/open/";
    this.books.push(book3);

    

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  show(book) {
    console.log('show', book);
    this.navCtrl.push(BookPage, {
      book: book
    });
  }

}
