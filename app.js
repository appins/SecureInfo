var phoneNumber = [];

module.exports.PNumber = function(ccode, pnumber){
   phoneNumber[0] = ccode;
   phoneNumber[1] = pnumber;
};

module.exports.ECp = function(type, it){
  var encoded = "";
  var encodedcc = "";
  var ccode   = String(phoneNumber[0]);
  var pNumber = String(phoneNumber[1]);

  // Base
  if(type == 0x01){
    
    // Encoding base for country code, the second one is for phone number
    var base = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
    // Encode country code
    if(phoneNumber[0]){
      for(var i = 0; i < ccode.length; i++){
        encodedcc += base[ccode.charAt(i)];
      }
    }
    // Encode phone number (with new base)
    if(phoneNumber[1]){
      var base2 = ["K", "L", "M", "N", "O", "P", "Q", "R", "S", "T"];
      for(var j = 0; j < pNumber.length; j++){
        encoded += base2[pNumber.charAt(j)];
      }
    }


    encoded = "1&" + encodedcc + "&" + encoded;
  }

  // Output encoded value
  console.log(encoded);
};
