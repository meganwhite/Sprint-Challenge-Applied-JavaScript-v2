// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

const topics = document.querySelector('.topics');

axios.get('https://lambda-times-backend.herokuapp.com/topics')
    .then(data => {
        console.log('data: ',data)
        const topicList = data.data.topics;
        console.log(topicList);
        topicList.forEach(topic => {
            const tab = createTab(topic);
            topics.appendChild(tab);
        })

    })
    .catch(error => {
        console.log('The API is currently down, try again later', error);
    })

function createTab(tabTopic) {
    // create elements
    const tab = document.createElement('div');

    // set classes
    tab.classList.add('tab');

    // set text content
    tab.textContent = tabTopic;

    return tab;
}










// axios.get('https://api.github.com/users/meganwhite')
//   .then(object => {
//     console.log('Github info: ', object)
//     const myData = object.data;
//     console.log(myData);
//     const userCard = createCard(myData);
//     cards.appendChild(userCard);
//   })
//   .catch(error => {
//     console.log('The API is currently down, try again later', error)
//   })
