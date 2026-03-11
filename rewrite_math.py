import re
import random

# Read the full HTML as string
with open('matematicas.html', 'r', encoding='utf-8') as f:
    html = f.read()

# Isolate the PROBLEMS array string safely
match = re.search(r'(const PROBLEMS = \s*\[)([\s\S]*?)(\];\s*/\* ──)', html)
if not match:
    print("Failed to find PROBLEMS block")
    exit(1)

prefix = match.group(1)
array_content = match.group(2)
suffix = match.group(3)

# Dictionary of friendly explanations
conceptMap = [
    {
        "pattern": r"Doc Stamps on Deed",
        "replace": "¡Impuesto de Escritura! Cobra siempre $0.70 por cada $100 redondos del precio total."
    },
    {
        "pattern": r"Doc Stamps on Note",
        "replace": "¡Impuesto sobre Pagaré! El estado te cobra $0.35 por cada $100 redondos del préstamo."
    },
    {
        "pattern": r"Intangible Tax",
        "replace": "¡Impuesto Intangible! Este es solo para la Hipoteca NUEVA. Cobra $0.002 directo, sin redondear."
    },
    {
        "pattern": r"Amortization",
        "replace": "Amortizar significa 'matar poco a poco'. Para calcular tu nuevo saldo, réstale al préstamo lo poquito que pagaste de Principal."
    },
    {
        "pattern": r"Proration",
        "replace": "Prorrateo es ser justos. Partimos la cuenta entre el que vende (hasta el día del cierre) y el que compra."
    },
    {
        "pattern": r"Comisión",
        "replace": "La Comisión es repartir el pastel. Primero el porcentaje total, y luego lo divides entre las oficinas y los agentes."
    },
    {
        "pattern": r"GRM",
        "replace": "¡Multiplicador GRM! Es súper fácil: Precio de Venta dividido entre la Renta Bruta."
    },
    {
        "pattern": r"Acreage",
        "replace": "¡Magia de Acres! Recuerda: 1 Acre = 43,560 pies cuadrados (4 señoras de 3 yendo por la Ruta 560)."
    }
]

intros = [
    "👋 ¡Sigue la lógica!: ",
    "💡 Piensa en esto: ",
    "🧩 Aquí está el secreto: ",
    "🔑 No te olvides: ",
    "🧠 Truco mental: "
]

def soften_instruction(match):
    full = match.group(0)
    inst = match.group(1)
    
    # Soften standard instructions structurally
    inst = inst.replace('Divide entre', 'Corta la cantidad en pedacitos de')
    inst = inst.replace('Redondea al siguiente $100', '¡Ojo! Redondea SIEMPRE para arriba al siguiente 100')
    inst = inst.replace('Multiplica por', 'Ahora multiplícalo por')
    inst = inst.replace('Calcula el interés anual', 'Primero, saca todo el interés de 1 año')
    inst = inst.replace('Divide entre 12', 'Ahora divídelo entre 12 para saber cuánto es el de este mes')
    inst = inst.replace('Calcula el pago de principal', 'Réstale el interés a tu pago mensual para ver cuánto abonaste a la deuda real')
    inst = inst.replace('Resta el principal pagado', 'Réstate lo que abonaste al préstamo original y ¡listo!')
    inst = inst.replace('Calcula los días del vendedor', 'Cuenta con los dedos: ¿Cuántos días le tocan al vendedor?')
    inst = inst.replace('Calcula la comisión total', 'Saca la súper tajada total (la comisión completa)')
    inst = inst.replace('Divide según acuerdos', 'Reparte la tajada según el trato (Divide)')
    
    return f"instruction:'{inst}'"

def soften_formula(match):
    full = match.group(0)
    form = match.group(1)
    
    replaced = False
    new_form = form
    for rule in conceptMap:
        if re.search(rule['pattern'], form, re.IGNORECASE):
            new_form = random.choice(intros) + rule['replace']
            replaced = True
            break
            
    if not replaced:
        # Just wrap the generic formula physically
        new_form = random.choice(intros) + form
        
    return f"formula:'{new_form}'"


# Apply Regex across all properties in the JSON text 
new_array_content = re.sub(r"instruction:'(.*?)'", soften_instruction, array_content)
new_array_content = re.sub(r'instruction:"(.*?)"', soften_instruction, new_array_content)
new_array_content = re.sub(r"formula:'(.*?)'", soften_formula, new_array_content)
new_array_content = re.sub(r'formula:"(.*?)"', soften_formula, new_array_content)

final_html = html[:match.start()] + prefix + new_array_content + suffix + html[match.end():]

with open('matematicas.html', 'w', encoding='utf-8') as f:
    f.write(final_html)

print("Successfully injected conversational formulas and instructions natively in Python.")
