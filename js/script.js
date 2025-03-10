let index = 0;

function updateSlide() {
  const slider = document.querySelector(".slider");
  slider.style.transform = `translateX(-${index * 100}%)`;
}

function nextSlide() {
  index = (index + 1) % 10; 
  updateSlide();
}

function prevSlide() {
  index = (index - 1 + 10) % 10; 
  updateSlide();
}

function toggleDropdown() {
  document.getElementById("dropdownMenu").classList.toggle("show");
}


function togglePanel(header) {
  var panelContent = header.nextElementSibling;

  // Toggle the display of the content
  if (panelContent.style.display === "block") {
    panelContent.style.display = "none";
  } else {
    panelContent.style.display = "block";
  }
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
      let dropdowns = document.getElementsByClassName("dropdown-content");
      for (let i = 0; i < dropdowns.length; i++) {
          let openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('show')) {
              openDropdown.classList.remove('show');
          }
      }
  }
};

function updateSize(newVal){
  var newFontSize = newVal + 'px';
  $('.sample').css('font-size', newFontSize);
}

function updateLineHeight(newVal){
  var newFontSize = newVal + 'px';
  $('.sample').css('line-height', newFontSize);
}

function updateFont(newVal) {
  $('.sample').css('font-family', newVal);
}

function updateLetterSpacing(newVal) {
  
  var newLetterSpacing = newVal + 'px';
  $('.sample').css('letter-spacing', newLetterSpacing);
}




document.addEventListener('DOMContentLoaded', () => {
  const glyphs = document.querySelectorAll('.glyph');
  const overviewName = document.getElementById('overview-name');

  
  glyphs.forEach(glyph => {
      glyph.addEventListener('click', () => {
          const glyphName = glyph.getAttribute('data-name');
          overviewName.textContent = glyphName;
      });
  });
});

document.addEventListener("DOMContentLoaded", function() {
  const slider = document.getElementById("weightSlider");
  const text = document.getElementById("text");
  const weightValue = document.getElementById("weightValue");

  slider.addEventListener("input", function() {
      let weight = slider.value;
      text.style.fontWeight = weight;
      weightValue.textContent = weight;
  });
});

document.addEventListener("DOMContentLoaded", function() {
  const slider = document.getElementById("widthSlider");
  const text = document.getElementById("text2");
  const widthValue = document.getElementById("widthValue");

  slider.addEventListener("input", function() {
      let width = slider.value + "%";  
      text.style.fontStretch = width; 
      widthValue.textContent = slider.value;
  });
});

