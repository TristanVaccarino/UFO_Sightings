// Import data from data.js file
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

// Create table function
function buildTable(data) {
    // Clear existing data so we're not adding data to already existing data
    tbody.html("");

    // Iterate through each record withing the data
    data.forEach((dataRow) => {
        let row = tbody.append("tr");

        // Iterate through each field in the data object
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
            cell.text(val);
        });
    });
};

// Create a function that listen for the click event
function handleClick() {
    // Get value from the datetime input object
    let date = d3.select("#datetime").property("value");

    // Set the default filter
    let filteredData = tableData;

    // If date was entered, the function will filter the data
    if (date) {
        filteredData = filteredData.filter(row => row.datetime === date);
    };

    // Build the table by calling the buildTable function and passing the filteredData as a parameter
    buildTable(filteredData);
};

// Add a listener to the filter button click
d3.selectAll("#filter-btn").on("click", handleClick);

// Build table when the page load
buildTable(tableData);


