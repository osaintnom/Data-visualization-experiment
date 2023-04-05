d3.csv('astronautas.csv', d3.autoType).then(data => {
  let chart = Plot.plot({
    marks: [
      Plot.barY(data,
        Plot.groupX(
          {y:"count"},
          {x:d=>d.nacionalidad === "EE.UU." ? "EE.UU." : "Otros",fill:"genero"},
        ),
        
      ),
      
    ],

    x:{
      tickFormat: d3.format(".0f"),
      label:null,
      tickFormat: function(d) {
        return d === 0 ? "EE.UU." : "Otros";
      },
    },
    y:{
      grid:true,
      axis:true,
      label:null,
      
    },
    color:{
      legend:false,
      range: ["#FF79B8","#507FFF"],

    },
  })
  d3.select('#chart').append(() => chart)
})
