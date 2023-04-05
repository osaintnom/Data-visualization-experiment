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
      label:"Horas de Misión",
      grid: true,
    },
    x: {
      label: "Año",
      grid: true,
      tickFormat: d3.format(".0f"),
    },
    color:{
      range:['#6666FF','#ED2939'],
      legend:false,
    },
    height: 500,
    marginLeft: 100,
    width:800,
  })
  d3.select('#chart').append(() => chart)
  let chart2 = Plot.plot({
    
    marks: [
      Plot.areaY(data3,
        Plot.binX({
          y:"sum",
        },{
          x:"anio_mision",
          y:"mision_hs",
          fill:"nacionalidad",
          
          
        }),
      ),
      Plot.areaY(data2,
        Plot.binX({
          y:"sum",
        },{
          x:"anio_mision",
          y:"mision_hs",
          fill:"nacionalidad",
          fillOpacity:0.8,
        })
      ),
      Plot.ruleX([2017.5], {strokeWidth: 5,strokeColor:"orange"}),
    ],
    y: {
      label:null,
      grid: true,
    },
    x: {
      label: "Año",
      grid: true,
      tickFormat: d3.format(".0f"),
    },
    color:{
      range:['#6666FF','#ED2939'],
      legend:false,
    },
    height: 500,
    width:800,
    marginLeft: 100,
  })
  d3.select('#chart2').append(() => chart2)
})
