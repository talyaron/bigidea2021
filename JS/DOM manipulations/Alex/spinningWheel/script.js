function spinTheWheel(){
    var min = 1024;
  var max = 9999;
  var deg = Math.floor(Math.random() * (max - min)) + min;
  document.getElementById('wheel').style.transform = "rotate("+deg+"deg)";
}

