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

const elements = document.getElementsByTagName("*");

console.log(typeof elements);

for (let i = 0; i < elements.length; i++) {
  let element = elements[i];

  for (let j = 0; j < element.childNodes.length; j++) {
    let node = element.childNodes[j];

    if (node.nodeType === 3) {
      let text = node.nodeValue;
      let replacedText = text.replace(/labor/gi, "labour");
      replacedText = replacedText.replace(/abridgmen/gi, "abridgement");
      replacedText = replacedText.replace(
        /acknowledgment/gi,
        "acknowledgement"
      );
      replacedText = replacedText.replace(/ameba/gi, "amoeba");
      replacedText = replacedText.replace(/analyze/gi, "analyse");
      replacedText = replacedText.replace(/anesthesia/gi, "anaesthesia");
      replacedText = replacedText.replace(/arbor/gi, "arbour");
      replacedText = replacedText.replace(/ax/gi, "axe");
      replacedText = replacedText.replace(/barreled/gi, "barrelled");
      replacedText = replacedText.replace(/behavior/gi, "behaviour");
      replacedText = replacedText.replace(/belabor/gi, "belabour");
      replacedText = replacedText.replace(/brunet/gi, "brunette");
      replacedText = replacedText.replace(/caliber/gi, "calibre");
      replacedText = replacedText.replace(/catalog/gi, "catalogue");
      replacedText = replacedText.replace(/canceled/gi, "cancelled");
      replacedText = replacedText.replace(/candor/gi, "candour");
      replacedText = replacedText.replace(/center/gi, "centre");
      replacedText = replacedText.replace(/centimeter/gi, "centimetre");
      replacedText = replacedText.replace(/check/gi, "cheque");
      replacedText = replacedText.replace(/color/gi, "colour");
      replacedText = replacedText.replace(/counselor/gi, "counsellor");
      replacedText = replacedText.replace(/clamor/gi, "clamour");
      replacedText = replacedText.replace(/crystaline/gi, "crystalline");
      replacedText = replacedText.replace(/cruelest/gi, "crueller");
      replacedText = replacedText.replace(/crystalize/gi, "crystallize");
      replacedText = replacedText.replace(/defense/gi, "defence");
      replacedText = replacedText.replace(/dialog/gi, "dialogue");
      replacedText = replacedText.replace(/eon/gi, "aeon");
      replacedText = replacedText.replace(/favor/gi, "favour");
      replacedText = replacedText.replace(/favorite/gi, "favourite");
      replacedText = replacedText.replace(/fervor/gi, "fervour");
      replacedText = replacedText.replace(/fiber/gi, "fibre");
      replacedText = replacedText.replace(/flavor/gi, "flavour");
      replacedText = replacedText.replace(/fueled/gi, "fuelled");
      replacedText = replacedText.replace(/fulfill/gi, "fulfil");
      replacedText = replacedText.replace(/funneled/gi, "funnelled");
      replacedText = replacedText.replace(/gage/gi, "gauge");
      replacedText = replacedText.replace(/goiter/gi, "goitre");
      replacedText = replacedText.replace(/gray/gi, "grey");
      replacedText = replacedText.replace(/grueling/gi, "gruelling");
      replacedText = replacedText.replace(/harbor/gi, "harbour");
      replacedText = replacedText.replace(/honor/gi, "honour");
      replacedText = replacedText.replace(/humor/gi, "humour");
      replacedText = replacedText.replace(/jeweler/gi, "jeweller");
      replacedText = replacedText.replace(/installment/gi, "instalment");
      replacedText = replacedText.replace(/imperiled/gi, "imperilled");
      replacedText = replacedText.replace(/kilometer/gi, "kilometre");
      replacedText = replacedText.replace(/labor/gi, "labour");
      replacedText = replacedText.replace(/labeled/gi, "labelled");
      replacedText = replacedText.replace(/labor/gi, "labour");
      replacedText = replacedText.replace(/leveled/gi, "levelled");
      replacedText = replacedText.replace(/license/gi, "licence");
      replacedText = replacedText.replace(/liter/gi, "litre");
      replacedText = replacedText.replace(/louver/gi, "louvre");

      if (replacedText !== text) {
        element.replaceChild(document.createTextNode(replacedText), node);
      }
    }
  }
}

// replacedText = text.replace(/labor/gi, "labour");
// replacedText = text.replace(/abridgmen/gi, "abridgement");
// replacedText = text.replace(/acknowledgment/gi, "acknowledgement");
// replacedText = text.replace(/ameba/gi, "amoeba");
// replacedText = text.replace(/analyze/gi, "analyse");
// replacedText = text.replace(/anesthesia/gi, "anaesthesia");
// replacedText = text.replace(/arbor/gi, "arbour");
// replacedText = text.replace(/ax/gi, "axe");
// replacedText = text.replace(/barreled/gi, "barrelled");
// replacedText = text.replace(/behavior/gi, "behaviour");
// replacedText = text.replace(/belabor/gi, "belabour");
// replacedText = text.replace(/brunet/gi, "brunette");
// replacedText = text.replace(/caliber/gi, "calibre");
// replacedText = text.replace(/catalog/gi, "catalogue");
// replacedText = text.replace(/canceled/gi, "cancelled");
// replacedText = text.replace(/candor/gi, "candour");
// replacedText = text.replace(/center/gi, "centre");
// replacedText = text.replace(/centimeter/gi, "centimetre");
// replacedText = text.replace(/check/gi, "cheque");
// replacedText = text.replace(/color/gi, "colour");
// replacedText = text.replace(/counselor/gi, "counsellor");
// replacedText = text.replace(/clamor/gi, "clamour");
// replacedText = text.replace(/crystaline/gi, "crystalline");
// replacedText = text.replace(/cruelest/gi, "crueller");
// replacedText = text.replace(/crystalize/gi, "crystallize");
// replacedText = text.replace(/defense/gi, "defence");
// replacedText = text.replace(/dialog/gi, "dialogue");
// replacedText = text.replace(/ eon/gi, "aeon");
// replacedText = text.replace(/favor/gi, "favour");
// replacedText = text.replace(/favorite/gi, "favourite");
// replacedText = text.replace(/fervor/gi, "fervour");
// replacedText = text.replace(/fiber/gi, "fibre");
// replacedText = text.replace(/flavor/gi, "flavour");
// replacedText = text.replace(/fueled/gi, "fuelled");
// replacedText = text.replace(/fulfill/gi, "fulfil");
// replacedText = text.replace(/funneled/gi, "funnelled");
// replacedText = text.replace(/gage/gi, "gauge");
// replacedText = text.replace(/goiter/gi, "goitre");
// replacedText = text.replace(/gray/gi, "grey");
// replacedText = text.replace(/grueling/gi, "gruelling");
// replacedText = text.replace(/harbor/gi, "harbour");
// replacedText = text.replace(/honor/gi, "honour");
// replacedText = text.replace(/humor/gi, "humour");
// replacedText = text.replace(/jeweler/gi, "jeweller");
// replacedText = text.replace(/installment/gi, "instalment");
// replacedText = text.replace(/imperiled/gi, "imperilled");
// replacedText = text.replace(/kilometer/gi, "kilometre");
// replacedText = text.replace(/labor/gi, "labour");
// replacedText = text.replace(/labeled/gi, "labelled");
// replacedText = text.replace(/labor/gi, "labour");
// replacedText = text.replace(/leveled/gi, "levelled");
// replacedText = text.replace(/license/gi, "licence");
// replacedText = text.replace(/liter/gi, "litre");
// replacedText = text.replace(/louver/gi, "louvre");
// replacedText = text.replace(/luster/gi, "lustre");
// replacedText = text.replace(/macaber/gi, "macabre");
// replacedText = text.replace(/maneuver/gi, "manoeuvre");
// replacedText = text.replace(/marvelous/gi, "marvellous");
// replacedText = text.replace(/matt/gi, "matte");
// replacedText = text.replace(/medalist/gi, "medallist");
// replacedText = text.replace(/meager/gi, "meagre");
// replacedText = text.replace(/meter/gi, "metre");
// replacedText = text.replace(/millimeter/gi, "millimetre");
// replacedText = text.replace(/miter/gi, "mitre");
// replacedText = text.replace(/modeled/gi, "modelled");
// replacedText = text.replace(/mold/gi, "mould");
// replacedText = text.replace(/molt/gi, "moult");
// replacedText = text.replace(/mustache/gi, "moustache");
// replacedText = text.replace(/neighbor/gi, "neighbour");
// replacedText = text.replace(/pean/gi, "paean");
// replacedText = text.replace(/palaeolothic/gi, "paleolothic");
// replacedText = text.replace(/paneling/gi, "panelling");
// replacedText = text.replace(/paneled/gi, "panelled");
// replacedText = text.replace(/parlor/gi, "parlour");
// replacedText = text.replace(/pummeled/gi, "pummelled");
// replacedText = text.replace(/pajamas/gi, "pyjamas");
// replacedText = text.replace(/odor/gi, "odour");
// replacedText = text.replace(/rancor/gi, "rancour");
// replacedText = text.replace(/racket/gi, "raquet");
// replacedText = text.replace(/reconnoiter/gi, "reconnoitre");
// replacedText = text.replace(/salable/gi, "saleable");
// replacedText = text.replace(/savor/gi, "savour");
// replacedText = text.replace(/scepter/gi, "sceptre");
// replacedText = text.replace(/smolder/gi, "smoulder");
// replacedText = text.replace(/somber/gi, "sombre");
// replacedText = text.replace(/sulfate/gi, "sulphate");
// replacedText = text.replace(/sulfur/gi, "sulphur");
// replacedText = text.replace(/ton/gi, "tonne");
// replacedText = text.replace(/totaled/gi, "totalled");
// replacedText = text.replace(/tranquilize/gi, "tranquillize");
// replacedText = text.replace(/tumor/gi, "tumour");
// replacedText = text.replace(/traveler/gi, "traveller");
// replacedText = text.replace(/tunneled/gi, "tunnelled");
// replacedText = text.replace(/theater/gi, "theatre");
// replacedText = text.replace(/vise/gi, "vice");
// replacedText = text.replace(/valor/gi, "valour");
// replacedText = text.replace(/vapor/gi, "vapour");
// replacedText = text.replace(/vigor/gi, "vigour");
// replacedText = text.replace(/willful/gi, "wilful");
// replacedText = text.replace(/worshiped/gi, "worshipped");
// replacedText = text.replace(/queuing/gi, "queueing");
