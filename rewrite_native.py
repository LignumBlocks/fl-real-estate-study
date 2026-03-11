import re
import random

# Read the full HTML as string
with open('flashcards.html', 'r', encoding='utf-8') as f:
    html = f.read()

# Isolate the ALL_CARDS array string safely
match = re.search(r'(const ALL_CARDS = \s*\[)([\s\S]*?)(\];\s*/\* ──)', html)
if not match:
    print("Failed to find ALL_CARDS block")
    exit(1)

prefix = match.group(1)
array_content = match.group(2)
suffix = match.group(3)

conceptMap = [
    {
        "pattern": r"COLIC",
        "replace": "Para recordar los 5 elementos vitales usa el truquito <strong>COLIC</strong>: <br><br>👉 <strong>C</strong>ompetentes (personas mayores y cuerdas)<br>👉 <strong>O</strong>ferta y aceptación (ambos dicen \\\"sí\\\")<br>👉 <strong>L</strong>egalidad (nada de negocios ilegales)<br>👉 <strong>I</strong>n writing (por escrito)<br>👉 <strong>C</strong>onsideration (un pago de por medio)."
    },
    {
        "pattern": r"Statute of Frauds",
        "replace": "La regla del <strong>Statute of Frauds</strong> o \\\"Ley contra Fraudes\\\" es súper simple: todo contrato de tierras <em>tiene que estar escrito</em>. Si solo lo hablaron, la ley no puede forzar a nadie a cumplirlo (es \\\"unenforceable\\\")."
    },
    {
        "pattern": r"Bilateral",
        "replace": "Imagina que es como una promesa. <strong>Bilateral</strong> es cuando las dos personas se prometen cosas mutuamente. <strong>Unilateral</strong> es cuando solo <em>uno</em> hace la promesa (como dar una recompensa por un perro perdido, solo pagas si lo encuentran)."
    },
    {
        "pattern": r"Unilateral",
        "replace": "Imagina que es como una promesa. <strong>Bilateral</strong> es cuando las dos personas se prometen cosas mutuamente. <strong>Unilateral</strong> es cuando solo <em>uno</em> hace la promesa (como dar una recompensa por un perro perdido, solo pagas si lo encuentran)."
    },
    {
        "pattern": r"PITI",
        "replace": "<strong>PITI</strong> es el acrónimo mágico para recordar todo lo que entra en un pago de hipoteca:<br>🏠 <strong>P</strong>rincipal (la deuda base)<br>📈 <strong>I</strong>nterés (lo que cobra el banco)<br>🏛️ <strong>T</strong>axes (impuestos)<br>🛡️ <strong>I</strong>nsurance (seguro)."
    },
    {
        "pattern": r"Lien Theory",
        "replace": "En Florida somos un estado <strong>Lien Theory</strong>. Eso significa que si compras una casa, <em>tú</em> te quedas con el título (el papel de dueño). El banco solo le pone un \"candado\" (Lien) hasta que termines de pagar."
    },
    {
        "pattern": r"FHA",
        "replace": "Recuerdo clave: El gobierno ayuda de dos formas. <br>🔹 <strong>FHA</strong> funciona como un seguro (asegura el préstamo si no puedes pagar).<br>🔹 <strong>VA</strong> funciona como una garantía (le garantizan al banco que los veteranos pagarán)."
    },
    {
         "pattern": r"General Warranty Deed",
         "replace": "La <strong>General Warranty Deed</strong> es la mejor escritura de todas. Es como un escudo enorme que protege al comprador contra CUALQUIER error del pasado, no solo de los problemas recientes."
    },
    {
         "pattern": r"Quitclaim Deed",
         "replace": "La <strong>Quitclaim Deed</strong> es la peor escritura para protegerte, pero la más rápida. Es como decir: \\\"No te prometo nada sobre esta casa, pero si hay algo a mi nombre, ahora es tuyo\\\". Se usa mucho para limpiar errores rápidos en el título."
    },
    {
         "pattern": r"FREC",
         "replace": "La <strong>FREC</strong> (Comisión de Bienes Raíces) es como el \\\"director de la escuela\\\" de los agentes. Ellos te pueden suspender, quitar la licencia o multar, pero <em>nunca</em> te pueden meter a la cárcel."
    },
    {
         "pattern": r"15 días",
         "replace": "¡Regla de los 15 días! El broker siempre tiene 15 días hábiles para avisarle a la Comisión (FREC) si las personas se están peleando por el dinero del depósito (Escrow)."
    },
    {
        "pattern": r"Ad Valorem",
        "replace": "<strong>Ad Valorem</strong> es latín para \\\"Según el valor\\\". Simplemente significa que los impuestos que pagas dependen de qué tan cara o valiosa sea tu casa."
    },
    {
        "pattern": r"First degree misdemeanor",
        "replace": "Un <strong>Delito Menor de 1er Grado</strong> es serio. El típico ejemplo es vender listas de alquileres falsas. ¡El castigo puede ser hasta 1 año de cárcel y $1,000 de multa!"
    },
    {
         "pattern": r"Steering",
         "replace": "<strong>Steering</strong> (Guiar) es algo terrible e ilegal. Es cuando alguien lleva a ciertas personas solo a ciertos barrios basándose en su raza, color o país de origen, en lugar de mostrarles todas sus opciones."
    },
    {
         "pattern": r"Blockbusting",
         "replace": "<strong>Blockbusting</strong> es causar pánico. Es cuando le dices a los vecinos \\\"¡Vende ya porque están llegando personas de cierta raza y tu casa perderá valor!\\\". Es súper ilegal."
    },
    {
         "pattern": r"Redlining",
         "replace": "<strong>Redlining</strong> es cuando un banco agarra un mapa, dibuja una línea roja sobre un vecindario pobre o de minorías, y decide \\\"aquí no le vamos a prestar dinero a nadie\\\". Muy prohibido."
    },
    {
         "pattern": r"Tenancy in Common",
         "replace": "<strong>Tenancy in Common</strong>: Es como comprar un pastel con amigos. No tienen que tener el mismo porcentaje del pastel, y si alguien fallece, su parte no va a los demás dueños, ¡sino a sus propios herederos!"
    },
    {
         "pattern": r"Joint Tenancy",
         "replace": "<strong>Joint Tenancy</strong>: Compras el pastel exactamente en partes iguales al mismo tiempo. Y tiene la regla mágica de \\\"Supervivencia\\\": si un dueño muere, su parte pasa automáticamente a los otros dueños vivos."
    },
    {
         "pattern": r"Due on Sale",
         "replace": "La cláusula <strong>Due-on-Sale</strong> significa \\\"Si vendes, me pagas\\\". El banco exige que le devuelvas todo el dinero prestado el mismo día que decidas vender la casa."
    },
    {
         "pattern": r"Defeasance",
         "replace": "La cláusula <strong>Defeasance</strong> es la cláusula \\\"¡Te vencí!\\\". Básicamente, cuando por fin pagas toda la hipoteca, esta regla obliga al banco a soltar tu casa y cancelar la deuda oficialmente."
    },
    {
         "pattern": r"Appraisal",
         "replace": "Un <strong>Appraisal</strong> (Tasación) es cuando un experto calcula cuánto vale de verdad una casa. ¡A ellos se les paga una tarifa fija por su trabajo extra, nunca una comisión basada en el precio de la casa!"
    }
]

intros = [
    "👋 ¡Aquí va el truco!: ",
    "💡 Piénsalo así: ",
    "🧩 Imagínalo de esta manera: ",
    "🔑 La clave maestra es: ",
    "🧠 ¡No te compliques!: "
]

def soften_text(text):
    text = re.sub(r'<strong>(.*?)</strong>', r'\1', text)
    text = text.replace('El broker', 'El jefe de la oficina (el Broker)')
    text = text.replace('El sales associate', 'El agente o asociado')
    text = text.replace('es responsable', 'tiene la responsabilidad súper importante de')
    text = text.replace('Se calcula', 'Para no enredarte, esto se calcula')
    text = text.replace('Significa que', 'Básicamente significa que')
    text = text.replace('significa que', 'básicamente significa que')
    text = text.replace('Unenforceable', 'Imposible de forzar en la corte (Unenforceable)')
    text = text.replace('La ley requiere', '¡Mucho ojo! La ley estatal siempre exige')
    return text

# The approach is to find all "tip: \"...\"" inside the array_content
def replace_tip(match):
    full_string = match.group(0)
    tip_content = match.group(1)
    
    replaced = False
    new_tip = tip_content
    for rule in conceptMap:
        if re.search(rule['pattern'], tip_content, re.IGNORECASE):
            new_tip = random.choice(intros) + rule['replace']
            replaced = True
            break
            
    if not replaced:
        new_tip = random.choice(intros) + soften_text(tip_content)
        
    return f'tip:"{new_tip}"'

new_array_content = re.sub(r'tip:"([^"]+)"', replace_tip, array_content)

final_html = html[:match.start()] + prefix + new_array_content + suffix + html[match.end():]

with open('flashcards.html', 'w', encoding='utf-8') as f:
    f.write(final_html)

print("Successfully humanized inline text natively in Python.")
