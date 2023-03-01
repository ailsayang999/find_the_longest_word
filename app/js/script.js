let submitBtn = document.querySelector('.submitBtn')

submitBtn.addEventListener('click', function(){
  let inputValue = document.querySelector('#inputSentence').value
  
  function findLongestWord (sentence) {
    // Step1: 將句子當中的單字找出來放到陣列當中
    let sentenceArr = sentence.split(' ')
    
    // unfixed bug: If sentence contains '.' ',' ':' '!'....

    // Step2: 找出長度最長的單字
  
      let longestWord =''
      for (let i=0; i < sentenceArr.length; i++){  
          if(sentenceArr[i].length > longestWord.length){
              longestWord = sentenceArr[i]
          }
      }
      return longestWord
  }


  let LongestWord = findLongestWord(inputValue)
  document.querySelector('.answerBox').innerText = LongestWord
})
