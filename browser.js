function pndc(ec){
  var arr = ec.split("&");
  // Decode base
  if(arr[0] == 1){
    var baserev = {
      "A" : "0",
      "B" : "1",
      "C" : "2",
      "D" : "3",
      "E" : "4",
      "F" : "5",
      "G" : "6",
      "H" : "7",
      "I" : "8",
      "J" : "9",
      "K" : "0",
      "L" : "1",
      "M" : "2",
      "N" : "3",
      "O" : "4",
      "P" : "5",
      "Q" : "6",
      "R" : "7",
      "S" : "8",
      "T" : "9"
    };
    var cc = "", pn = "";
    for(var i = 0; i < arr[1].length; i++){
      cc += baserev[arr[1][i]];
    }
    for(var j = 0; j < arr[2].length; j++){
      pn += baserev[arr[2][j]];
    }
    return [cc, pn];
  }
}
