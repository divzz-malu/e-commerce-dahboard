// import { Typography } from "@mui/material";
import { Typography } from "@mui/material";
// import { Chart } from "chart.js";
import React from "react";
import BarChart from "../../components/Chart/Chart";
import LineChart from "../../components/LineChart/LineChart";

const DATA = [
    {id:1,title:"Customers",total:"3,781",profitOrLoss:"+11.01%",profit:true},
    {id:2,title:"Orders",total:"1,219",profitOrLoss:"-0.03%",profit:false},
    {id:3,title:"Revenue",total:"$695",profitOrLoss:"+15.03%",profit:true},
    {id:4,title:"Growth",total:"30.1%",profitOrLoss:"6.08%",profit:true}
]
const Dashboard = () => {
    return (
        <main id="main" className="bg-primary p-4">
            <p className="sub-heading">eCommerce</p>
            <div className="m-4 grid grid-cols-2 gap-4 sm:grid-cols-2">
                <div className="m-4 grid grid-cols-2 gap-4 sm:grid-cols-2">
                    
                    {DATA.map((item) =>(
                        <div key={item.id} className={`h-32 rounded-lg min-h-[100] p-4 bg-blue`}>
                        <p className="sub-heading pb-3">{item.title}</p>
                        <div className="flex justify-between items-center">
                            <p className="heading ">{item.total}</p>
                            <p className="content">{item.profitOrLoss}</p>
                            </div>
                    </div>
                    ))}
                    
                </div>
                <div className={`h-100 rounded-lg p-4 bg-light`}>
                    <BarChart />
                </div>
            </div>
            <div className="m-4 grid sm:grid-cols-12 gap-4">
            <div className={`rounded-lg p-4 bg-light col-span-7`}>
                <LineChart />
            </div>
            <div className={`rounded-lg p-4 bg-light col-span-5`}></div>
            </div>
        </main>
    );
};

export default Dashboard;
