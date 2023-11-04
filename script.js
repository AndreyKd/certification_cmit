// Выбор цвета

document.querySelectorAll(".colors__color").forEach(elem => {
  elem.addEventListener("click", function() {
    document.querySelectorAll(".colors__color").forEach(cur_elem => {
      cur_elem.style.transform = "none";
    });

    elem.style.transform = "translateX(10px)";

    var color = elem.style.backgroundColor;
    console.log(color);
    document.querySelectorAll(".brushes__brush").forEach(cur_elem => {
      cur_elem.style.backgroundColor = color;
    });
  });
});