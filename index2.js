async function GetPost() {
    let URL = window.location.search;
    let Body = document.querySelector(".bodyArticles");
    let title = document.querySelector(".title");
    let responce = await fetch(`https://gorest.co.in/public/v2/posts/${URL}`);
    let result = await responce.json();
    title.textContent = result[0].title;
    Body.textContent = result[0].body;
}

GetPost()