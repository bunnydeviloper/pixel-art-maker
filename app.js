const pixelCanvas = $('#pixelCanvas');

function makeGrid() {
  pixelCanvas.find('tr').remove(); // reset to blank
  const column = $('#inputHeight').val();
  const row = $('#inputWidth').val();

  //Create the grid
  let grid;
  for (i = 0; i < column; i++ ){
    grid = grid + '<tr>';
    for (j = 0; j < row; j++) {
      grid = grid + '<td></td>';
    }
    grid = grid + '</tr>';
  }
  pixelCanvas.html(grid);
}

// create table when user click on submit button
$('#sizePicker').on('submit', function(e){
  e.preventDefault();
  $(makeGrid())
})

// Add color to the pixel
pixelCanvas.on('click', 'td', function () {
  const color = $('#colorPicker').val();
  $(this).css('background-color', color);
});

// Remove color by double click
pixelCanvas.on('dblclick', 'td', function () {
  $(this).css('background-color', 'white');
});
