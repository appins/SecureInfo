var phoneNumber = [];

module.exports.PNumber = function(ccode, pnumber){
   phoneNumber[0] = ccode;
   phoneNumber[1] = pnumber;
};

module.exports.ECp = function(type){
  var encoded = "";
  var ccode   = String(phoneNumber[0]);
  var pNumber = String(phoneNumber[1]);

  // Base
  if(type == 0x01){
    encoded = "1&";
    var base = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
    if(phoneNumber[0]){
      for(var i = 0; i < ccode.length; i++){
        encoded += base[ccode.charAt(i)];
      }
    }
    if(phoneNumber[1]){
      base = ["K", "L", "M", "N", "O", "P", "Q", "R", "S", "T"];
      for(var j = 0; j < pNumber.length; j++){
        encoded += base[pNumber.charAt(j)];
      }
    }
  }
  console.log(encoded);
};

(function(){
  module.exports.PNumber(1, 0123456789);
  module.exports.ECp(0x01);
})();
