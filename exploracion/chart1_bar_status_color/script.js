d3.csv('astronautas.csv', d3.autoType).then(data => {
  let chart = Plot.plot({
    marks: [
      Plot.barY(data, {
        x: 'status',
        y: 'mision_hs',
        fill: 'nacionalidad',
        sort: 'nacionalidad',
      }),
    ],
    y: {
    },
    x: {
      //grid: true,
    },
    color:{
      legend:true,
    },
    height: 1000,
    //marginLeft: 100,
  })
  d3.select('#chart').append(() => chart)
})
