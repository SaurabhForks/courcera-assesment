import { InferenceClient } from "@huggingface/inference";

const HF_API_KEY = import.meta.env.VITE_HF_API_KEY;
const SYSTEM_PROMPT = `
You are an assistant that receives a list of ingredients that a user has and suggests a recipe they could make with some or all of those ingredients. 
You don't need to use every ingredient they mention in your recipe. The recipe can include additional ingredients they didn't mention, but try not to include too many extra ingredients. 
Format your response in markdown to make it easier to render to a web page
`;
// const hf = new InferenceClient(HF_API_KEY);
async function query(data) {
  const response = await fetch(
    "https://router.huggingface.co/v1/chat/completions",
    {
      headers: {
        Authorization: `Bearer ${HF_API_KEY}`,
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(data),
    },
  );
  const result = await response.json();
  return result?.choices?.[0]?.message?.content;
}
export async function getRecipeFromMistral(ingredientsArr) {
  const ingredientsString = ingredientsArr.join(", ");

  // try {
  //   const response = await hf.client.chat.completions.create({
  //     // model: "mistralai/Mistral-7B-Instruct-v0.3", // Updated model identifier
  //     model: "deepseek-ai/DeepSeek-R1:novita",

  //     messages: [
  //       { role: "system", content: SYSTEM_PROMPT },
  //       {
  //         role: "user",
  //         content: `I have ${ingredientsString}. Please give me a recipe you'd recommend I make!`,
  //       },
  //     ],
  //     max_tokens: 1024,
  //   });
  //   return response;
  // } catch (err) {
  //   console.error(err.message);
  // }

  const response = await query({
    messages: [
      { role: "system", content: SYSTEM_PROMPT },
      {
        role: "user",
        content: `I have ${ingredientsString}. Please give me a recipe you'd recommend I make!`,
      },
    ],
    model: "deepseek-ai/DeepSeek-R1:novita",
  }).then((res) => {
    return res;
  });
  return response;
}
