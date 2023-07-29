import legendConfig from "./legendConfig.js";

// fncs to handle legends
const createLegendItem = (val) => {
  const legendDetails = legendConfig[val];

  if (legendDetails.label === "pop") {
    return `
        <div class="flex-column">
          <h3 class="legend-h3">Submarkets</h3>
          
          <div class="flex-row flex-align-center legend-box-item">
            <span class="legend-icon pop-1"></span>
            <span>Submarket 1</span>
          </div>
          <div class="flex-row flex-align-center legend-box-item">
            <span class="legend-icon pop-2"></span>  
            <span>Submarket 2</span>
          </div>
          <div class="flex-row flex-align-center legend-box-item">
            <span class="legend-icon pop-3"></span>  
            <span>Submarket 3</span>
          </div>
          <div class="flex-row flex-align-center legend-box-item">
            <span class="legend-icon pop-4"></span>
            <span>Submarket 4</span>
          </div>
          <div class="flex-row flex-align-center legend-box-item">
            <span class="legend-icon pop-5"></span>  
            <span>Submarket 5</span>
          </div>
          <div class="flex-row flex-align-center legend-box-item">
          <span class="legend-icon pop-6"></span>  
          <span>Submarket 6</span>
        </div>
        <div class="flex-row flex-align-center legend-box-item">
        <span class="legend-icon pop-7"></span>  
        <span>Submarket 7</span>
      </div>
      <div class="flex-row flex-align-center legend-box-item">
      <span class="legend-icon pop-8"></span>  
      <span>Submarket 8</span>
    </div>
        </div>
    `;
  } else if (legendDetails.label === "emp") {
    return `
      <div class="flex-column">
        <h3 class="legend-h3">Submarkets</h3>

          <div class="flex-row flex-align-center legend-box-item">
            <span class="legend-icon emp-1"></span>
            <span>Submarket 1</span>
          </div>
          <div class="flex-row flex-align-center legend-box-item">
            <span class="legend-icon emp-2"></span>
            <span>Submarket 2</span>
          </div>
          <div class="flex-row flex-align-center legend-box-item">
            <span class="legend-icon emp-3"></span>
            <span>Submarket 3</span>
          </div>
          <div class="flex-row flex-align-center legend-box-item">
            <span class="legend-icon emp-4"></span>
            <span>Submarket 4</span>
          </div>
          <div class="flex-row flex-align-center legend-box-item">
            <span class="legend-icon emp-5"></span>
            <span>Submarket 5</span>
          </div>
          <div class="flex-row flex-align-center legend-box-item">
          <span class="legend-icon emp-6"></span>
          <span>Submarket 6</span>
        </div>
        <div class="flex-row flex-align-center legend-box-item">
        <span class="legend-icon emp-7"></span>
        <span>Submarket 7</span>
      </div>
      <div class="flex-row flex-align-center legend-box-item">
      <span class="legend-icon emp-8"></span>
      <span>Submarket 8</span>
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
