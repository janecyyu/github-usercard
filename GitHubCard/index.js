/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/
function axiosMaker(username) {
  axios.get(`https://api.github.com/users/${username}`).then(Response => {
    // console.log(Response);
    document.querySelector(".cards").append(UserCard(Response.data));
  });
}

let userList = ["janecyyu"];

//get a link of my followers
axios.get(`https://api.github.com/users/janecyyu`).then(Response => {
  //get username from the link
  axios.get(Response.data.followers_url).then(Response => {
    //push followers to the userList
    Response.data.forEach(user => userList.push(user.login));
    //display the user list
    userList.forEach(user => axiosMaker(user));
  });
});

// console.log(userList);
// userList.forEach(user => console.log(user));
//get data from the follower's link

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 
   Skip to Step 3.
*/
/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/
function UserCard(userData) {
  //create new elements
  const cardContainer = document.createElement("div"),
    userImage = document.createElement("img"),
    infoBox = document.createElement("div"),
    displayName = document.createElement("h2"),
    userName = document.createElement("h4"),
    location = document.createElement("p"),
    profileLink = document.createElement("a"),
    profile = document.createElement("span"),
    follower = document.createElement("p"),
    following = document.createElement("p"),
    bio = document.createElement("p"),
    btnBox = document.createElement("div"),
    btnOpen = document.createElement("button"),
    btnClose = document.createElement("button"),
    cardInside = document.createElement('div'),
    insideContent = document.createElement('p');

  // append them
  cardContainer.append(userImage);
  cardContainer.append(infoBox);
  cardContainer.append(btnBox);
  cardContainer.append(cardInside);
  infoBox.append(displayName);
  infoBox.append(userName);
  infoBox.append(location);
  infoBox.append(profile);
  infoBox.append(profileLink);
  infoBox.append(follower);
  infoBox.append(following);
  infoBox.append(bio);
  btnBox.append(btnOpen);
  btnBox.append(btnClose);
  cardInside.append(insideContent);


  //add class name
  cardContainer.classList.add("card");
  displayName.classList.add("name");
  userName.classList.add("username");
  btnBox.classList.add('buttonBox');
  btnClose.classList.add('hide-btn');
  cardInside.classList.add('hide-btn');

  //add text content
  displayName.textContent = userData.name;
  userName.textContent = userData.login;
  location.textContent = "location: " + userData.location;
  profile.textContent = "profile: ";
  profileLink.textContent = userData.blog;
  profileLink.href = userData.blog;
  follower.textContent = "follower: " + userData.followers;
  following.textContent = "following: " + userData.following;
  bio.textContent = "bio: " + userData.bio;
  userImage.src = userData.avatar_url;
  btnOpen.textContent = "more";
  btnClose.textContent = "close";
  insideContent.textContent = "Welcome!";

  //add an event listener for btn
  btnBox.addEventListener('click', ev => {
    btnOpen.classList.toggle("hide-btn");
    btnClose.classList.toggle("hide-btn");
    cardInside.classList.toggle("card-inside");
    cardContainer.classList.toggle('toggle-on');
  })

  return cardContainer;
}
/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = [];

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the
          following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
