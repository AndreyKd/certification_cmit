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

    document.querySelector(".field__cursor").style.backgroundColor = main_color;
  });
});


// Выбор размера кисти

document.querySelectorAll(".brushes__brush").forEach(elem => {
  elem.addEventListener("click", function() {
    document.querySelectorAll(".brushes__brush").forEach(cur_elem => {
      cur_elem.style.transform = "";
    });

    elem.style.transform = "translateX(-10px)";

    main_size = (Number(elem.classList[1].split("_brush_")[1]) + 1) + "0";

    document.querySelector(".field__cursor").style.height = main_size + "px";
    document.querySelector(".field__cursor").style.width = main_size + "px";
  });
});


// Передвижение курсора

// document.querySelector(".field").addEventListener("mousemove", function(event) {
//   var x = event.clientX;
//   var y = event.clientY;

//   var cursor = document.querySelector(".field__cursor");
//   cursor.style.width = main_size + "px";
//   cursor.style.height = main_size + "px";
//   cursor.style.backgroundColor = main_color;
//   cursor.style.left = (x - main_size / 2 - 105) + "px";
//   cursor.style.top = (y - main_size / 2 - 155) + "px";
// });


// Рисование

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
  
  canvas_context.fillStyle = "black";

  canvas_context.beginPath();
  canvas_context.arc(x/4.1, y/4.1, 1, 0, Math.PI * 2);
  canvas_context.fill();

  // if (((x > (100 + main_size / 2 + 10))&&(y > (150 + main_size / 2 + 10)))&&((x < (1400 - main_size / 2 + 10))&&(y < (700 - main_size / 2 + 10)))) {
  //   var point = document.createElement("div");
  //   point.style.position = "fixed";
  //   point.style.borderRadius = "100%";
  //   point.style.left = (x - main_size / 2) + "px";
  //   point.style.top = (y - main_size / 2) + "px";
  //   point.style.width = main_size + "px";
  //   point.style.height = main_size + "px";
  //   point.style.backgroundColor = main_color;
    
  //   document.querySelector(".field").appendChild(point);
  // };
});


// // Обновление поля для рисования

// document.querySelector(".repeat__btn").addEventListener("click", function() {
//   document.querySelector(".field").innerHTML = `<div class="field__cursor"></div>`;
// });