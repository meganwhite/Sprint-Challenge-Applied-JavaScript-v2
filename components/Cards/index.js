// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then(data => {
        console.log('data: ',data);
        const articlesObject = data.data.articles;
        console.log(articlesObject);
    })
    .catch(error => {
        console.log('The API is currently down, try again later', error);
    })

function createCard(article) {
    // create elements
    const card = document.createElement('div');
    const headline = document.createElement('div');
    const author = document.createElement('div');
    const imgContainer = document.createElement('div');
    const img = document.createElement('img');
    const byline = document.createElement('span');

    // build structure
    card.appendChild(headline);
    card.appendChild(author);
    author.appendChild(imgContainer);
    imgContainer.appendChild(img);
    author.appendChild(byline);

    // set classes
    card.classList.add('card');
    headline.classList.add('headline');
    author.classList.add('author');
    imgContainer.classList.add('img-container');

    // set content
    headline.textContent = article.headline;
    byline.textContent = `By ${article.authorName}`;
    img.setAttribute('src', article.authorPhoto);

    return card;

}











// axios.get('https://lambda-times-backend.herokuapp.com/topics')
//     .then(data => {
//         console.log('data: ',data)
//         const topicList = data.data.topics;
//         console.log(topicList);
//         topicList.forEach(topic => {
//             const tab = createTab(topic);
//             topics.appendChild(tab);
//         })

//     })
//     .catch(error => {
//         console.log('The API is currently down, try again later', error);
//     })