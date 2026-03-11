import json

with open('flashcards_clean.json', 'r', encoding='utf-8') as f:
    cards = json.load(f)

print(f'Total cards: {len(cards)}')

# For planning purposes, let's just dump the text of the first 5 cards to see the "schematic" nature 
# the user is referring to.

for i, c in enumerate(cards[:5]):
    print(f'\n--- Card {i+1} ---')
    print(f'Q: {c["q"]}')
    print(f'A: {c["opts"][c["correct"]]}')
    print(f'Tip: {c["tip"]}')
