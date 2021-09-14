ERROR: The click event was showing the wrong result.

REASON: I did not add properly the function inside the eventListener.

The error: amsterdam.addEventListener('click', getCityWeather('amsterdam'));

The correct: amsterdam.addEventListener('click', () => getCityWeather('amsterdam'));

REFERENCE LINK: https://developer.mozilla.org/en-US/docs/Web/Events/Event_handlers
