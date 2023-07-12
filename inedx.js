//  GET https://icanhazdadjoke.com/
const container = document.getElementById("joke");

const btn = document.getElementById("btn");
btn.addEventListener('click', () => {
    btn.textContent = "Loading..!";
    joke();
});

joke();


function joke() {

    const setHeader = {
        headers: {
            Accept: "application/json"
        }
    }


    const request = new XMLHttpRequest();
    fetch('https://icanhazdadjoke.com/', setHeader)
        .then((res) => res.json()
        ).then((data) => {
            container.innerHTML = data.joke;
            btn.textContent = "Next Joke";
        }).catch((err) => {
            container.innerHTML = 'Error Occured: ' + err;
        });
}