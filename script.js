var cont = document.getElementById("post-container");

function init(){
    console.log("begin");
    for(var i = 0; i < 5; i++){
        generatePost();
    }
    
}

function generateMore(){  
    if (cont.scrollHeight - cont.scrollTop === cont.clientHeight){
        generatePost();
    }
}

function generatePost(){
    var post = document.createElement("div");
    var user = document.createElement("div");
    var image = document.createElement("div");
    var underImage = document.createElement("div");
    var likebar = document.createElement("div");        
    var caption = document.createElement("div");
    post.className = "post";
    user.className = "user";
    image.className = "image";
    underImage.className = "underImage";
    likebar.className = "likebar";
    caption.className = "caption";

    var username = randomString();
    user.innerHTML = username;

    var heart = document.createElement("img");
    heart.src = "images/heart-icon.png";
    heart.onclick = function(){ clickedHeart(); }
    likebar.append(heart);

    caption.innerHTML = `<b>${username}</b> THIS IS A CAPTION`;

    underImage.append(likebar, caption);
    post.append(user, image, underImage);
    cont.append(post);
}

//generates and returns a random string
function randomString(){
    return Math.random().toString(36).replace('0.', '');
}

//toggles heart
function clickedHeart(){

}

/*<div class="post">
    <div class="user">SomeUser</div>
    <div class="image">An Image</div>
    <div class="underImage">
        <div class="likebar">Heart</div>
        <div class="caption"><b>SomeUser</b> This is some caption</div>
    </div>

</div> */