// let emp0 = '#CCCCCC';
let emp1 = '#dadaeb';
let emp2 = '#bcbddc';
let emp3 = '#9e9ac8';
let emp4 = '#756bb1';
let emp5 = '#54278f';

let popColor = ["step",
  ["get", "pop50"],
  "#DFEFFB",
  10000,
  "#A6CFE1",
  25000,
  "#4D9DC0",
  50000,
  "#0078AE",
  100000,
  "#004E76"
];

let empColor = ["step",
  ["get", "emp50"],
  emp1,
  5000,
  emp2,
  10000,
  emp3,
  20000,
  emp4,
  40000,
  emp5
];

const secondaryMapLayers = {
  pop: {
    id: "pop",
    type: "fill",
    source: "MCD",
    layout: {},
    paint: {
      "fill-outline-color": "#748388",
      "fill-opacity": {
        base: 9,
        stops: [
          [10, 0.9],
          [12, 0.7],
          [13, 0.6],
        ],
      },
      "fill-color": popColor,
    },
  },
  emp: {
    id: "emp",
    type: "fill",
    source: "MCD",
    layout: {},
    paint: {
      "fill-outline-color": "#748388",
      "fill-opacity": {
        base: 9,
        stops: [
          [10, 0.9],
          [12, 0.7],
          [13, 0.6],
        ],
      },
      "fill-color": empColor,
    },
  },
};

export default secondaryMapLayers;
