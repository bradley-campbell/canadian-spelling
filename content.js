const spellings = [
  { canadian: "arbour", american: "arbor" },
  { canadian: "behaviour", american: "behavior" },
  { canadian: "belabour", american: "belabor" },
  { canadian: "candour", american: "candor" },
  { canadian: "colour", american: "color" },
  { canadian: "clamour", american: "clamor" },
  { canadian: "favour", american: "favor" },
  { canadian: "favourite", american: "favorite" },
  { canadian: "fervour", american: "fervor" },
  { canadian: "flavour", american: "flavor" },
  { canadian: "harbour", american: "harbor" },
  { canadian: "honour", american: "honor" },
  { canadian: "humour", american: "humor" },
  { canadian: "labour", american: "labor" },
  { canadian: "neighbour", american: "neighbor" },
  { canadian: "parlour", american: "parlor" },
  { canadian: "odour", american: "odor" },
  { canadian: "rancour", american: "rancor" },
  { canadian: "savour", american: "savor" },
  { canadian: "valour", american: "valor" },
  { canadian: "vapour", american: "vapor" },
  { canadian: "vigour", american: "vigor" },
];

const elements = document.getElementsByTagName("*");

const replaceText = (text) => {
  let newText = text;
  spellings.forEach((word) => {
    const americanUpper =
      word.american.charAt(0).toUpperCase() + word.american.slice(1);
    const canadianUpper =
      word.canadian.charAt(0).toUpperCase() + word.canadian.slice(1);

    newText = newText.replace(americanUpper, canadianUpper);

    // const regex = new RegExp(word.american, "gi");

    newText = newText.replace(word.american, word.canadian);
  });

  return newText;
};

for (let i = 0; i < elements.length; i++) {
  let element = elements[i];

  for (let j = 0; j < element.childNodes.length; j++) {
    let node = element.childNodes[j];

    if (node.nodeType === 3) {
      let text = node.nodeValue;

      let replacedText = replaceText(text);

      if (replacedText !== text) {
        element.replaceChild(document.createTextNode(replacedText), node);
      }
    }
  }
}

