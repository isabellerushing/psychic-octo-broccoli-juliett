$(document).ready(function () {
  console.log("ready");

  //NATO
  const natoAlphabet = {
    "A": "Alfa",
    "B": "Bravo",
    "C": "Charlie",
    "D": "Delta",
    "E": "Echo",
    "F": "Foxtrot",
    "G": "Golf",
    "H": "Hotel",
    "I": "India",
    "J": "Juliett",
    "K": "Kilo",
    "L": "Lima",
    "M": "Mike",
    "N": "November",
    "O": "Oscar",
    "P": "Papa",
    "Q": "Quebec",
    "R": "Romeo",
    "S": "Sierra",
    "T": "Tango",
    "U": "Uniform",
    "V": "Victor",
    "W": "Whiskey",
    "X": "Xray",
    "Y": "Yankee",
    "Z": "Zulu"
  };

  let newWord = "";
  
  //click the go button
  $("#gobutton").click(function () {
    // Test
    //alert("Hi!");
    
    $("#NATO").show();
    let word = $("#word").val().toUpperCase().split("");
    
    $.each(word, (index, value) => {
      console.log(index, value);
      let letter = "";
      
      letter = word[index];

      if (natoAlphabet[letter]) {
        console.log("PLEASE", natoAlphabet.letter);
        newWord += natoAlphabet[letter] + " ";
      } else {
        newWord += '';
      }
    });

    //display newWord
    $("#newWord").text(newWord);
  });  
});