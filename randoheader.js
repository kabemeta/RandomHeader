 // just credit me if ya want to use it (Metakabe)
 document.addEventListener("DOMContentLoaded", function () {
    // either add the path of the file or url
    const images = [
        "https://files.catbox.moe/tq2rsh.jpg",
        "https://files.catbox.moe/so3088.jpg",
        "https://files.catbox.moe/bb9zvd.jpg",
        "https://files.catbox.moe/13m01z.jpg",
        "https://files.catbox.moe/nqrbmd.jpg",
    ];
      // change the .header to the one you use^^
    const header = document.querySelector(".header");

    function changeHeaderImage() {
      const randomImage = images[Math.floor(Math.random() * images.length)];
      header.style.backgroundImage = `url('${randomImage}')`;
    }

    // changes image at each reload
    changeHeaderImage();

    // changes each time you click on it
    header.addEventListener("click", changeHeaderImage);
  });
