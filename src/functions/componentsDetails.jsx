import { GoogleGenAI } from "@google/genai";


const ai = new GoogleGenAI({ apiKey: import.meta.env.VITE_GEMINI_API_KEY });

// --- Description Prompts ---
const prompts = {
    components: "Explain what are components in React in few words in plain text starting with 'Components are...'.",
    jsx: "Explain what is JSX in React in few words in plain text starting with 'JSX is...'.",
    props: "Explain what are props in React in few words in plain text starting with 'Props in React...'.",
    state: "Explain what is state in React in few words in plain text starting with 'State in React...'."
};

// --- Reusable Description Fetcher ---
async function getDescription(prompt) {
    try {
        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: prompt,
            config: {
                thinkingConfig: {
                    thinkingBudget: 0
                }
            }
        });
        return response.text || null;
    } catch (error) {
        console.error("AI generation failed:", error);
        return null;
    }
}

// --- Parallel Fetch All ---
export const componentDetails = await (async () => {
    const keys = Object.keys(prompts);
    const values = await Promise.all(keys.map(key => getDescription(prompts[key])));
    return Object.fromEntries(keys.map((key, i) => [key, values[i]]));
})();
