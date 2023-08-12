document.addEventListener("DOMContentLoaded", function() {
    var containerEl1 = document.querySelector(".container-card-el-1");
    var containerEl2 = document.querySelector(".container-card-el-2");
    var containerEl3 = document.querySelector(".container-card-el-3");
  
    var timeoutId;
  
    containerEl1.addEventListener("mouseover", function() {
      containerEl2.classList.add("inclinat-dreapta");
      containerEl3.classList.add("inclinat-stanga");
      clearTimeout(timeoutId);
  
      if (containerEl2.classList.contains("inclinat-dreapta2")) {
        containerEl2.classList.remove("inclinat-dreapta2");
      }
  
      if (containerEl3.classList.contains("inclinat-stanga2")) {
        containerEl3.classList.remove("inclinat-stanga2");
      }
    });
  
    containerEl1.addEventListener("mouseout", function() {
      containerEl2.classList.add("inclinat-dreapta2");
      containerEl3.classList.add("inclinat-stanga2");
    });
  });
  