d3.csv('astronautas.csv', d3.autoType).then(data => {
  let chart = Plot.plot({
    marks: [
      Plot.barY(data,
        Plot.groupX(
          {y:"count"},
          {x:"anio_mision",fill:"genero"},//, sort:{x:"y",reverse:true},fill:'genero'}
        )
      ),
      // Plot.text(data, {
      //   x: Plot.groupX({x: "anio_mision"}),
      //   y: {field: "count", offset: -5},
      //   text: {field: "count", formatter: d3.format(",")},
      //   fill: {scale: "color", field: "genero"},
      //   align: {value: "center"}
      // }),
      // Plot.line(data,
      //   Plot.groupX(
      //     {y:"count"},
      //     {x:"anio_mision",strokeWidth:3.5},//, sort:{x:"y",reverse:true},fill:'genero'}
      //   ),
      //   ),
      // Plot.dot(data,
      //   Plot.groupX(
      //     {y:"count"},
      //     {x:"anio_mision",strokeWidth:5},//, sort:{x:"y",reverse:true},fill:'genero'}
      //   ),
      //   ),
      
    ],

    x:{
      tickFormat: d3.format(".0f"),
      label:null,
    },
    y:{
      grid:true,
      axis:true,
      label:null,
      
    },
    color:{
      legend:false

    },
  })
  d3.select('#chart').append(() => chart)
})
