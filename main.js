import OpenAI from "openai";

const wordTextrea = document.getElementById('word-textrea')
const synonymsTextarea = document.getElementById('synonyms-textarea')
const getSynonymsBtn = document.getElementById('get-synonyms-btn')
const clearBtn = document.getElementById('clear-btn')

getSynonymsBtn.addEventListener('click', async () => {
  const wordText = wordTextrea.value

  const openai = new OpenAI({
    apiKey: import.meta.env.VITE_OPENAI_API_KEY,
    dangerouslyAllowBrowser: true
  });
  
  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [
      {
        "role": "system",
        "content": "You are a linguist ready to answer my questions."
      },
      {
        "role": "user",
        "content": "Give me 3 synonyms of this word: " + wordText
      }
    ],
    temperature: 1,
    max_tokens: 256,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
  });

  synonymsTextarea.value = response.choices[0].message.content
})