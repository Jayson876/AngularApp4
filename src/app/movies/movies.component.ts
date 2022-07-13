import { Component, OnInit } from '@angular/core';
import { BaseRouteReuseStrategy } from '@angular/router';
import { Movie } from '../Models/movie';
// import { fakeMovies } from '../fakeMovie';
import { MovieService } from '../movie.service';



@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  movie: Movie = {
    id: 1,
    name: "The Sea Beast",
    description: "The life of a legendary sea monster hunter is turned upside down when a young girl stows away on his ship.",
    releaseYear: 2022,
    image: "https://m.media-amazon.com/images/M/MV5BODkyYTRlMDItMDlhMC00MzkzLWI3NzQtOGVlMjdjYThlNDM3XkEyXkFqcGdeQXVyMTA1OTcyNDQ4._V1_FMjpg_UX1000_.jpg"
  }
  // movies = fakeMovies;
  selectedMovie!: Movie;
  movies!: Movie[];

  // onSelectMovie(movie: Movie): void {
  //   this.selectedMovie = movie;
  //   console.log(`this.selectedMovie is ${JSON.stringify(this.selectedMovie)}`)
  // }

  getMoviesfromService(): void{
    //this.movies = this.movieService.getMovies();
    this.movieService.getMovies().subscribe(
      (newMovies) => {
        this.movies = newMovies;
        console.log(`this.movies is ${JSON.stringify(this.movies)}`)
      }
    );
  }

  constructor(private movieService: MovieService)  {}

  ngOnInit(): void {
    this.getMoviesfromService();

    var counter = 0;
    document.addEventListener('keyup', function(e){
      switch (e.key){
        case 'ArrowUp':
          counter -= 36;
          document.querySelector('.movies-section')?.setAttribute('style', `transform: perspective(2000px) rotateX(${counter}deg);`);
          break;
        case 'ArrowDown':
          counter += 36;
          document.querySelector('.movies-section')?.setAttribute('style', `transform: perspective(2000px) rotateX(${counter}deg);`);
          break;
      }
    });

        window.addEventListener('wheel', function(event)
    {
    if (event.deltaY < 0)
    {
      counter -= 36;
      document.querySelector('.movies-section')?.setAttribute('style', `transform: perspective(2000px) rotateX(${counter}deg);`);
    }
    else if (event.deltaY > 0)
    {
      counter += 36;
      document.querySelector('.movies-section')?.setAttribute('style', `transform: perspective(2000px) rotateX(${counter}deg);`);
    }
    });

  }
}
