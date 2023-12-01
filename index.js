const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

const mainEl = document.getElementById("main");

// Render all available posts to html document
function renderPosts()
{
    for (let i = 0; i < posts.length; i++)
    {
        displayPost(posts[i]);
    }
}

// Adds content from a post into html
function displayPost(objPost)
{
    mainEl.innerHTML += 
    
                `<section>
                    
                    <div class="container-top">
                        <img class="avatar" src="${objPost['avatar']}">
                        <div>
                            <p class="name">${objPost['name']}</p>
                            <p class="location">${objPost['location']}</p>
                        </div>
                    </div>
                        
                    <div class="container-middle">
                        <img class="post" src="${objPost['post']}">
                    </div>
                
                    <div class="container-bottom">
                        <div class="btns">
                            <img id="btn-like" onclick="addLike('${objPost['post']}')" src="images/icon-heart.png">
                            <img src="images/icon-comment.png">
                            <img src="images/icon-dm.png">
                        </div>
                        <p class="likes"><span id="likesEl-${objPost['post']}">${objPost['likes']}</span> likes</p>
                        <p class="comment"><span class="username">${objPost['username']}</span> ${objPost['comment']}</p>
                    </div>
                    
                </section>`
}

// Adds like to specific post when called
/*
    This function uses the value of post in posts object to find the correct element id.
    
    NOTE: This only modifies the value in html page.
*/
function addLike(post)
{
    let addLikeToEl = document.getElementById(`likesEl-${post}`)
    
    let addedNum = parseInt(addLikeToEl.textContent) + 1;
    addLikeToEl.textContent = addedNum;
}

// Render all posts
renderPosts();

