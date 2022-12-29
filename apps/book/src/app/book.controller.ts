import {Controller,Get,Post,Put,Delete,Body,Param} from '@nestjs/common'
import { Book } from './book.dto';
import { BookService } from './book.service';
@Controller()
export class BookController{
    constructor(private bookService : BookService){

    }
    @Post('/add')
    addBook(@Body() book:Book) :string{
        return this.bookService.addBookService(book)
    }

    @Get('/findAll')
    getAllBooks(): Book[]{
        return this.bookService.findAllBooks()
    }

    @Put('/update')
    updateBook(@Body() book:Book):string{
        return this.bookService.updateBookService(book)
    }

    @Delete('/delete/:id')
    deleteBook(@Param('id') bookId : string):string{
    return this.bookService.deleteBookService(bookId)
    }


}