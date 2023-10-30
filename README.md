<h2>Netflix Application</h2>
<hr></hr>

![](src/netflix.gif)

<hr></hr>

# Libraries Used

- axios
- @splidejs/react-splide
- react-router-dom
- redux
- react-redux
-redux-thunk

# Resources

- Api: https://developer.themoviedb.org/reference/intro/getting-started
- Image Url > https://image.tmdb.org/t/p/original
- Category > https://api.themoviedb.org/3/genre/movie/list

# Done

- completed redux installation
- Pull popular movie data > transferred to store
- Randomly listed one of the Popular movies in hero.jsx field
- Capture Movie Categories > import to store
- A <ListMovies /> was created for each category in the store.
- Movie data related to whatever category is in the List Movies component was retrieved
- Movies are listed in a slider in List Movies
- If one clicked on one of the movies, it was directed to a URL containing its id
- Movie Detail Created
- Retrieved the parameter in the url
- Using the parameter, detailed data of the relevant movie was captured
- Information is listed on the screen according to the response from the API