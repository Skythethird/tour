const realFileBtn1 = document.getElementById("real-file1");
const customBtn1 = document.getElementById("custom-button1");
const customTxt1 = document.getElementById("custom-text1");
const realFileBtn2 = document.getElementById("real-file2");
const customBtn2 = document.getElementById("custom-button2");
const customTxt2 = document.getElementById("custom-text2");
const realFileBtn3 = document.getElementById("real-file3");
const customBtn3 = document.getElementById("custom-button3");
const customTxt3 = document.getElementById("custom-text3");

customBtn1.addEventListener("click", function() {
  realFileBtn1.click();
});

realFileBtn1.addEventListener("change", function() {
  if (realFileBtn1.value) {
    customTxt1.innerHTML = realFileBtn1.value.match(
      /[\/\\]([\w\d\s\.\-\(\)]+)$/
    )[1];
  } else {
    customTxt1.innerHTML = "No file chosen, yet.";
  }
});

customBtn2.addEventListener("click", function() {
  realFileBtn2.click();
});

realFileBtn2.addEventListener("change", function() {
  if (realFileBtn2.value) {
    customTxt2.innerHTML = realFileBtn2.value.match(
      /[\/\\]([\w\d\s\.\-\(\)]+)$/
    )[1];
  } else {
    customTxt2.innerHTML = "No file chosen, yet.";
  }
});

customBtn3.addEventListener("click", function() {
    realFileBtn3.click();
  });
  
  realFileBtn3.addEventListener("change", function() {
    if (realFileBtn3.value) {
      customTxt3.innerHTML = realFileBtn3.value.match(
        /[\/\\]([\w\d\s\.\-\(\)]+)$/
      )[1];
    } else {
      customTxt3.innerHTML = "No file chosen, yet.";
    }
  });