const ctx = document.getElementById("chart").getContext("2d");
const cityc = document.getElementById("local").getContext("2d");
const label = [];
const cityInfected = [];
const recovered = [];
const infected = [];
const deceased = [];

const cityChart = new Chart(cityc, {
  type: "line",
  data: {
    labels: label,
    datasets: [
      {
        label: "Lucknow",
        data: cityInfected,
        backgroundColor: ["#252fec"],
        borderWidth: 0.5
      }
    ]
  },
  options: {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true
          }
        }
      ]
    }
  }
});
const myChart = new Chart(ctx, {
  type: "line",
  data: {
    labels: label,
    datasets: [
      {
        label: "Infected cases",
        data: infected,
        backgroundColor: ["rgba(0,0,0,0)"],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)"
        ],
        borderWidth: 0.5,
        pointBackgroundColor: "#222"
      },
      {
        label: "Recovered cases",
        data: recovered,
        backgroundColor: "rgba(54, 162, 222, 0.2)"
      },
      {
        label: "Deceased",
        data: deceased,
        backgroundColor: "rgba(22,112,44,0.2)"
      }
    ]
  },
  options: {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true
          }
        }
      ]
    }
  }
});
// Getting Covid Data
const getData = async () => {
  const response = await fetch("https://api.covid19india.org/data.json");
  const data = await response.json();
  return data;
};
// Getting User's current city
const token = "2e64316654fcd1";
const query = "http://ipinfo.io/?token=";
const getCity = async () => {
  const response = await fetch(query + token);
  const city = await response.json();
  return city;
};

//DisplayingCovid Data
getData().then(fullJson => {
  fullJson.cases_time_series.forEach(element => {
    deceased.push(JSON.parse(element.totaldeceased));
    label.push(element.date.trim());
    infected.push(JSON.parse(element.totalconfirmed));
    recovered.push(JSON.parse(element.totalrecovered));
  });
});
getData().then(fullJson => {
  fullJson.statewise.forEach(element => {
    getCity().then(data => {
      if (data.region.trim() == element.state.trim()) {
        console.log("found");
        // cityInfected.push(JSON.parse(element.confirmed));
        console.log(element.confirmed);
      }
    });
  });
});
console.log(label);
console.log(infected);
getCity().then(city => {
  city.region;
});
console.log(cityInfected);
console.log("don");
