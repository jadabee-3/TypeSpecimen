let index = 0;

function updateSlide() {
  const slider = document.querySelector(".slider");
  slider.style.transform = `translateX(-${index * 100}%)`;
}

function nextSlide() {
  index = (index + 1) % 10; // Adjust if you have more slides
  updateSlide();
}

function prevSlide() {
  index = (index - 1 + 10) % 10; // Adjust for looping
  updateSlide();
}

function toggleDropdown() {
  document.getElementById("dropdownMenu").classList.toggle("show");
}

// JavaScript function to toggle the panel content
function togglePanel(header) {
  var panelContent = header.nextElementSibling;

  // Toggle the display of the content
  if (panelContent.style.display === "block") {
    panelContent.style.display = "none";
  } else {
    panelContent.style.display = "block";
  }
}

// Close the dropdown if the user clicks outside of it
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
  // Update letter spacing
  var newLetterSpacing = newVal + 'px';
  $('.sample').css('letter-spacing', newLetterSpacing);
}

function updateFontWeight(newVal) {
  $('.sample').css('font-weight', newVal);
}

function updateFontWidth(newVal) {
  // Update font-variation-settings to adjust the width
  var newWidth = newVal;
  $('.sample').css('font-variation-settings', `"wdth" ${newWidth}`);
}

document.addEventListener('DOMContentLoaded', () => {
  const glyphs = document.querySelectorAll('.glyph');
  const overviewName = document.getElementById('overview-name');

  // Event listener for each glyph click
  glyphs.forEach(glyph => {
      glyph.addEventListener('click', () => {
          const glyphName = glyph.getAttribute('data-name');
          overviewName.textContent = glyphName;
      });
  });
});

