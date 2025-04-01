const links = document.querySelectorAll(".main-menu li a");
const comics = document.querySelectorAll(".list-item");
for (let link of links) {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        const id = link.getAttribute("id");        
        if (id == "all") {
            for (let comic of comics) {
                comic.classList.remove("hide")
            }
        }
        else {
            for (let comic of comics) {
                console.log(comic.classList.contains("comic-" + id))
                if (comic.classList.contains("comic-" + id)) {
                    comic.classList.remove("hide")
                }
                else {
                    comic.classList.add("hide")
                }

            }
        }
    })
}