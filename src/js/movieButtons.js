import {
  saveToLocalStorage,
  removeFromLocalStorage,
  getFromLocalStorage,
} from './localStorage';
import { globalMovieId } from './modalOpen';
import { fetchMoviesDetails } from './fetchMovieApi';
import { createMyLibraryGallery } from './galleryBuilder';

// Modific numele butoanelor atunci când sunt selectate
const watchedButton = document.getElementById('watched-button');
const queueButton = document.getElementById('queue-button');

if (watchedButton) {
  watchedButton.addEventListener('click', () => {
    if (watchedButton.innerText === 'Add to Watched') {
      watchedButton.innerText = 'Watched';
      // Adăugați filmul la "Watched" în local storage
      saveToLocalStorage('watchedMovies', globalMovieId);
    } else {
      watchedButton.innerText = 'Add to Watched';
      // Eliminați filmul din "Watched" în local storage
      removeFromLocalStorage('watchedMovies', globalMovieId);
    }
    const watchedMovies = getFromLocalStorage('watchedMovies');
    fetchMoviesDetails(watchedMovies).then(r => createMyLibraryGallery(r));
  });
}

if (queueButton) {
  queueButton.addEventListener('click', () => {
    if (queueButton.innerText === 'Add to Queue') {
      queueButton.innerText = 'Queued';
      // Adăugați filmul la "Queue" în local storage
      saveToLocalStorage('queuedMovies', globalMovieId);
    } else {
      queueButton.innerText = 'Add to Queue';
      // Eliminați filmul din "Queue" în local storage
      removeFromLocalStorage('queuedMovies', globalMovieId);
    }
    const queuedMovies = getFromLocalStorage('queuedMovies');
    fetchMoviesDetails(queuedMovies).then(r => createMyLibraryGallery(r));
  });
}

export { watchedButton, queueButton };
