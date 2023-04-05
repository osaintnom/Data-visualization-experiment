d3.csv('astronautas.csv', d3.autoType).then(data => {
  data2 = data.filter(d => d.status === 'civil');
  data3 = data.filter(d => d.status === 'militar');
  let chart = Plot.plot({
    marks: [
      Plot.line(data2,
        Plot.binX({
          y:"sum",
        },{
          x:"anio_mision",
          y:"mision_hs",
        })
      ),
      Plot.line(data3,
        Plot.binX({
          y:"sum",
        },{
          x:"anio_mision",
          y:"mision_hs",
        })
      ),
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
    marginLeft: 100,
  })
  d3.select('#chart').append(() => chart)
})
