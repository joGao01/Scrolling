var bigCont = document.getElementById("container");
var cont = document.getElementById("post-container");
var clocks = ["twelve.png", "one.png", "two.png", "three.png", "four.png", "five.png",
            "six.png", "seven.png", "eight.png", "nine.png", "ten.png", "eleven.png"];
var curr = [];
var colors = []; //correspends to "threads"

function init(){
    for(var i = 0; i < 5; i++){
        generatePost("images/black.png", "white");
    }
}

function generateMore(){  
    /*if (bigCont.scrollTop >= 8018){
        console.log("scroll Height: " + bigCont.scrollHeight);

        console.log("scroll top:" + bigCont.scrollTop);
    } */
    if (bigCont.scrollHeight - (bigCont.offsetHeight + bigCont.scrollTop) <= 200){
        if (curr.length != 0){
            //pick a random ind of curr (thread-ish), generate post from that num, then increment that index
            ind = Math.floor(Math.random()*curr.length);
            console.log(curr);
            generatePost("images/" + clocks[curr[ind]], colors[ind]);
            curr[ind] --; //decrement
            if (curr[ind] < 0) {
                curr[ind] = curr.length - 1;
            }
        } else {
            generatePost("images/black.png", "white");
        }
    }
}

function generatePost(img, color){
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
    image.src = img;
    image.className = "post-image";

    imageCont.append(image);
    imageCont.style.backgroundColor = color;
    
    var heart = document.createElement("img");
    heart.src = "images/heart-icon.png";
    heart.onclick = function(){ clickedHeart(this); }
    likebar.append(heart);
    //var likedNumber = document.createTextNode;
    //likedNumber = `${foreverIncr(n)}`

    caption.innerHTML = `<b>${username}</b> THIS IS A CAPTION`;

    underImage.append(likebar, caption);
    post.append(user, imageCont, underImage);
    cont.append(post);
}

//generates and returns a random string
function randomString(){
    return Math.random().toString(36).replace('0.', '');
}

//returns random color as a string rgb
function randomColor(){
    var red = (Math.random()*50) + 175;
    var green = (Math.random()*50) + 175;
    var blue = (Math.random()*50) + 175;
    return `rgb(${red}, ${green}, ${blue})`;
}

//toggles heart
function clickedHeart(element){
    var licked = "images/heart-icon-liked.png";
    var not = "images/heart-icon.png";
    if ((element.src).includes(not)){
        colors.push(randomColor()); 
        curr.push(11);
        generatePost("images/" + clocks[0], colors[colors.length-1]);
        
        element.src = licked;
    } else {
        element.src = not;
        colors.pop();
        curr.pop();
    }
    console.log(curr);
}

/*an array of clocks. a list of pointers*/

/*<div class="post">
    <div class="user">SomeUser</div>
    <div class="image">An Image</div>
    <div class="underImage">
        <div class="likebar">Heart</div>
        <div class="caption"><b>SomeUser</b> This is some caption</div>
    </div>

</div> */