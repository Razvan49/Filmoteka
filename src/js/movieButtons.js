import {
  saveToLocalStorage,
  removeFromLocalStorage,
  getFromLocalStorage,
} from './localStorage';
import { globalMovieId } from './modalOpen';

// Modific numele butoanelor atunci când sunt selectate
const watchedButton = document.getElementById('watched-button');
const queueButton = document.getElementById('queue-button');

let watchedClicked = false;
let queueClicked = false;

watchedButton.addEventListener('click', () => {
  if (!watchedClicked) {
    watchedButton.innerText = 'Watched';
    watchedClicked = true;
    // Adăugați filmul la "Watched" în local storage
    saveToLocalStorage('watchedMovies', globalMovieId);
    watchedButton.classList.add('modal_watched_active'); // Adăugați clasa aici
  } else {
    watchedButton.innerText = 'Add to Watched';
    watchedClicked = false;
    // Eliminați filmul din "Watched" în local storage
    removeFromLocalStorage('watchedMovies', globalMovieId);
    watchedButton.classList.remove('modal_watched_active'); // Eliminați clasa aici
  }
});

queueButton.addEventListener('click', () => {
  if (!queueClicked) {
    queueButton.innerText = 'Queued';
    queueClicked = true;
    // Adăugați filmul la "Queue" în local storage
    saveToLocalStorage('queuedMovies', globalMovieId);
    queueButton.classList.add('modal_queue_active'); // Adăugați clasa aici
  } else {
    queueButton.innerText = 'Add to Queue';
    queueClicked = false;
    // Eliminați filmul din "Queue" în local storage
    removeFromLocalStorage('queuedMovies', globalMovieId);
    queueButton.classList.remove('modal_queue_active'); // Eliminați clasa aici
  }
});
export { watchedButton, queueButton };
