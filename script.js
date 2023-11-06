// Основные параметры

var main_color = "white";
var main_size = "0";


// Выбор цвета

document.querySelectorAll(".colors__color").forEach(elem => {
  elem.addEventListener("click", function() {
    document.querySelectorAll(".colors__color").forEach(cur_elem => {
      cur_elem.style.transform = "";
    });

    elem.style.transform = "translateX(10px)";

    main_color = window.getComputedStyle(elem)["background-color"];

    document.querySelectorAll(".brushes__brush").forEach(cur_elem => {
      cur_elem.style.backgroundColor = main_color;
    });
  });
});


// Выбор размера кисти

document.querySelectorAll(".brushes__brush").forEach(elem => {
  elem.addEventListener("click", function() {
    document.querySelectorAll(".brushes__brush").forEach(cur_elem => {
      cur_elem.style.transform = "";
    });

    elem.style.transform = "translateX(-10px)";

    main_size = (Number(elem.classList[1].split("_brush_")[1]) + 1) * 5 + "";
  });
});


// Рисование

setInterval(() => {
  var canvas = document.querySelector(".canvas");
  var canvas_context = canvas.getContext("2d");
  var is_mouse_down = false;

  canvas.addEventListener("mousedown", function() {
    is_mouse_down = true;
  });

  canvas.addEventListener("mouseup", function() {
    is_mouse_down = false;
  });

  canvas.addEventListener("mousemove", function(event) {
    var x = event.offsetX;
    var y = event.offsetY;

    canvas_context.fillStyle = main_color;

    if (is_mouse_down) {
      canvas_context.beginPath();
      canvas_context.arc(x, y, Number(main_size), 0, Math.PI * 2);
      canvas_context.fill();
    };
  });
}, 100);


// Обновление поля для рисования

document.querySelector(".repeat__btn").addEventListener("click", function() {
  document.querySelector("body").removeChild(document.querySelector(".canvas"));

  var new_canvas = document.createElement("canvas");
  new_canvas.classList.add("canvas");
  new_canvas.width = "1300";
  new_canvas.height = "550";
  
  document.querySelector("body").appendChild(new_canvas);
});