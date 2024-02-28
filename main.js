const wordTextrea = document.getElementById('word-textrea')
const synonymsTextarea = document.getElementById('synonyms-textarea')
const getSynonymsBtn = document.getElementById('get-synonyms-btn')
const clearBtn = document.getElementById('clear-btn')

getSynonymsBtn.addEventListener('click', async () => {
  const wordText = wordTextrea.value

  const apiUrl = 'https://my-synonym-generator-backend.onrender.com/api/synonym'
  const options = {
    method: 'POST',
    body: JSON.stringify({
      'wordText': wordText
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  }
  const response = await fetch(apiUrl, options)
  const result = await response.json()
  synonymsTextarea.value = result.synonymsText
})

clearBtn.addEventListener('click', () => {
  wordTextrea.value = ''
  synonymsTextarea.value = ''
})