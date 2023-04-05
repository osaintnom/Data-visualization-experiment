d3.csv('astronautas.csv', d3.autoType).then(data => {
  const countsByOccupation = d3.rollup(data, v => v.length, d => d.ocupacion);
  const countsData = Array.from(countsByOccupation, ([ocupacion, count]) => ({ocupacion, count}));
  countsData.sort((a, b) => d3.descending(a.count, b.count));
  countsData.forEach(d => d.ocupacion = d.ocupacion.replace(/^\w/, c => c.toUpperCase()));


  let chart = Plot.plot({
    marks: [
      Plot.barY(countsData,
        {x: "ocupacion", y: "count",fill:d => d.ocupacion === "Ingeniero aeroespacial" ? "red" : d.ocupacion ==="Comandante" ? "orange" : "white"},

        ),
    ],

    x:{
      grid:false,
      axis:true,
      label:null,
    },
    y:{
      grid:true,
      axis:true,
      label:null,
    },
    label:
    {
      color:"blue",
      align: "center",
      baseline: "bottom",
      dx: 0,
      dy: -5,
    },
    color:{
      legend:false,
      range: ["#507FFF"],
    },
    width:800,
  })
  
  d3.select('#chart').append(() => chart)
})
