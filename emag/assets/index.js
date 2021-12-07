let data1 = [
    [document.getElementById("myA"), document.getElementById("my-acount-hidden")],
    [document.getElementById("myFav"), document.getElementById("my-fav-hidden")],
    [document.getElementById("myShopingCart"), document.getElementById("my-shoping-cart-hidden")]
];

let changHiddenBanner = function(id) {

    if (id.style.display == "flex") {
        id.style.display = "none";
    } else {
        id.style.display = "flex";
    }
}

for (let i = 0; i < data1.length; i++) {
    for (let j = 0; j < data1[i].length; j++) {
        data1[i][j].addEventListener("mouseover", function() { changHiddenBanner(data1[i][1]) });
        data1[i][j].addEventListener("mouseout", function() { changHiddenBanner(data1[i][1]) });
    }
}


// -------

let prevs = document.getElementsByClassName("prev");
let nexts = document.getElementsByClassName("next");
let i = 7;
let k;

let goPrev = function(e, n) {
    n.preventDefault();
    n.target.parentNode.style.cursor = "pointer";
    i = i - 5;

    if (i < 1) {
        i = 17;
    }
    location.hash = `slide-${e}-` + i;

}

let goNext = function(e, n) {
    n.target.parentNode.style.cursor = "pointer";
    n.preventDefault();
    i = i + 4;
    if (i > 17) {
        i = 1;
    }
    window.location.hash = `slide-${e}-` + i;

}
let n = 1;
for (let j = 0; j < prevs.length; j++) {
    prevs[j].addEventListener("click", goPrev.bind(event, n));
    nexts[j].addEventListener("click", goNext.bind(event, n));
    ++n;
}



// -------


let changeFav = function(e) {
    if (e.target.style.backgroundImage === "url(\"https://img.icons8.com/ios-filled/24/ff0000/like.png\")") {
        e.target.style.backgroundImage = "url(\"https://img.icons8.com/ios/24/444444/like--v1.png\")";

        let div = document.createElement("div");
        div.style.backgroundColor = "white";
        div.style.position = "fixed";
        div.style.top = "100px";
        div.style.width = "300px";
        div.style.right = "10px";
        div.style.height = "auto";
        div.style.padding = "20px"
        div.style.display = "flex";
        div.style.flexDirection = "row";
        div.style.gap = "30px";
        div.style.justifyContent = "center";
        div.style.alignItems = "center";
        div.id = "remove";

        let img = document.createElement("img");
        img.src = "https://img.icons8.com/ios/50/444444/like--v1.png";
        div.appendChild(img);

        let p = document.createElement("p");
        p.innerText = "Продуктът беше премахнат от списъка Любими";
        div.appendChild(p);
        document.body.appendChild(div);

        setTimeout(function() {
            let o = 1;
            let remove = document.getElementById("remove");
            let hideBannerFavorite = function() {
                if (o > 0) {
                    o -= 0.1;
                    remove.style.opacity = o;
                    window.requestAnimationFrame(hideBannerFavorite);
                } else {
                    remove.parentNode.removeChild(remove);
                }
            };

            window.requestAnimationFrame(hideBannerFavorite);
        }, 1200);

    } else {
        e.target.style.backgroundImage = "url(\"https://img.icons8.com/ios-filled/24/ff0000/like.png\")";
        let div = document.createElement("div");
        div.style.backgroundColor = "white";
        div.style.position = "fixed";
        div.style.top = "200px";
        div.style.right = "10px";
        div.style.height = "auto";
        div.style.width = "300px";
        div.style.padding = "20px"
        div.style.display = "flex";
        div.style.zIndex = "1202";
        div.style.flexDirection = "row";
        div.style.gap = "30px";
        div.style.justifyContent = "center";
        div.style.alignItems = "center";
        div.id = "add";

        let img = document.createElement("img");
        img.src = "https://img.icons8.com/ios-filled/50/ff0000/like.png";
        div.appendChild(img);

        let p = document.createElement("p");
        p.innerText = "Продуктът беше добавен в Любими";
        div.appendChild(p);
        document.body.appendChild(div);

        setTimeout(function() {
            let o = 1;
            let add = document.getElementById("add");
            let hideBannerFavorite = function() {
                if (o > 0) {
                    o -= 0.1;
                    add.style.opacity = o;
                    window.requestAnimationFrame(hideBannerFavorite);
                } else {
                    add.parentNode.removeChild(add);
                }
            };

            window.requestAnimationFrame(hideBannerFavorite);
        }, 1200);
    }
}

let divId;

let showBluBanner = function(e) {
    let div = document.createElement("span");
    div.style.position = "absolute";
    div.style.width = "auto";
    div.style.top = "8px";
    div.style.right = "40px";
    div.style.backgroundColor = "#22A7F0";
    div.style.color = "white";
    div.innerText = "Добави в Любими";
    div.style.padding = "5px";
    div.style.margin = "0";
    div.style.display = "block";
    div.style.borderRadius = "5px";


    divId = div;
    console.log(divId);
    e.target.parentNode.appendChild(div);
}

let hideBluBanner = function() {
    divId.style.display = "none";
}

let favs = document.getElementsByClassName("fav");
for (let i = 0; i < favs.length; i++) {
    favs[i].addEventListener("click", changeFav);
    favs[i].addEventListener("mouseover", showBluBanner);
    favs[i].addEventListener("mouseout", hideBluBanner);
}


// -------


let data = [
    [document.getElementById("phone"), document.getElementById("category-phones")],
    [document.getElementById("computer"), document.getElementById("category-computers")],
    [document.getElementById("TV"), document.getElementById("category-TV")],
    [document.getElementById("game"), document.getElementById("category-game")],
    [document.getElementById("largeEl"), document.getElementById("category-largeEl")],
    [document.getElementById("smallEl"), document.getElementById("category-smallEl")],
    [document.getElementById("fashion"), document.getElementById("category-fashion")],
    [document.getElementById("health"), document.getElementById("category-health")],
    [document.getElementById("home"), document.getElementById("category-home")],
    [document.getElementById("kids"), document.getElementById("category-kids")],
    [document.getElementById("sport"), document.getElementById("category-sport")],
    [document.getElementById("avto"), document.getElementById("category-avto")],
    [document.getElementById("books"), document.getElementById("category-books")]
];

for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data[i].length; j++) {
        data[i][j].addEventListener("mouseover", function() { showSubMenu(data[i][1], data[i][0]); });
        data[i][j].addEventListener("mouseout", function() { hideSubMenu(data[i][1], data[i][0]); });
        data[i][j].addEventListener("mouseover", function() { showSubMenu(data[i][1], data[i][0]); });
        data[i][j].addEventListener("mouseout", function() { hideSubMenu(data[i][1], data[i][0]); });
    }
}

function showSubMenu(category, subMenu) {
    category.style.color = "var(--blue)";
    subMenu.style.visibility = "visible";
}

function hideSubMenu(category, subMenu) {
    category.style.color = "inherit";
    subMenu.style.visibility = "hidden";
}


// -------


let change = function(e) {

    e.target.style.cursor = "pointer";
    switch (e.target.alt) {
        case "facebook":
            e.target.src = "https://img.icons8.com/ios-filled/20/BE2007/facebook-f.png";
            break;
        case "youTube":
            e.target.src = "https://img.icons8.com/ios-filled/20/BE2007/youtube-play.png";
            break;
        case "instagram":
            e.target.src = "https://img.icons8.com/ios/20/BE2007/instagram-new--v1.png";
            break;
    }
}

let changeOut = function(e) {
    switch (e.target.alt) {
        case "facebook":
            e.target.src = "https://img.icons8.com/ios-filled/20/004485/facebook-f.png";
            break;
        case "youTube":
            e.target.src = "https://img.icons8.com/ios-filled/20/004485/youtube-play.png";
            break;
        case "instagram":
            e.target.src = "https://img.icons8.com/ios/20/004485/instagram-new--v1.png";
            break;
    }

}

let medias = document.getElementById("end-media").childNodes;
for (let m = 0; m < medias.length; m++) {
    medias[m].addEventListener("mouseover", change);
    medias[m].addEventListener("mouseout", changeOut);
}

// -------

let selected = document.getElementById("selected");
selected.addEventListener("click", function() {
    if (window.innerWidth <= 1100) {
        selected.getElementsByTagName("img")[0].src = "https://img.icons8.com/ios-glyphs/16/444444/delete-sign.png";
        let aside = document.getElementById("aside-menu");
        if (aside.style.display != "flex") {
            aside.style.display = "flex";
            aside.style.position = "absolute";
            aside.style.top = "0";
            aside.style.left = "0";
            aside.style.height = "auto";
            aside.style.zIndex = "600";

        } else {
            aside.style.display = "none";
            selected.getElementsByTagName("img")[0].src = "https://img.icons8.com/ios-glyphs/16/000000/menu--v1.png";
        }
    }
});