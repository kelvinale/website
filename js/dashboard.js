// let ctx =  document.querySelector('#revenueChart');

// ctx.height = 150;

// let revChart = new Chart(ctx, {

//     type: "line",

//     data: {
//         labels: ["Sept 1", "Sept 3", "Sept 6", "Sept 9","Sept 12", "Sept 15", "Sept 18", "Sept 21", "Sept 24", "Sept 27", "Sept 30"],

//         datasets: [
//             {
//                 labels: "Views",
//                 borderColor: "green",
//                 borderWidth: "3",
//                 backgroundColor: "rgba(235, 247, 245, 0.5)",
//                 data: [0,30,60,25,50,10,50,90,120]
//             },

//             {
//                 labels: "Views",
//                 borderColor: "blue",
//                 borderWidth: "3",
//                 backgroundColor: "rgba(233, 238, 253, 0.5)",
//                 data: [0,60,25,100,20,75,30,55,20,60,20]
//             }
//         ]
//     },

//     options:{
//         responsive: true,

//         tooltips: {
//             intersect: false,
//             node: "index",
//         }
//     }
// });

const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});