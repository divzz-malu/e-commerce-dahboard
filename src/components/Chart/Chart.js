import React from "react";
import { defaults } from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import { BarChartData } from "../../data/mockData";
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

function BarChart() {
    const options ={}
    // const theme = useTheme();
    // const colors = tokens(theme.palette.mode);
    return (
        <div>
            <Bar

            // options={options}
            // data={BarChartData}
                data={{
                    labels: BarChartData.map((data) => data.label),
                    datasets: [
                        {
                            label: "count",
                            data: BarChartData.map((data) => data.value),
                            // backgroundColor:colors.secondary[500],
                            // borderRadius:50,
                            borderSkipped: false,
                            barPercentage: 0.5,
                        },
                    ],
                }}
            />
        </div>
    );
}

export default BarChart;
