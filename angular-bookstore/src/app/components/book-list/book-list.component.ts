import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/model/book';
import { BookService } from 'src/app/services/book.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  books: Book[];
  currentCategoryId: number;

  constructor(private bookService: BookService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(() => { this.listBook() })
  }

  listBook() {
    const hasCategoryId: boolean = this.activatedRoute.snapshot.paramMap.has('id');
    //console.log(hasCategoryId);
    
    if (hasCategoryId) {
      this.currentCategoryId = +this.activatedRoute.snapshot.paramMap.get('id');
    } else {
      this.currentCategoryId = 1;
    }
    //console.log(this.currentCategoryId);
    this.bookService.getBooks(this.currentCategoryId).subscribe(
      data => this.books = data
    );
  }

}
