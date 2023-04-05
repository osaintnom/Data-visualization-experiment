d3.csv('astronautas.csv', d3.autoType).then(data => {
  let chart = Plot.plot({
    marks: [
      Plot.barX(data, {
        x: 'mision_hs',
        y: 'nacionalidad',
        fill: 'ocupacion',
        sort:{y:"x",reverse:true},
      }),
    ],
    y: {
    },
    x: {
      grid: true,
    },
    color:{
      legend:true,
    },
    height: 1000,
    //marginLeft: 100,
  })
  d3.select('#chart').append(() => chart)
})
