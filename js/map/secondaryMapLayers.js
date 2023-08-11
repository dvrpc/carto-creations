// let emp0 = '#CCCCCC';
let emp1 = '#efd259';
let emp2 = '#4b86c6';
let emp3 = '#019653';
let emp4 = '#89c653';
let emp5 = '#f15b22';
let emp6 = '#f9a13f';
let emp7 = '#7f3f98';
let emp8 = '#d9549f';

let popColor = ["step",
  ["get", "submarket"],
  "#7F3F98",
  // 127, 63, 152
  2,
  "#A198D1",
  // 161, 152, 209
  3,
  "#019653",
  // 1, 150, 83
  4,
  "#89C653",
  // 137, 198, 83
  5,
  "#F9A13F",
  // 249, 161, 63
  6,
  "#F9CF45",
  // 249, 207, 69
  7,
  "#0159B8",
  // 1, 89, 184
  8,
  "#F98BC9",
  // 249, 139, 201
  9,
  "#ffffff"
];

// let popColor = ["step",
//   ["get", "submarket"],
//   "#319FA9",
//   2,
//   "#1F0044",
//   3,
//   "#FFD172",
//   4,
//   "#ADC635",
//   5,
//   "#126D83",
//   6,
//   "#DD9526",
//   7,
//   "#9759C9",
//   8,
//   "#FF4248",
//   9,
//   "#126D83"
// ];

let empColor = ["step",
  ["get", "submarket"],
  emp1,
  2,
  emp2,
  3,
  emp3,
  4,
  emp4,
  5,
  emp5,
  6,
  emp6,
  7,
  emp7,
  8,
  emp8
];

const secondaryMapLayers = {
  pop: {
    id: "pop",
    type: "fill",
    source: "housing",
    layout: {},
    paint: {
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
    // filter: ["==", "submarket", 8],
  },
  emp: {
    id: "emp",
    type: "fill",
    source: "housing",
    layout: {},
    paint: {
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
