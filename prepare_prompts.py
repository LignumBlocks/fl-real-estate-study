import json
import os

with open('flashcards_clean.json', 'r', encoding='utf-8') as f:
    cards = json.load(f)

print(f"Total cards: {len(cards)}")

def generate_prompt(start, end):
    prompt = f"""
I need you to act as an expert real estate tutor who specializes in explaining complex concepts to 12-year-olds.
I am providing you with a list of Florida Real Estate Exam multiple-choice questions (flashcards) numbered {start} to {end}.
Currently, the explanations (the "tip" field) are very schematic, rigid, and sometimes too technical. 

Your task is to REWRITE JUST the "tip" for each of these questions.
Rules for the new tips:
1. Make the explanation feel human, warm, and highly intuitive. 
2. Explain the fundamental logic so a 12-year-old could understand the core concept.
3. Keep the factual accuracy 100% strictly aligned with Florida Real Estate Law.
4. If there's an acronym or trick, you can keep it, but explain it gently.
5. Keep it reasonably concise (2-4 sentences max), do not write essays. Use basic HTML like <strong> for emphasis if needed.

Here are the cards:
"""
    for i in range(start, min(end, len(cards))):
        c = cards[i]
        prompt += f"\n--- ID {i} ---\n"
        prompt += f"Question: {c['q']}\n"
        prompt += f"Correct Option: {c['opts'][c['correct']]}\n"
        prompt += f"Old Tip (Rewrite this): {c['tip']}\n"
        prompt += "-" * 20 + "\n"
    
    prompt += """
Please return YOUR RESPONSE EXACTLY in this JSON format so I can parse it back:
{
  "rewrites": [
    {"id": number, "newTip": "Your new 12-year-old friendly explanation in Spanish with <strong> tags."}
  ]
}
"""
    with open(f'prompt_{start}_{end}.txt', 'w', encoding='utf-8') as pf:
        pf.write(prompt)

# Generate prompts in batches of 25 to avoid context limits
for i in range(0, len(cards), 25):
    generate_prompt(i, i + 25)

print("Generated prompt files.")
