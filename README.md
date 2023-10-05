# Bellybutton Biodiversity Dashboard

## Overview
The Bellybutton Biodiversity Dashboard is an interactive web application that allows users to explore and visualize microbial data collected from belly button samples. Users can select different test subject IDs to view bar charts, bubble charts, and demographic information related to the samples.

## Features

### Bar Chart
- Displays the top 10 Operational Taxonomic Units (OTUs) found in an individual's belly button sample.
- Uses sample_values as the values for the bar chart.
- Uses otu_ids as the labels for the bar chart.
- Uses otu_labels as hover text for the chart.

### Bubble Chart
- Displays each sample as a bubble chart.
- Uses otu_ids for the x values.
- Uses sample_values for the y values.
- Uses sample_values for the marker size.
- Uses otu_ids for the marker colors.
- Uses otu_labels for the text values.

### Sample Metadata
- Displays an individual's demographic information.
- Updates the metadata when a new sample is selected.

## Installation
1. Clone the repository to your local machine.
2. Open the project folder in your preferred code editor.

## Usage
1. Open `index.html` in a web browser.
2. Use the dropdown menu to select a test subject ID.
3. Explore the bar chart, bubble chart, and demographic information.

## Data Sources
- The microbial data is sourced from the `samples.json` file.
- Demographic information is also included in `samples.json`.

## Technologies Used
- JavaScript
- D3.js (Data-Driven Documents)
- Plotly.js

## Deployment
This project can be deployed to a free static page hosting service, such as GitHub Pages, to make it accessible to others. To deploy, follow these steps:

1. Create a GitHub repository for the project if you haven't already.
2. Push the project code to the GitHub repository.
3. Navigate to the repository settings on GitHub.
4. Scroll down to the "GitHub Pages" section.
5. Choose the branch you want to deploy (e.g., "main").
6. Click "Save" or "Publish."

Once deployed, you can access the project using the GitHub Pages URL.

## Credits
- This project was completed as part of a data visualization assignment.

