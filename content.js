const spellings = [
  { canadian: "abridgement", american: "abridgment" },
  { canadian: "acknowledgement", american: "acknowledgment" },
  { canadian: "amoeba", american: "ameba" },
  { canadian: "analyse", american: "analyze" },
  { canadian: "anaesthesia", american: "anesthesia" },
  { canadian: "arbour", american: "arbor" },
  { canadian: "axe", american: "ax" },
  { canadian: "barrelled", american: "barreled" },
  { canadian: "behaviour", american: "behavior" },
  { canadian: "belabour", american: "belabor" },
  { canadian: "brunette", american: "brunet" },
  { canadian: "calibre", american: "caliber" },
  { canadian: "catalogue", american: "catalog" },
  { canadian: "cancelled", american: "canceled" },
  { canadian: "candour", american: "candor" },
  { canadian: "centre", american: "center" },
  { canadian: "centimetre", american: "centimeter" },
  { canadian: "cheque", american: "check" },
  { canadian: "colour", american: "color" },
  { canadian: "counsellor", american: "counselor" },
  { canadian: "clamour", american: "clamor" },
  { canadian: "crystalline", american: "crystaline" },
  { canadian: "crueller", american: "cruelest" },
  { canadian: "crystallize", american: "crystalize" },
  { canadian: "defence", american: "defense" },
  { canadian: "dialogue", american: "dialog" },
  { canadian: "aeon", american: "eon" },
  { canadian: "favour", american: "favor" },
  { canadian: "favourite", american: "favorite" },
  { canadian: "fervour", american: "fervor" },
  { canadian: "fibre", american: "fiber" },
  { canadian: "flavour", american: "flavor" },
  { canadian: "fuelled", american: "fueled" },
  { canadian: "fulfil", american: "fulfill" },
  { canadian: "funnelled", american: "funneled" },
  { canadian: "gauge", american: "gage" },
  { canadian: "goitre", american: "goiter" },
  { canadian: "grey", american: "gray" },
  { canadian: "gruelling", american: "grueling" },
  { canadian: "harbour", american: "harbor" },
  { canadian: "honour", american: "honor" },
  { canadian: "humour", american: "humor" },
  { canadian: "jeweller", american: "jeweler" },
  { canadian: "instalment", american: "installment" },
  { canadian: "imperilled", american: "imperiled" },
  { canadian: "kilometre", american: "kilometer" },
  { canadian: "labour", american: "labor" },
  { canadian: "labelled", american: "labeled" },
  { canadian: "labour", american: "labor" },
  { canadian: "levelled", american: "leveled" },
  { canadian: "licence", american: "license" },
  { canadian: "litre", american: "liter" },
  { canadian: "louvre", american: "louver" },
  { canadian: "lustre", american: "luster" },
  { canadian: "macabre", american: "macaber" },
  { canadian: "manoeuvre", american: "maneuver" },
  { canadian: "marvellous", american: "marvelous" },
  { canadian: "matte", american: "matt" },
  { canadian: "medallist", american: "medalist" },
  { canadian: "meagre", american: "meager" },
  { canadian: "metre", american: "meter" },
  { canadian: "millimetre", american: "millimeter" },
  { canadian: "mitre", american: "miter" },
  { canadian: "modelled", american: "modeled" },
  { canadian: "mould", american: "mold" },
  { canadian: "moult", american: "molt" },
  { canadian: "moustache", american: "mustache" },
  { canadian: "neighbour", american: "neighbor" },
  { canadian: "paean", american: "pean" },
  { canadian: "paleolothic", american: "palaeolothic" },
  { canadian: "panelling", american: "paneling" },
  { canadian: "panelled", american: "paneled" },
  { canadian: "parlour", american: "parlor" },
  // { canadia"n: practice (n) practise(v)	practice (n/v" },
  { canadian: "pummelled", american: "pummeled" },
  { canadian: "pyjamas", american: "pajamas" },
  { canadian: "odour", american: "odor" },
  { canadian: "rancour", american: "rancor" },
  { canadian: "raquet", american: "racket" },
  { canadian: "reconnoitre", american: "reconnoiter" },
  { canadian: "saleable", american: "salable" },
  { canadian: "savour", american: "savor" },
  { canadian: "sceptre", american: "scepter" },
  { canadian: "smoulder", american: "smolder" },
  { canadian: "sombre", american: "somber" },
  { canadian: "sulphate", american: "sulfate" },
  { canadian: "sulphur", american: "sulfur" },
  { canadian: "tonne", american: "ton" },
  { canadian: "totalled", american: "totaled" },
  { canadian: "tranquillize", american: "tranquilize" },
  { canadian: "tumour", american: "tumor" },
  { canadian: "traveller", american: "traveler" },
  { canadian: "tunnelled", american: "tunneled" },
  { canadian: "theatre", american: "theater" },
  { canadian: "vice", american: "vise" },
  { canadian: "valour", american: "valor" },
  { canadian: "vapour", american: "vapor" },
  { canadian: "vigour", american: "vigor" },
  { canadian: "wilful", american: "willful" },
  { canadian: "worshipped", american: "worshiped" },
  { canadian: "queueing", american: "queuing" },
];

const handleTextReplace = () => {
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
};

window.location.href.includes("https://www.google")
  ? console.log("Goooooogle")
  : handleTextReplace();
