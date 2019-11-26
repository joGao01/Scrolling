var cont = document.getElementById("post-container");

function init(){
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
    var imageCont = document.createElement("div");
    var underImage = document.createElement("div");
    var likebar = document.createElement("div");        
    var caption = document.createElement("div");
    post.className = "post";
    user.className = "user";
    imageCont.className = "imageCont";
    underImage.className = "underImage";
    likebar.className = "likebar";
    caption.className = "caption";

    var pfp = document.createElement("img");
    pfp.className = "pfp"; 
    user.append(pfp);
    
    var username = randomString();
    user.innerHTML = `<b>${username}</b>`;

    var image = document.createElement("img");
    image.src = "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&dpr=1&auto=format&fit=crop&w=416&h=312&q=60";
    image.className = "post-image";

    imageCont.append(image);
    
    var heart = document.createElement("img");
    heart.src = "images/heart-icon.png";
    heart.onclick = function(){ clickedHeart(this); }
    likebar.append(heart);

    caption.innerHTML = `<b>${username}</b> THIS IS A CAPTION`;

    underImage.append(likebar, caption);
    post.append(user, imageCont, underImage);
    cont.append(post);
}

//generates and returns a random string
function randomString(){
    return Math.random().toString(36).replace('0.', '');
}

//toggles heart
function clickedHeart(element){
    var licked = "images/heart-icon-liked.png";
    var not = "images/heart-icon.png";
    if ((element.src).includes(not)){
        element.src = licked; 
    } else {
        element.src = not;
    }
    
}

/*<div class="post">
    <div class="user">SomeUser</div>
    <div class="image">An Image</div>
    <div class="underImage">
        <div class="likebar">Heart</div>
        <div class="caption"><b>SomeUser</b> This is some caption</div>
    </div>

</div> */