
import json

def update_clean():
    try:
        with open('math_raw.json', encoding='utf-8') as f:
            data_raw = json.load(f)
        with open('math_clean.json', encoding='utf-8') as f:
            data_clean = json.load(f)
            
        map_raw = {p.get('title'): p for p in data_raw if p.get('title')}
        
        count = 0
        titles_to_update = ['Deed (con redondeo)', 'Note (redondeo)', 'Note (Pagaré)']
        
        for p in data_clean:
            title = p.get('title')
            if title in titles_to_update and title in map_raw:
                p['formula'] = map_raw[title]['formula']
                p['steps'] = map_raw[title]['steps']
                count += 1
                
        with open('math_clean.json', 'w', encoding='utf-8') as f:
            json.dump(data_clean, f, indent=2, ensure_ascii=False)
            
        print(f"Successfully updated {count} problems in math_clean.json")
    except Exception as e:
        print(f"Error: {str(e)}")

if __name__ == '__main__':
    update_clean()
