// Function to create the bar chart
function buildBarChart(sampleData) {
    // Slice the top 10 sample values, labels, and hover text
    var top10SampleValues = sampleData.sample_values.slice(0, 10);
    var top10OTUIds = sampleData.otu_ids.slice(0, 10);
    var top10OTULabels = sampleData.otu_labels.slice(0, 10);
  
    // Create trace for the bar chart
    var barTrace = {
      x: top10SampleValues.reverse(),
      y: top10OTUIds.map(otuID => `OTU ${otuID}`).reverse(),
      text: top10OTULabels.reverse(),
      type: "bar",
      orientation: "h"
    };
  
    // Create data array
    var barData = [barTrace];
  
    // Define layout for the bar chart
    var barLayout = {
      title: "Top 10 OTUs Found in Individual",
      xaxis: { title: "Sample Values" },
      yaxis: { title: "OTU ID" }
    };
  
    // Plot the bar chart
    Plotly.newPlot("bar", barData, barLayout);
  }
  
  // Function to create the bubble chart
  function buildBubbleChart(sampleData) {
    // Create trace for the bubble chart
    var bubbleTrace = {
      x: sampleData.otu_ids,
      y: sampleData.sample_values,
      text: sampleData.otu_labels,
      mode: "markers",
      marker: {
        size: sampleData.sample_values,
        color: sampleData.otu_ids,
        colorscale: "Earth"
      }
    };
  
    // Create data array
    var bubbleData = [bubbleTrace];
  
    // Define layout for the bubble chart
    var bubbleLayout = {
      title: "Bacteria Cultures per Sample",
      xaxis: { title: "OTU ID" },
      yaxis: { title: "Sample Values" }
    };
  
    // Plot the bubble chart
    Plotly.newPlot("bubble", bubbleData, bubbleLayout);
  }
  
  // Function to display metadata
  function showMetadata(metadata) {
    // Select the panel for metadata display
    var metadataPanel = d3.select("#sample-metadata");
  
    // Clear any existing metadata
    metadataPanel.html("");
  
    // Iterate through metadata and display as key-value pairs
    Object.entries(metadata).forEach(([key, value]) => {
      metadataPanel.append("p").text(`${key}: ${value}`);
    });
  }
  
  // Function to update all visualizations and metadata
  function optionChanged(newSample) {
    // Fetch the data for the selected sample
    var sampleData = data.samples.find(sample => sample.id === newSample);
    var metadata = data.metadata.find(item => item.id == newSample);
  
    // Update the bar chart, bubble chart, and metadata
    buildBarChart(sampleData);
    buildBubbleChart(sampleData);
    showMetadata(metadata);
  }
  
  // Initialize the dashboard
  function init() {
    // Fetch the data from the JSON file
    d3.json(dataUrl).then(function(data) {
      // Populate the dropdown with sample IDs
      var dropdown = d3.select("#selDataset");
  
      data.names.forEach(function(sampleID) {
        dropdown.append("option").text(sampleID).property("value", sampleID);
      });
  
      // Get the first sample ID and initialize the charts
      var initialSample = data.names[0];
      optionChanged(initialSample);
    });
  }
  
  // Call the init() function to initialize the dashboard
  init();
  