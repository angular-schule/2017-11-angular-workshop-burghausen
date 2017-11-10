import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book } from './book';

@Injectable()
export class BookStoreService {

  constructor(private http: HttpClient) { }

  getAllStatic(): Book[] {

    return [
      new Book('000', 'Angular', 'Einstieg in die komponentenbasierte Entwicklung...', 5),
      new Book('111', 'AngularJS', 'Einstieg in das Framework')
    ];
  }
}
