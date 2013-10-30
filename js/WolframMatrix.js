/*
 Main Controller for the simple Wolfram Alpha matrix editor
 */

function MainController($scope) {
  /* Adds a row to the matrix editor */
  $scope.addRow = function() {
    var newRow = [];

    for (var i = 0; i < $scope.matrix[0].length; i++) {
      newRow.push(0);
    }

    $scope.matrix.push(newRow);
    $scope.update();
  };

  /* Remove a row from the matrix editor */
  $scope.removeRow = function() {
    $scope.matrix.pop();
    $scope.update();
  };

  /* Adds a column to the matrix editor */
  $scope.addColumn = function() {
    for (var i = 0; i < $scope.matrix.length; i++) {
      $scope.matrix[i].push(0);
    }

    $scope.update();
  };

  /* Removes a column from the matrix editor */
  $scope.removeColumn = function() {
    for (var i = 0; i < $scope.matrix.length; i++) {
      $scope.matrix[i].pop();
    }

    $scope.update();
  };

  /* Reads $scope.matrix and returns a string with the wolframized matrix */
  $scope.generateMatrix = function() {
    var output = "{";

    for (var i = 0; i < $scope.matrix.length; i++) {
      output += "{";

      for (var u = 0; u < $scope.matrix[i].length; u++) {
        output += $scope.matrix[i][u].toString();

        if (u != $scope.matrix[i].length - 1) {
          output += ",";
        }
      }

      if (i != $scope.matrix.length - 1) {
        output += "},";
      } else {
        output += "}";
      }
    }

    return output + "}";
  };

  /* Updates the value in the output text box */
  $scope.update = function() {
    $scope.output = $scope.generateMatrix();
  };

  /* Searches the wolframized string on Wolfram Alpha */
  $scope.wolframSearch = function() {
    var win = window.open("http://www.wolframalpha.com/input/?i=" + $scope.output, '_blank');
  };

  /* Initializes the matrix with a bunch of zeros */
  $scope.matrix = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
  $scope.output = $scope.generateMatrix($scope.matrix);
}
