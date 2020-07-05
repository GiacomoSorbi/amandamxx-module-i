var Quotation = new Array();

Quotation[0] =
  "I hate to hear you talk about all women as if they were fine ladies instead of rational creatures. None of us want to be in calm waters all our lives. Jane Austen, Persuasion";
Quotation[1] =
  "The thing women have yet to learn is nobody gives you power. You just take it. Roseanne Barr";
Quotation[2] =
  "Educate a man and you educate an individual. Educate a woman and you educate a family. A. Cripps";
Quotation[3] =
  "Don't just stand for the success of other women - insist on it. Gail Blanke";
Quotation[4] =
  "Who knows what women can be when they are finally free to be themselves. Betty Friedan";

var Q = Quotation.length;
var whichQuotation = Math.round(Math.random() * (Q - 1));
function showQuotation() {
  document.write(Quotation[whichQuotation]);
}
showQuotation();

