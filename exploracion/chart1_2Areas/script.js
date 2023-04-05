d3.csv('astronautas.csv', d3.autoType).then(data => {
  data = data.filter(d => d.nacionalidad === 'EE.UU.' || d.nacionalidad === 'U.S.S.R/Rusia');

  data2 = data.filter(d => d.nacionalidad === 'EE.UU.');
  data3 = data.filter(d => d.nacionalidad === 'U.S.S.R/Rusia');
  let chart = Plot.plot({
    marks: [
      Plot.areaY(data,
        Plot.binX({
          y:"sum",
        },{
          x:"anio_mision",
          y:"mision_hs",
          fill:"nacionalidad",
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
    height: 500,
    marginLeft: 100,
  })
  d3.select('#chart').append(() => chart)
})
