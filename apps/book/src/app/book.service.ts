import{Injectable} from '@nestjs/common'
import { Book } from "./book.dto";
import { v4 as uuidv4 } from 'uuid';


@Injectable()
export class BookService{
    public books:Book[]=[];


    //add book
    addBookService(book:Book):string{
        //id auto generate :uuid
        book.id=uuidv4()
        this.books.push(book);
        return {book}
    }

    //update book

    updateBookService(book:Book):string{
        let index =this.books.findIndex((currentBook)=>{
return currentBook.id==book.id
        })
        this.books[index] =book;
        return 'Book has been successfully updated'
    }

    //delete book
deleteBookService(bookId:string):string{
    this.books =this.books.filter((book)=>{
        return  book.id != bookId
    });
    return 'book has been deleted'
   
}
//get all books

findAllBooks():Book[]{
    return this.books
}

}