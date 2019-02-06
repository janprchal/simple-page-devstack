'use strict';

// debounce for optimalization
function debounce(fn, ms) {
  var delayed = false;

  return function() {
    if(!delayed) {
      delayed = true;
      setTimeout(function() {
          delayed = false;
      }, ms);
      fn();
    }
  };
}

function Dom() {
  var windowWidth  = window.innerWidth || documentElement.innerWidth || document.documentElement.getElementsByTagName('body')[0];

  var header = document.getElementById('js_main-header');
  var navHeight = 90;
  var navTrigger = document.getElementById('js_navTrigger');
  var navBlock = document.getElementById('js_navBlock');

  function closeNavBlock() {
    navTrigger.classList.remove('is-open');
    navBlock.classList.remove('is-open');
    header.classList.remove('is-open');
  };

  function openNavBlock() {
    navTrigger.classList.add('is-open');
    navBlock.classList.add('is-open');
    header.classList.add('is-open');
  };

  var loadSVG = function() {
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
  }

  navTrigger.addEventListener('click', function() {
    if(navBlock.classList.contains('is-open')) {
      closeNavBlock();
    } else {
      openNavBlock();
    }
  });

  var scrolledHeader = function() {
    if(window.pageYOffset > navHeight) {
      if(!header.classList.contains('is-scrolled')) {
        header.classList.add('is-scrolled');
      }
    } else {
      if(header.classList.contains('is-scrolled')) {
        header.classList.remove('is-scrolled');
      }
    }
  };

  var scrollToSection = function() {
    var easeInCubic = function easeInCubic(t) {
      // https://gist.github.com/gre/1650294
      return (--t)*t*t+1; // easeOutCubic
    };
    
    var scrollElems = document.getElementsByClassName('js_scroll');

    // recursive function
    // call herself if condition is true
    // if condition is false close hamburger menu (on tablet portrait and mobile)
    var scrollToElem = function scrollToElem(start, stamp, duration, scrollEndElemTop, startScrollOffset) {
      var runtime = stamp - start;
      var progress = runtime / duration;
      var ease = easeInCubic(progress);

      progress = Math.min(progress, 1);

      window.scroll(0, startScrollOffset + scrollEndElemTop * ease);
      
      // recursion
      if (runtime < duration) {
        requestAnimationFrame(function (timestamp) {
          var stamp = new Date().getTime();
          scrollToElem(start, stamp, duration, scrollEndElemTop, startScrollOffset);
        });
      } else {
        if(windowWidth < 960 && navBlock.classList.contains('is-open')) {
          closeNavBlock();
        }
      }
    };

    [].forEach.call(scrollElems, function(scrollElem) {
      scrollElem.addEventListener('click', function(e) {
        e.preventDefault();

        var scrollElemId = e.target.href.split('#')[1];
        var scrollEndElem = document.getElementById(scrollElemId);

        var anim = requestAnimationFrame(function () {
          // Y position where should be scrolled 
          // topLine of element - height of fixed navigation
          var scrollEndElemTop = scrollEndElem.getBoundingClientRect().top - navHeight;

          // if scroll is more than 200px long use long animation
          // otherwise use quick jump
          var duration = (scrollEndElemTop > 200 || scrollEndElemTop < -200) ? 1000 : 100;

          var stamp = new Date().getTime();
          var start = stamp;
          var startScrollOffset = window.pageYOffset;

          scrollToElem(start, stamp, duration, scrollEndElemTop, startScrollOffset);
        });
      })
    })
  }

  loadSVG();
  scrolledHeader();
  scrollToSection();
}

//------------------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', function() {
  Dom();
});
//------------------------------------------------------------------------------