//document.getElementById("demo").innerHTML="Hello World!";
function changeImage() {
    var image = document.getElementById('myImage');
    if (image.src.match("bulbon")) {
        image.src = "https://www.w3schools.com/js/pic_bulboff.gif";
    } else {
        image.src = "https://www.w3schools.com/js/pic_bulbon.gif";
    }
}


document.getElementById('colorButton').addEventListener('click', function () {
    document.getElementById('heading').textContent = 'Did I not tell you that I know some JavaScript?';
  });
  
