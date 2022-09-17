

const tweetForm = document.querySelector('#tweetForm');
const tweetsContainer = document.querySelector('#tweets');
tweetForm.addEventListener('submit', function (e) {
    e.preventDefault();

    // const usernameInput = document.querySelectorAll('input')[0];
    // const tweetInput = document.querySelectorAll('input')[1];
    const usernameInput = tweetForm.elements.username;
    const tweetInput = tweetForm.elements.tweet;
    addTweet(usernameInput.value, tweetInput.value)
    usernameInput.value = '';
    tweetInput.value = '';
});

const addTweet = (username, tweet) => {
    const smallContainer = document.createElement("div");
    smallContainer.classList.add("singleTweet");
    smallContainer.classList.add("col");
    //smallContainer.classList.add("col-md-6");

    // username
    const userNameP = document.createElement("p");

    userNameP.innerHTML = "<b>" + username + "</b>";

    smallContainer.insertAdjacentElement("beforeend", userNameP);

    // linebreak between username and tweet
    const lineBreak = document.createElement("br");
    smallContainer.insertAdjacentElement("beforeend", lineBreak);

    // user tweet
    const tweetP = document.createElement("p");
    tweetP.append(tweet);
    smallContainer.insertAdjacentElement("beforeend", tweetP);

    // single tweet container
    tweetsContainer.insertAdjacentElement("beforeend", smallContainer);
}

