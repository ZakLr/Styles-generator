document.addEventListener("DOMContentLoaded", function () {
  const copyButton = document.querySelector(".copy-button");

  const button = document.getElementById("button");
  const fsVal = document.getElementById("font-sizee");
  const fwVal = document.getElementById("font-weightt");
  const pVal = document.getElementById("paddingg");
  const bVal = document.getElementById("borderr");
  const hVal = document.getElementById("heightt");
  const lhVal = document.getElementById("line-heightt");
  const wVal = document.getElementById("widthh");
  const cVal = document.getElementById("colorr");
  const sVal = document.getElementById("box-shadoww");

  const borderTopInput = document.querySelector(".borderTopWidth");
  const borderBottomInput = document.querySelector(".borderBottomWidth");
  const borderLeftInput = document.querySelector(".borderLeftWidth");
  const borderRightInput = document.querySelector(".borderRightWidth");
  const paddingInput = document.querySelector(".padding");
  const bRadiusInput = document.querySelector(".b-radius");
  const textColorInput = document.querySelector(".colorPicker");
  const bgColorInput = document.querySelector(".bgPicker");
  const fontSizeInput = document.querySelector(".font-size");
  const fontWeightInput = document.querySelector(".font-weight");

  const boxShadowInputs = [
    document.getElementById("hOffset"),
    document.getElementById("vOffset"),
    document.getElementById("blurRadius"),
    document.getElementById("spreadRadius"),
    document.getElementById("shadowColor"),
  ];
  const textDecorationInput = document.querySelector(".text-decoration");
  const letterSpacingInput = document.querySelector(".letterSpacing");
  const textAlignInput = document.querySelector(".text-align");
  const lineHeightInput = document.querySelector(".line-height");
  const borderVal = document.getElementById("borderr");

  const borderInputs = [
    borderTopInput,
    borderBottomInput,
    borderLeftInput,
    borderRightInput,
  ];

  function updateStyles() {
    var CSbox = window.getComputedStyle(button);
    fsVal.innerText = " " + CSbox.fontSize + ";";
    fwVal.innerText = " " + CSbox.fontWeight + ";";
    lhVal.innerText = " " + CSbox.lineHeight + ";";
    cVal.innerText = " " + CSbox.color + ";";
    pVal.innerText = " " + CSbox.padding + ";";
    bVal.innerText =
      " " +
      CSbox.borderTop +
      " " +
      CSbox.borderRight +
      " " +
      CSbox.borderBottom +
      " " +
      CSbox.borderLeft +
      ";";
    hVal.innerText = " " + CSbox.height + ";";
    wVal.innerText = " " + CSbox.width + ";";
    sVal.innerText = " " + CSbox.boxShadow + ";";
  }

  function updateBorderInputs() {
    const borderTopWidth = borderTopInput.value;
    const borderBottomWidth = borderBottomInput.value;
    const borderLeftWidth = borderLeftInput.value;
    const borderRightWidth = borderRightInput.value;

    button.style.borderTopWidth = `${borderTopWidth}px`;
    button.style.borderBottomWidth = `${borderBottomWidth}px`;
    button.style.borderLeftWidth = `${borderLeftWidth}px`;
    button.style.borderRightWidth = `${borderRightWidth}px`;

    updateStyles();
  }

  borderTopInput.addEventListener("input", updateBorderInputs);
  borderBottomInput.addEventListener("input", updateBorderInputs);
  borderLeftInput.addEventListener("input", updateBorderInputs);
  borderRightInput.addEventListener("input", updateBorderInputs);

  paddingInput.addEventListener("input", function () {
    const paddingValue = this.value;
    button.style.padding = `${paddingValue}px`;
    updateStyles();
  });

  bRadiusInput.addEventListener("input", function () {
    const radiusValue = this.value;
    button.style.borderRadius = `${radiusValue}px`;
    updateStyles();
  });

  textColorInput.addEventListener("input", function () {
    const textColor = this.value;
    button.style.color = textColor;
    updateStyles();
  });

  bgColorInput.addEventListener("input", function () {
    const bgColor = this.value;
    button.style.backgroundColor = bgColor;
    updateStyles();
  });

  fontSizeInput.addEventListener("input", function () {
    const fontSize = this.value;
    button.style.fontSize = `${fontSize}px`;
    updateStyles();
  });

  function updateBoxShadow() {
    const hOffset = boxShadowInputs[0].value || "0";
    const vOffset = boxShadowInputs[1].value || "0";
    const blurRadius = boxShadowInputs[2].value || "0";
    const spreadRadius = boxShadowInputs[3].value || "0";
    const shadowColor = boxShadowInputs[4].value || "black";

    const boxShadowValue = `${hOffset}px ${vOffset}px ${blurRadius}px ${spreadRadius}px ${shadowColor}`;
    button.style.boxShadow = boxShadowValue;
    updateStyles();
  }

  boxShadowInputs.forEach((input) =>
    input.addEventListener("input", updateBoxShadow)
  );

  fontWeightInput.addEventListener("change", function () {
    const fontWeight = this.value;
    button.style.fontWeight = fontWeight;
    updateStyles();
  });

  textDecorationInput.addEventListener("change", function () {
    const textDecoration = this.value;
    button.style.textDecoration = textDecoration;
    updateStyles();
  });

  letterSpacingInput.addEventListener("input", function () {
    const letterSpacing = this.value;
    button.style.letterSpacing = `${letterSpacing}px`;
    updateStyles();
  });

  textAlignInput.addEventListener("change", function () {
    const textAlign = this.value;
    button.style.textAlign = textAlign;
    updateStyles();
  });

  lineHeightInput.addEventListener("input", function () {
    const lineHeight = this.value;
    button.style.lineHeight = lineHeight;
    updateStyles();
  });
  updateStyles();
});

function copyStyles() {
  const codeElement = document.querySelector(".code");
  const codeContent = codeElement.innerText;
  var formattedCode = codeContent.split(":").join("");
  /* formattedCode = formattedCode.replaceAll("\n(", "( ");
  formattedCode = formattedCode.replaceAll(");\n", ") "); */
  formattedCode = formattedCode.replaceAll("\n", ":");
  formattedCode = formattedCode.replaceAll(";:", ";\n");
  formattedCode = formattedCode.replaceAll(":", "" + " ");

  navigator.clipboard
    .writeText(formattedCode)
    .then(() => {
      alert("Styles copied to clipboard!");
    })
    .catch((error) => {
      console.error("Unable to copy styles: ", error);
    });
}
