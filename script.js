function Createcard(title, cname, views, monthold, duration, thumbnail) {
    let viewsrc
    if (views < 1000) {
        viewsrc = views;

    }
    else if (views > 1000000) {
        viewsrc = views / 1000000 + "M";

    }
    else {
        viewsrc = views / 1000 + "k";
    }
    let html = `<div class="card">
    <div class="image">
        <img src="${thumbnail}" alt="">
<div class="capsule"> ${duration} </div>
    </div>
    <div class="text">
        <h2>
           ${title}
        </h2>
<p>${cname} . ${viewsrc} views . ${monthold} month ago</p>

    </div>

</div>`

    document.querySelector(".container").innerHTML = document.querySelector(".container").innerHTML + html

}

Createcard("Chameli Phool- kuma Sagar/ Ram Dai ko Sound Check Session ", "Kuma ley station",
    2700000, 7, "5.14", "kumasagar.webp")
Createcard("Oh Champa Tarani Janani --  Kuma Sagar Official music video ", "Kuma Sagar",
    3500000, 9, "4.12", "oh champa.webp")
Createcard("Chameli Phool- kuma Sagar/ Ram Dai ko Sound Check Session ", "Kuma ley station",
    27000, 7, "5.14", "kumasagar.webp")

