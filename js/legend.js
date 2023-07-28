import legendConfig from "./legendConfig.js";

// fncs to handle legends
const createLegendItem = (val) => {
  const legendDetails = legendConfig[val];

  if (legendDetails.label === "pop") {
    return `
        <div class="flex-column">
          <h3 class="legend-h3">People</h3>
          
          <div class="flex-row flex-align-center legend-box-item">
            <span class="legend-icon pop-1"></span>
            <span>Less than 10,000</span>
          </div>
          <div class="flex-row flex-align-center legend-box-item">
            <span class="legend-icon pop-2"></span>  
            <span>10,000 to 24,999</span>
          </div>
          <div class="flex-row flex-align-center legend-box-item">
            <span class="legend-icon pop-3"></span>  
            <span>25,000 to 49,999</span>
          </div>
          <div class="flex-row flex-align-center legend-box-item">
            <span class="legend-icon pop-4"></span>
            <span>50,000 to 99,999</span>
          </div>
          <div class="flex-row flex-align-center legend-box-item">
            <span class="legend-icon pop-5"></span>  
            <span>100,000 or More</span>
          </div>
        </div>
    `;
  } else if (legendDetails.label === "emp") {
    return `
      <div class="flex-column">
        <h3 class="legend-h3">Employees</h3>

          <div class="flex-row flex-align-center legend-box-item">
            <span class="legend-icon emp-1"></span>
            <span>Fewer than 5,000</span>
          </div>
          <div class="flex-row flex-align-center legend-box-item">
            <span class="legend-icon emp-2"></span>
            <span>5,000 to 9,999</span>
          </div>
          <div class="flex-row flex-align-center legend-box-item">
            <span class="legend-icon emp-3"></span>
            <span>10,000 to 19,999</span>
          </div>
          <div class="flex-row flex-align-center legend-box-item">
            <span class="legend-icon emp-4"></span>
            <span>20,000 to 39,999</span>
          </div>
          <div class="flex-row flex-align-center legend-box-item">
            <span class="legend-icon emp-5"></span>
            <span>40,000 or More</span>
          </div>
        </div>
      </div>
    `;
  }
  return `
    <div class="flex-row flex-align-center legend-item">
      <span
        class="legend-icon-${legendDetails.iconType}"
        style="background-color:${legendDetails.color};"
      ></span>
      <span class="legend-text">${legendDetails.label}</span>
    </div>
  `;
};

const handleLegend = (vals, container) => {
  let legendItems = "";
  legendItems += vals.map((val) => createLegendItem(val)).join("");

  // wholesale clear and replace
  while (container.firstChild) container.removeChild(container.firstChild);
  container.insertAdjacentHTML("afterbegin", legendItems);
};

export default handleLegend;
