<!-- ABOUT THE PROJECT -->
## About The Project & Decisions taken

* The naming of the proyect came to me as some kind of word games between 'Deviget' and 'Reddit'
* No TDD was using during the development since I focused on doing a lot of the UI work without external libraries, so I began with some kind of mock ups to get the look & feel I wanted
* Tests were added after having a funcional UI E2E flow
* Typescript was used as the language of choice. For me it gives a better structure to the proyect and clarity to future devs or even myself.

UI Decisions: 
* Every device above 1000px of width will use a split layout. Posts on the left and the detail on the right
* Every device below 1000px of width will use a second route when clicking on a post, taking the user to the post detail. From the detail the user can go back to the list
* Dismissing all posts will automatically fetch the next page
* To distinguish an already visited post instead of a badge I chose to change the border and font color of a post item
* Images will not be scaled
* If a post has a picture (besides thumbnail), clicking on said image will open a new tab with it's content

### Built With

* [react](https://reactjs.org/)
* [react-spring](https://www.react-spring.io/). Used only for complex animations
* [react-redux](https://react-redux.js.org/)
* [redux-saga](https://redux-saga.js.org/). As a middleware
* [Moment](https://momentjs.com/). Uses to transform dates to a human-readable format
* [styled-components](https://styled-components.com/). Used to style several components
* [jest](https://jestjs.io/). Testing framework
* [react-testing-library](https://github.com/testing-library/react-testing-library). A lightweight testing library
* [axios](https://github.com/axios/axios). To Handle API calls
* [react-spinners](https://github.com/davidhu2000/react-spinners). To Handle loading spinners

### Proyect demo
* https://weinrib.github.io/reddiget/

### Bad decisions made / What to improve
At first, I tried to stay away as much as possible from external libraries, that brought at least 2 consequences
* Should have used a UI library to handle flexbox instead of implementing it on my own. It took too much time
* The same could be said about styling. I do like how the final model looks like but it can certainly be improved
* Pagination certainly can be improved. My current code does not take into account that a post position can change when upvoted enough times. I couldn't find a solution around this one