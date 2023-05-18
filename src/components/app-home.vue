<template>
  <div class="main-content flex-grow-1 overflow-auto">
    <div class="row g-0 h-100">
      <!-- health-start -->
      <div class="col-12 col-md-6 col-lg-4 p-3 border-end border-bottom">
        <div
          class="heading d-flex justify-content-between align-items-center mb-3"
        >
          <h2 class="fs-3 m-0">Health</h2>
          <div class="settings d-flex align-items-center">
            <span class="fs-5 nav-icon icon-help-circle"></span>
          </div>
        </div>
        <div class="health-details row mx-0">
          <template v-for="(item, index) of statistics" :key="item">
            <div
              class="col-4 p-0"
              :class="{ 'border-bottom': index + 1 < statistics.length }"
            >
              <h6 class="my-2 fw-bold">{{ item.title }}</h6>
            </div>
            <div
              class="col-8 p-0 text-primary"
              :class="{ 'border-bottom': index + 1 < statistics.length }"
            >
              <p class="my-2">{{ item.deatails }}</p>
            </div>
          </template>
        </div>
      </div>
      <!-- health-end -->
      <!-- Task-start -->
      <div
        class="col-12 col-md-6 col-lg-4 p-3 border-end border-bottom d-flex flex-column h-50"
      >
        <div class="heading d-flex justify-content-between align-items-center">
          <h2 class="m-0 fs-3">Task</h2>
          <div class="settings d-flex align-items-center">
            <span class="fs-5 nav-icon icon-screen-full"></span>
            <span class="fs-5 nav-icon icon-settings ms-2"></span>
            <span class="fs-5 nav-icon icon-help-circle ms-2"></span>
          </div>
        </div>
        <div
          class="chart d-flex justify-content-center align-items-center w-100"
        >
          <Doughnut :data="chartData" :options="chartOptions" />
        </div>
      </div>
      <!-- Task-end -->
      <!-- progress-start -->
      <div
        class="col-12 col-md-6 col-lg-4 p-3 border-end border-bottom d-flex flex-column h-50"
      >
        <div class="heading d-flex justify-content-between align-items-center">
          <h2 class="m-0 fs-3">Progress</h2>
          <div class="settings d-flex align-items-center">
            <span class="fs-5 nav-icon icon-screen-full"></span>
            <span class="fs-5 nav-icon icon-settings ms-2"></span>
            <span class="fs-5 nav-icon icon-help-circle ms-2"></span>
          </div>
        </div>
        <div class="bar-chart d-flex align-items-center flex-grow-1">
          <Bar :data="progressBarData" :options="ProgressBarOption" />
        </div>
      </div>
      <!-- progress-end -->
      <!-- time-start -->
      <div
        class="col-12 col-md-6 col-lg-4 p-3 border-end border-bottom d-flex flex-column h-50"
      >
        <div class="heading d-flex justify-content-between align-items-center">
          <h2 class="m-0 fs-3">Time</h2>
          <div class="settings d-flex align-items-center">
            <span class="fs-5 nav-icon icon-screen-full"></span>
            <span class="fs-5 nav-icon icon-settings ms-2"></span>
            <span class="fs-5 nav-icon icon-help-circle ms-2"></span>
          </div>
        </div>
        <div class="bar-chart d-flex align-items-center flex-grow-1">
          <Bar
            :data="timeLoaddata"
            :options="timeLoadOption"
          />
        </div>
      </div>
      <!-- time-end -->
      <!-- cost-start -->
      <div
        class="col-12 col-md-6 col-lg-4 p-3 border-end border-bottom d-flex flex-column"
      >
        <div class="heading d-flex justify-content-between align-items-center">
          <h2 class="m-0 fs-3">Cost</h2>
          <div class="settings d-flex align-items-center">
            <span class="fs-5 nav-icon icon-screen-full"></span>
            <span class="fs-5 nav-icon icon-settings ms-2"></span>
            <span class="fs-5 nav-icon icon-help-circle ms-2"></span>
          </div>
        </div>
        <div class="bar-chart flex-grow-1 d-flex align-items-center">
          <Bar
            :data="barChartData"
            :options="barChartOptions"
            :style="myStyle"
          />
        </div>
      </div>
      <!-- cost-end -->
      <!-- workload-start -->
      <div
        class="col-12 col-md-6 col-lg-4 p-3 border-end border-bottom d-flex flex-column"
      >
        <div class="heading d-flex justify-content-between align-items-center">
          <h2 class="m-0 fs-3">Workload</h2>
          {{ getLables }}
          <div class="settings d-flex align-items-center">
            <span class="fs-5 nav-icon icon-screen-full"></span>
            <span class="fs-5 nav-icon icon-settings ms-2"></span>
            <span class="fs-5 nav-icon icon-help-circle ms-2"></span>
          </div>
        </div>
        <div class="bar-chart d-flex align-items-center flex-grow-1">
          <Bar
            :data="workLoaddata"
            :options="workLoadOption"
            :style="myStyle"
          />
        </div>
      </div>
      <!-- workload-end -->
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { Doughnut, Bar } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  BarElement,
  CategoryScale,
  LinearScale
} from "chart.js";
import ChartJSPluginDatalabels from "chartjs-plugin-datalabels";
export default defineComponent({
  components: {
    Doughnut,
    Bar,
  },
  data() {
    return {
      statistics: [
        {
          title: "Time",
          deatails: "14% ahead of schedule",
        },
        {
          title: "Task",
          deatails: "12 task to be completed",
        },
        {
          title: "Workload",
          deatails: "0 task overdue",
        },
        {
          title: "Progress",
          deatails: "14 complete",
        },
        {
          title: "Cost",
          deatails: "42% under budget",
        },
      ],
      progress: [
        { title: "Contract", percentage: 100 },
        { title: "Design", percentage: 80 },
        { title: "Procurement", percentage: 19 },
        { title: "Post Construction", percentage: 0 },
        { title: "Post Col..", percentage: 0 },
      ],
      chartData: {
        labels: ["Not started(10)", "complete(6)", "In progress(2)"],
        datasets: [
          {
            data: [10, 6, 2],
            backgroundColor: [
              "rgb(157 164 173)",
              "rgb(106 208 107)",
              "rgb(77 200 191)",
            ],
            borderColor: "transparent",
            borderWidth: 3,
            datalabels: {
              color: [
                "rgb(157 164 173)",
                "rgb(106 208 107)",
                "rgb(77 200 191)",
              ],
              display: true,
              align: "end",
              anchor: "end",
              font: {
                size: 24,
              },
            },
          },
        ],
      },
      chartOptions: {
        responsive: false,
        maintainAspectRatio: false,
        radius: 100,
        cutout: 105,
        spacing: 2,
        plugins: {
          legend: {
            display: true,
            labels: {
              font: {
                size: 12,
              },
              boxWidth: 5,
              padding: 10,
              pointStyle: "circle",
              usePointStyle: true,
            },
          },
        },
      },
      barChartData: {
        labels: [""],
        datasets: [
          {
            label: "  Actual",
            backgroundColor: "rgb(101 203 110)",
            data: [3100],
          },
          {
            label: "  Planned",
            backgroundColor: "rgb(83 210 249)",
            data: [4500],
          },
          {
            label: "  Buddget",
            backgroundColor: "rgb(65 153 224)",
            data: [6000],
          },
        ],
      },
      barChartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        barThickness: 50,
        borderColor: "rgba(0, 0, 0, 0.0)",
        borderWidth: 4,
        scales: {
          y: {
            ticks: {
              callback: function (value: any): any {
                if (value > 999) {
                  return `${value / 1000}K`;
                } else {
                  return `$${value}`;
                }
              },
              stepSize: 1500,
              font: {
                size: 14,
                weight: "bold",
              },
            },
            grid: {
              color: "rgba(31,34,48,0.4)",
            },
            border: {
              display: false,
            },
          },
          x: {
            grid: {
              display: false,
            },
          },
        },
        plugins: {
          datalabels: false,
          legend: {
            display: true,
            position: "top",
            align: "start",
            labels: {
              boxWidth: 5,
              padding: 20,
              pointStyle: "circle",
              usePointStyle: true,
              font: {
                size: 14,
              },
            },
          },
        },
      },
      workLoaddata: {
        labels: ["Mike", "Jennifer", "Bradon", "Sam", "George", ""],
        datasets: [
          {
            label: "  Complete",
            data: [4, 2],
            stack: "Stack 0",
            backgroundColor: "rgb(101 203 110)",
          },
          {
            label: "  Remaining",
            data: [0, 2, 1, 3, 1],
            backgroundColor: "rgb(83 210 249)",
            stack: "Stack 0",
          },
          {
            label: "  Overdue",
            data: [0, 0, 0, 0, 0],
            backgroundColor: "rgb(240 80 76)",
            stack: "Stack 0",
          },
        ],
      },
      workLoadOption: {
        indexAxis: "y",
        responsive: true,
        maintainAspectRatio: false,
        barThickness: 20,
        interaction: {
          intersect: false,
        },

        scales: {
          x: {
            stacked: true,
            ticks: {
              stepSize: 2,
              font: {
                size: 14,
                weight: "bold",
              },
            },
            min: 0,
            max: 8,
            border: {
              display: false,
            },
            grid: {
              color: "rgba(31,34,48,0.4)",
            },
          },
          y: {
            grid: {
              display: false,
            },
            ticks: {
              crossAlign: "far",
              font: {
                size: 16,
              },
            },
            stacked: true,
          },
        },
        plugins: {
          datalabels: false,
          legend: {
            display: true,
            position: "top",
            align: "start",
            labels: {
              boxWidth: 5,
              padding: 20,
              pointStyle: "circle",
              usePointStyle: true,
              font: {
                size: 14,
              },
            },
          },
        },
      },

      timeLoaddata: {
        labels: ["Plan completed", "Actual Completion", "Ahed", "", "", "", ""],
        datasets: [
          {
            label: "  Ahead",
            stack: "Stack 0",
            backgroundColor: "rgb(83 210 249)",
            // data: [0, 0, 0],
          },
          {
            label: "  Behind",
            // data: [0, 0, 0],
            stack: "Stack 0",
            backgroundColor: "rgb(245 167 84)",
          },
          {
            label: "  On Time",
            data: [25, 50, 0],
            backgroundColor: "rgb(101 203 110)",
            stack: "Stack 0",
          },
        ],
      },
      timeLoadOption: {
        indexAxis: "y",
        responsive: true,
        maintainAspectRatio: false,
        barThickness: 20,
        categoryPercentage: 1.0,
        barPercentage: 0.5,
        interaction: {
          intersect: false,
        },
        scales: {
          x: {
            stacked: true,
            ticks: {
              callback: function (value: any): any {
                if (value < 0) {
                  return -value;
                } else {
                  return value;
                }
              },
              stepSize: 25,
            },
            min: -100,
            max: 100,
            border: {
              display: false,
            },
            grid: {
              color: "rgba(31,34,48,0.4)",
            },
          },
          y: {
            stacked: true,
            grid: {
              display: false,
            },
            ticks: {
              crossAlign: "far",
              font: {
                size: 16,
              },
            },
          },
        },
        plugins: {
          datalabels: {
            anchor: "start",
            align: "start",
            font: {
              size: 16,
            },
            formatter: (value: any) => {
              return `${value}%`;
            },
            color: (chart: any) => {
              return chart.dataset.backgroundColor;
            },
          },
          legend: {
            display: true,
            position: "top",
            align: "start",
            labels: {
              boxWidth: 5,
              padding: 20,
              pointStyle: "circle",
              usePointStyle: true,
              textAlign: "right",
              width: 100,
              font: {
                size: 14,
              },
            },
          },
        },
      },
      progressBarData: {
        labels: [
          "Contract",
          "Design",
          "Procurement",
          "Construction",
          "Post Construction",
          "Post Col",
          "",
        ],
        datasets: [
          {
            label: "",
            data: [100, 80, 19, 0, 0, 0],
            backgroundColor: [
              "rgb(101 203 110)",
              "rgb(101 203 110)",
              "rgb(226 88 156)",
              "rgb(101 203 110)",
              "rgb(101 203 110)",
              "rgb(101 203 110)",
            ],
            stack: "Stack 0",
          },
        ],
      },
      ProgressBarOption: {
        base: 0,
        indexAxis: "y",
        responsive: true,
        maintainAspectRatio: false,
        barThickness: 20,
        categoryPercentage: 1.0,
        barPercentage: 0.5,
        interaction: {
          intersect: false,
        },
        scales: {
          x: {
            stacked: true,
            ticks: {
              display: false,
            },
            min: 0,
            max: 100,
            border: {
              display: false,
            },
            grid: {
              color: false,
            },
          },
          y: {
            grid: {
              display: false,
            },
            border: {
              display: false,
            },
            ticks: {
              tickLength: 150,
              crossAlign: "far",
              font: {
                size: 16,
              },
            },
            afterFit: function (scale: any) {
              scale.width = 180; //<-- set value as you wish
            },
            stacked: true,
          },
        },
        plugins: {
          datalabels: {
            anchor: "start",
            align: "start",
            font: {
              size: 16,
            },
            formatter: (value: any) => {
              return `${value}%`;
            },
            color: (chart: any) => {
              return chart.dataset.backgroundColor[chart.dataIndex];
            },
          },
          legend: {
            display: false,
          },
        },
      },
    };
  },
  created() {
    ChartJS.register(
      ArcElement,
      BarElement,
      CategoryScale,
      LinearScale,
      Title,
      Tooltip,
      Legend,
      ChartJSPluginDatalabels
    );
  },
  computed: {
    myStyle() {
      return {
        width: `100%`,
      };
    },
  },
  methods: {
    resize() {
      console.log("resize ");
    },
  },
});
</script>