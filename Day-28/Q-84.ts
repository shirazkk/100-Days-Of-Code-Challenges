//Define a function in which we replace word or sentence from string
function replaceInSentence(sentence: string) {
  //use replace method in which we replace
  return sentence.replace(/Salman Khan/g, "Shiraz Ali");
  // Uses a regular expression with the 'g' flag for a global replacement
}
//replace Salman Khan with Shiraz Ali
console.log(replaceInSentence("Hello my name is Salman Khan"));
