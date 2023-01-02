import Chart from "react-apexcharts"
const CustomerReview=()=>{
    const data={
series:[
    {
        name:"Review",
        data:[10,50,30,90,40,120,100],
    },
],
options:{
    chart:{
        type:"area",
        height:"auto",
    },
    fill:{
        colors:["#c85c8e"],
        type:"gradient",
    },
    dataLabels:{
        enabled:false,
    },
    stroke:{
        curve:"smooth",
        colors:["#ECE8DD"]
    },
    tooltip:{
        x:{format:"dd/MM/yy HH:mm"
    }
    },
    
grid:{
    show:false,
},
xaxis:{
    type:"datetime",
    categories:[
        "2022-12-19T00:00:00.000Z",
        "2022-12-19T01:30:00.000Z",
        "2022-12-19T02:30:00.000Z",
        "2022-12-19T03:30:00.000Z",
        "2022-12-19T04:30:00.000Z",
        "2022-12-19T05:30:00.000Z",
        "2022-12-19T06:30:00.000Z",
        

    ]
},
yaxis:{
    show:false,
},
toolbar:{
    show:false
},


},
        }

   return (
    <div className="customerReview">
<Chart series={data.series} options={data.options} type="area"/>
    </div>
   ) 
}
export default CustomerReview;