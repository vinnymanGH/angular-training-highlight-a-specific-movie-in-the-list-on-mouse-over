import {Component, inject, Signal} from '@angular/core';
import {MovieItemComponent} from './movie-item/movie-item.component';
import {Movie} from './model/movie.model';
import {MoviesService} from './services/movies.service';


@Component({
  selector: 'app-root',
  standalone: true,

  templateUrl: 'app.component.html',
  imports: [
    MovieItemComponent
  ]
})
export class AppComponent {

  protected movies: Signal<Movie[]> = inject(MoviesService).getMovies();

}
