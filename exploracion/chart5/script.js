d3.csv('astronautas.csv', d3.autoType).then(data => {
  data = data.filter(d => d.nacionalidad === 'EE.UU.' || d.nacionalidad === 'U.S.S.R/Rusia');
  let chart = Plot.plot({
    marks: [
      // Plot.dot(data,
      //   Plot.binX({
      //     y: "mean",
      //     r: "mean",
      //   },
      //   {
      //     x:"anio_mision",
      //     y:"mision_hs",
      //     r:0.5,//r:"eva_mision_hs",
      //     fill:"nacionalidad",
      //   }
      //   )
      //),
      Plot.line(data,
        Plot.binX({
          y:"mean",
        },
        {
          x:"anio_mision",
          y:"mision_hs",
          stroke:"nacionalidad",
          strokeWidth: 10,
        }
        ))
    ],
    x:{
      grid:true,
      tickFormat: d3.format(".0f"),
    },
    y:{
      grid:false,
    },
    color:{
      legend:true,    },
    r:{
      type:"log",
      range: [3,15],
    }
  })
  d3.select('#chart').append(() => chart)
})
