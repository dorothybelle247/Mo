

const redCirc = new mojs.Shape({
    left: 0, top: 0,
    radius:       15,        
    fill:         'none',  
    stroke:       '#5D4157', 
    strokeWidth:  10,         
    // isShowStart:  true,  
    duration: 150
    
  
  })
  .then({
      strokeWidth: 0,
      scale: {to:2, easing: 'sin.in'},
      duration: 500
  });

  const sparks = new mojs.Burst({
    left: 0, top: 0,
    radius:{0:50},
    angle:{0:90},
    count: 40,
    children:{
        shape: 'cross',
        points: 15,
        stroke: 'yellow',
        fill: 'none',
        duration: 400
    }
  });

  const pinkSparks = new mojs.Burst({
    left: 0, top: 0,
    radius:{0:50},
    angle:{0:90},
    count: 9,
    children:{
        shape: 'line',
        points: 15,
        stroke: 'pink',
        fill: 'blue',
        duration: 500,
        degreeShift: 'rand(-90,90)',
        radius: 'rand(0,150)',
        delay: 'rand(0,150)',
    }
  });


  const lineSparks = new mojs.Burst({
    left: 0, top: 0,
    radius:{0:1000,easing:'cubic.out'},
    angle:{1000:0, easing:'quad.out'},
    count: 100,
    children:{
        shape: 'line',
        points: 15,
        stroke: 'pink',
        fill: 'blue',
        duration: 4000,
        degreeShift: 'rand(-90,90)',
        radius: 'rand(0,150)',
        delay: 'rand(0,150)',
    }
  });

//   const starSparks = new mojs.Burst({
//     left: 0, top: 0,
//     radius:{0:1000,easing:'cubic.out'},
//     angle:{144:0, easing:'quad.out'},
//     count: 1000,
//     children:{
//         shape: 'polygon',
//         points: 10,
//         stroke: 'pink',
//         fill: 'blue',
//         duration: 4000,
//         degreeShift: 'rand(-144,144)',
//         radius: 'rand(0,150)',
//         delay: 'rand(0,150)',
//     }
//   });




  document.addEventListener('click', function(e) {
      redCirc
      .tune({x: e.pageX, y: e.pageY})
      .replay();

      sparks
      .tune({x: e.pageX, y: e.pageY})
      .replay();

      pinkSparks
      .tune({x: e.pageX, y: e.pageY})
      .replay();

      lineSparks
      .tune({x: e.pageX, y: e.pageY})
      .replay();

    //    lineSparks
    //   .tune({x: e.pageX, y: e.pageY})
    //   .replay();
     
  });

