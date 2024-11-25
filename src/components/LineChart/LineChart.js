import React from "react";
import { defaults } from "chart.js/auto";
import { Line } from "react-chartjs-2";
import { LineChartData } from "../../data/mockData";
// import {
//     Chart as ChartJS,
//     CategoryScale,
//     LinearScale,
//     BarElement,
//     Title,
//     Tooltip,
//     Legend,
// } from "chart.js";

// ChartJS.register(
//     CategoryScale,
//     LinearScale,
//     BarElement,
//     Title,
//     Tooltip,
//     Legend
// );

// defaults.maintainAspectRatio = false;
// defaults.responsive = true;

function LineChart() {
    const options ={}
    // const theme = useTheme();
    // const colors = tokens(theme.palette.mode);
    return (
        <div>
            <Line

            // options={options}
            // data={BarChartData}
                data={{
                    labels: LineChartData.map((data) => data.label),
                    datasets: [
                        {
                            label: "count",
                            data: LineChartData.map((data) => data.value),
                            // backgroundColor:colors.secondary[500],
                            borderRadius:50,
                            borderSkipped: false,
                            barPercentage: 0.5,
                            
                        },
                    ],
                }}
            />
        </div>
    );
}

export default LineChart;
