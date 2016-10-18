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
    // Decoding bases
    var decbase = {
      "1" : "err",
      "&" : "err",
      "a" : "19",
      "b" : "28",
      "c" : "37",
      "d" : "46",
      "e" : "54",
      "f" : "64",
      "g" : "73",
      "h" : "82",
      "i" : "91",
      "j" : "11",
      "k" : "22",
      "l" : "33",
      "m" : "44",
      "n" : "55",
      "o" : "66",
      "p" : "77",
      "q" : "88",
      "r" : "99",
      "s" : "00",
      "t" : "01",
      "19" : "a",
      "28" : "b",
      "37" : "c",
      "46" : "d",
      "55" : "e",
      "64" : "f",
      "73" : "g",
      "82" : "h",
      "91" : "i",
      "11" : "j",
      "22" : "k",
      "33" : "l",
      "44" : "m",
      "54" : "n",
      "66" : "o",
      "77" : "p",
      "88" : "q",
      "99" : "r",
      "00" : "s",
      "01" : "t"
    };

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
      "K" : "10",
      "L" : "11",
      "M" : "12",
      "N" : "13",
      "O" : "14",
      "P" : "15",
      "Q" : "16",
      "R" : "17",
      "S" : "18",
      "T" : "19"
    };

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

    // Illiterations of encoding
    for (var k = 0; k < it; k++){
      var currenco = "", doubleenc = "";
      for(var il = 0; il < encoded.length; il++ ){
        if(decbase[encoded[il].toLowerCase()] != "err"){
          currenco += decbase[encoded[il].toLowerCase()];
        }
      }
      for(var il2 = 0; il2 < currenco.length; il2++){
        doubleenc += base[currenco[il2]];
      }
      encoded = doubleenc;
    }


    encoded = "1&" + encodedcc + "&" + encoded + "&" + it;
  }
  console.log(encoded);
};
