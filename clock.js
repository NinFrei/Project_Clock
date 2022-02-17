let dateTarget = new Date("2022-02-18T11:30:00");
setInterval(function getTime() {
    const dateNow = new Date();

    document.querySelector(".clock").innerHTML =

        dateNow.getHours().toString().padStart(2, "0") + ":" +
        dateNow.getMinutes().toString().padStart(2, "0") + ":" +
        dateNow.getSeconds().toString().padStart(2, "0");


    let Differenz = dateTarget - dateNow;
    const hours = Math.floor((Differenz / 1000 / 60 / 60) % 24);
    const minutes = Math.floor((Differenz / 1000 / 60) % 60);
    const seconds = Math.floor((Differenz / 1000) % 60);

    document.querySelector(".timer").innerText = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;

}
    , 1000);



document.querySelector(".date-button").addEventListener("click", function () {
    dateTarget = new Date(document.querySelector(".date-input").value);
});
