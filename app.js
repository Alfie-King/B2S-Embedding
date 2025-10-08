console.log("hello back to school");

// Defining some constants for later use

const viz = document.getElementById("tableauViz");
let workbook;
let vizActive;
let dashboard;
let listSheets;

// making a function which will allow us to get information on our Vizualisation

function logWorkbookInformation() {
  workbook = viz.workbook;
  console.log(`The workbook name is ${workbook.name}`);

  //   find the sheets within the workbook
  let sheets = workbook.publishedSheetsInfo;
  sheets.forEach((element) => {
    index = element.index;
    console.log(`The sheet with index ${index} is ${element.name}`);
  });

  //   find the active sheet
  vizActiveSheet = workbook.activeSheet;
  console.log(`The active sheet is ${vizActiveSheet.name}`);

  //   list all of the worksheets in our active sheet
  listSheets = vizActiveSheet.worksheets;
  listSheets.forEach((element) => {
    index = element.index;
    console.log(`The worksheet with index ${index} is ${element.name}`);
  });
}

viz.addEventListener("firstinteractive", logWorkbookInformation);

// Step 1: Define the buttons

const onwButton = document.getElementById("onw");
const clearButton = document.getElementById("clear");
const undoButton = document.getElementById("undo");

// Step 2: Define what the buttons do (functions)

function onwfunction() {
  listSheets.forEach((element) => {
    element.applyFilterAsync("State", ["Washington", "Oregon"], "replace");
  });
}

// Step 3: Attach the functions to event listeners

onwButton.addEventListener("click", onwfunction);
