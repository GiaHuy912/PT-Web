const images = [

"https://placehold.co/600x300?text=Image+1",
"https://placehold.co/600x300?text=Image+2",
"https://placehold.co/600x300?text=Image+3",
"https://placehold.co/600x300?text=Image+4",
"https://placehold.co/600x300?text=Image+5",
"https://placehold.co/600x300?text=Image+6",
"https://placehold.co/600x300?text=Image+7",
"https://placehold.co/600x300?text=Image+8",
"https://placehold.co/600x300?text=Image+9"

];

let current = 0;
let playing = false;
let timer = null;

const image =
document.querySelector("#galleryImage");

const modal =
document.querySelector("#modal");

const modalImage =
document.querySelector("#modalImage");

function renderImage(){

    image.src = images[current];

}

function nextImage(){

    current =
    (current + 1) %
    images.length;

    renderImage();

}

function prevImage(){

    current =
    (current - 1 + images.length)
    % images.length;

    renderImage();

}

document
.querySelector("#next")
.addEventListener(
    "click",
    nextImage
);

document
.querySelector("#prev")
.addEventListener(
    "click",
    prevImage
);

image.addEventListener(
    "click",
    () => {

        modal.classList.remove(
            "hidden"
        );

        modalImage.src =
        image.src;

    }
);

document.addEventListener(
    "keydown",
    e => {

        if(e.key === "ArrowRight"){
            nextImage();
        }

        if(e.key === "ArrowLeft"){
            prevImage();
        }

        if(
            e.key >= "1" &&
            e.key <= "9"
        ){

            current =
            Number(e.key) - 1;

            renderImage();

        }

        if(e.code === "Space"){

            e.preventDefault();

            if(!playing){

                timer =
                setInterval(
                    nextImage,
                    2000
                );

                playing = true;
            }

            else{

                clearInterval(timer);

                playing = false;
            }

        }

        if(e.key === "Escape"){

            modal.classList.add(
                "hidden"
            );

            palette.classList.add(
                "hidden"
            );

        }

    }
);

const commands = [
"Home",
"Products",
"Settings",
"Profile",
"Logout"
];

const palette =
document.querySelector("#palette");

const commandInput =
document.querySelector("#commandInput");

const commandList =
document.querySelector("#commandList");

function renderCommands(list){

    commandList.innerHTML = "";

    list.forEach(command => {

        const li =
        document.createElement("li");

        li.textContent =
        command;

        commandList.appendChild(li);

    });

}

renderCommands(commands);

document.addEventListener(
    "keydown",
    e => {

        if(
            e.ctrlKey &&
            e.key.toLowerCase() === "k"
        ){

            e.preventDefault();

            palette.classList.remove(
                "hidden"
            );

            commandInput.focus();

        }

    }
);

commandInput.addEventListener(
    "input",
    () => {

        const keyword =
        commandInput.value
        .toLowerCase();

        const filtered =
        commands.filter(command =>
            command
            .toLowerCase()
            .includes(keyword)
        );

        renderCommands(filtered);

    }
);

commandInput.addEventListener(
    "keydown",
    e => {

        if(e.key === "Enter"){

            const first =
            commandList
            .querySelector("li");

            if(first){

                alert(
                    "Selected: " +
                    first.textContent
                );

                palette.classList.add(
                    "hidden"
                );

            }

        }

    }
);

renderImage();