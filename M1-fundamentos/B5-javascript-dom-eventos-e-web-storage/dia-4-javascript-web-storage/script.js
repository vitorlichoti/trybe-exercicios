window.onload = function() {
  let select = document.querySelector('select[name=background-color]');
  select.addEventListener('change', function() {
    document.body.style.backgroundColor = select.value;

    localStorage.setItem('5.4-background-color', select.value);
  })

  let textColorSelect = document.querySelector('select[name=text-color]');
  textColorSelect.addEventListener('change', function() {
    let colorParagraph = document.querySelector('p');
    colorParagraph.style.color = textColorSelect.value;

    localStorage.setItem('5.4-text-color', textColorSelect.value)
  })

  let fontSizeNumber = document.querySelector('input[name=font-size]');
  fontSizeNumber.addEventListener('change', function() {
    let text = document.querySelector('p');
    text.style.fontSize = `${fontSizeNumber.value}px`

    localStorage.setItem('5.4-font-size', `${fontSizeNumber.value}px`)
  })

  let lineHeightNumber = document.querySelector('input[name=line-height]');
  lineHeightNumber.addEventListener('change', function() {
    let lineText = document.querySelector('p');
    lineText.style.lineHeight = `${lineHeightNumber.value}px`;

    localStorage.setItem('5.4-line-height', `${lineHeightNumber.value}px`)
  })

  let fontFamilyType = document.querySelector('select[name=font-family]');
  fontFamilyType.addEventListener('change', function() {
    let fontParagraph = document.querySelector('p');
    fontParagraph.style.fontFamily = fontFamilyType.value;

    localStorage.setItem('5.4-font-family', fontFamilyType.value);
  })

  let paragraph = document.querySelector('p').style;

  let savedBackground = localStorage.getItem('5.4-background-color');
  document.body.style.backgroundColor = savedBackground;

  let savedTextColor = localStorage.getItem('5.4-text-color');
  paragraph.color = savedTextColor;

  let savedFontSize = localStorage.getItem('5.4-font-size');
  paragraph.fontSize = savedFontSize;

  let savedLineHeight = localStorage.getItem('5.4-line-height');
  paragraph.lineHeight = savedLineHeight;

  let savedFontFamily = localStorage.getItem('5.4-font-family');
  paragraph.fontFamily = savedFontFamily;
}


























// function darkMode() {
//   var getBodyElements = document.body;
//   var getColorPick = document.getElementById('color');
//   var darkMode = document.querySelector("#checkbox");
//   var textColor = document.querySelector("#checkbox");

//   darkMode.addEventListener('change', function() {
//     if (this.checked) {
//       getBodyElements.style.background = 'black';
//       getBodyElements.style.color = 'white';
//     } else {
//       getBodyElements.style.background = 'white';
//       getBodyElements.style.color = 'black';
//     }
//   });
// }

// darkMode();

// function startup() {
//   var colorWell;
//   var defaultColor = "#0000ff";

//   colorWell = document.querySelector("#color");
//   colorWell.value = defaultColor;
//   colorWell.addEventListener("change", updateAll, false);
//   colorWell.select();
// }

// startup();

// function updateAll(event) {
//   document.querySelectorAll("div").forEach(function(div) {
//     div.style.color = event.target.value;
//   });
// }

// updateFirst();

// function lineHeight() {
//   var btnMais = document.getElementById('mais');
//   var btnMenos = document.getElementById('menos');
//   var allDocument = document.body.style.lineHeight;

//   btnMais.addEventListener('click', function(event){
//     allDocument = event.target.value ;
//   });

//   // btnMenos.addEventListener('click', function(){});

// }

// lineHeight();