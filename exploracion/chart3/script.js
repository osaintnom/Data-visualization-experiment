

d3.csv('astronautas.csv', d3.autoType).then(data => {
  //let astros = FileAttachment("astronautas.csv").csv({typed: true})
  let chart = Plot.plot({
    marks: [
      Plot.barY(data,
        Plot.groupX(
          {y:"count"},
          {x:"nacionalidad", sort:{x:"y",reverse:true},fill:'genero'}
          )
        ),
      //Plot.barY(alphabet, {x: "letter", y: "frequency"})
    ],
    color:{
      legend:true,
    }
    //height: 1000,
    //marginLeft: 100,
  })
  d3.select('#chart').append(() => chart)
})
