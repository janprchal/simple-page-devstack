console.log('main.js');

//------------------------------------------------------------------------------
var mySVGsToInject = document.querySelectorAll('.inject-me');
var injectorOptions = {
  evalScripts: 'once',
  each: function (svg) {
    // Callback after each SVG is injected
    console.log('SVG injected: ' + svg.getAttribute('id'));
  }
};

// Trigger the injection
SVGInjector(mySVGsToInject, injectorOptions, function (totalSVGsInjected) {
  // Callback after all SVGs are injected
  console.log('We injected ' + totalSVGsInjected + ' SVG(s)!');
});
//------------------------------------------------------------------------------
