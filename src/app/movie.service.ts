import { Injectable } from '@angular/core';
import { fakeMovies } from './fakeMovie';
import { Movie } from './Models/movie';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  getMovies(): Observable<Movie[]>{
    this.messageService.add(`${new Date().toLocaleDateString()} - Movie List retrieved from Service`)
    return of (fakeMovies);
    
  }

  getMovieById(id: number):Observable<Movie | any>{
    return of (fakeMovies.find(theMovie => theMovie.id === id));
  }

  constructor(public messageService: MessageService) { }
}
