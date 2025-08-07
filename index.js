const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21492
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 12502
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 15137
    }
]

const container = document.getElementById("posts-container");
const template = document.getElementById("post-template");

posts.forEach(post => {
    const clone = template.content.cloneNode(true);

    clone.querySelector(".avatar").src = post.avatar;
    clone.querySelector(".avatar").alt = `${post.name}'s Avatar`;

    clone.querySelector(".user-full-name").textContent = post.name;
    clone.querySelector(".location-text").textContent = post.location;

    clone.querySelector(".post-image").src = post.post;
    clone.querySelector(".post-image").alt = `Post by ${post.username}`;

    clone.querySelector(".like-count").textContent = `${post.likes.toLocaleString()} Likes`;
    clone.querySelector(".username-caption").innerHTML = `<b>${post.username}</b> ${post.comment}`;

    const heartIcon = clone.querySelector(".icons li img[alt='Like']");
    const likeCountEl = clone.querySelector(".like-count");

    let likeCount = post.likes;

    heartIcon.addEventListener("click", () => {
        likeCount++;
        likeCountEl.textContent = `${likeCount.toLocaleString()} Likes`;
        heartIcon.classList.toggle("liked");
    })

    container.appendChild(clone);
})

