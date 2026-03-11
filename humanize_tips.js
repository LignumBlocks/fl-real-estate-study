const fs = require('fs');
let cards = JSON.parse(fs.readFileSync('flashcards_clean.json', 'utf8'));

// We will use a dictionary of conceptual text replacements to "demystify" the legal jargon
// and make it sound like an enthusiastic, caring teacher explaining it to a middle schooler.
const conceptMap = [
    {
        match: /COLIC:/i,
        replace: 'Para recordar los 5 elementos vitales usa el truquito <strong>COLIC</strong>: <br><br>👉 <strong>C</strong>ompetentes (personas mayores y cuerdas)<br>👉 <strong>O</strong>ferta y aceptación (ambos dicen "sí")<br>👉 <strong>L</strong>egalidad (nada de negocios ilegales)<br>👉 <strong>I</strong>n writing (por escrito)<br>👉 <strong>C</strong>onsideration (un pago de por medio).'
    },
    {
        match: /Statute of Frauds:/i,
        replace: 'La regla del <strong>Statute of Frauds</strong> o "Ley contra Fraudes" es súper simple: todo contrato de tierras <em>tiene que estar escrito</em>. Si solo lo hablaron, la ley no puede forzar a nadie a cumplirlo (es "unenforceable").'
    },
    {
        match: /Bilateral vs Unilateral/i,
        replace: 'Imagina que es como una promesa. <strong>Bilateral</strong> es cuando las dos personas se prometen cosas mutuamente. <strong>Unilateral</strong> es cuando solo <em>uno</em> hace la promesa (como dar una recompensa por un perro perdido, solo pagas si lo encuentran).'
    },
    {
        match: /PITI:/i,
        replace: '<strong>PITI</strong> es el acrónimo mágico para recordar todo lo que entra en un pago de hipoteca:<br>🏠 <strong>P</strong>rincipal (la deuda base)<br>📈 <strong>I</strong>nterés (lo que cobra el banco)<br>🏛️ <strong>T</strong>axes (impuestos)<br>🛡️ <strong>I</strong>nsurance (seguro).'
    },
    {
        match: /Title Theory vs Lien Theory/i,
        replace: 'En Florida somos un estado <strong>Lien Theory</strong>. Eso significa que si compras una casa, <em>tú</em> te quedas con el título (el papel de dueño). El banco solo le pone un "candado" (Lien) hasta que termines de pagar.'
    },
    {
        match: /FHA es .+ y VA es/i,
        replace: 'Recuerdo clave: El gobierno ayuda de dos formas. <br>🔹 <strong>FHA</strong> funciona como un seguro (asegura el préstamo si no puedes pagar).<br>🔹 <strong>VA</strong> funciona como una garantía (le garantizan al banco que los veteranos pagarán).'
    },
    {
         match: /General Warranty Deed/i,
         replace: 'La <strong>General Warranty Deed</strong> es la mejor escritura de todas. Es como un escudo enorme que protege al comprador contra CUALQUIER error del pasado, no solo de los problemas recientes.'
    },
    {
         match: /Quitclaim Deed/i,
         replace: 'La <strong>Quitclaim Deed</strong> es la peor escritura para protegerte, pero la más rápida. Es como decir: "No te prometo nada sobre esta casa, pero si hay algo a mi nombre, ahora es tuyo". Se usa mucho para limpiar errores rápidos en el título.'
    },
    {
         match: /FREC /i,
         replace: 'La <strong>FREC</strong> (Comisión de Bienes Raíces) es como el "director de la escuela" de los realtors. Ellos te pueden suspender, quitar la licencia o multar, pero <em>nunca</em> te pueden meter a la cárcel.'
    },
    {
         match: /15 días /i,
         replace: '¡Regla de los 15 días! El broker siempre tiene 15 días hábiles para avisarle a la Comisión (FREC) si las personas se están peleando por el dinero del depósito (Escrow).'
    },
    {
        match: /Ad Valorem/i,
        replace: '<strong>Ad Valorem</strong> es latín para "Según el valor". Simplemente significa que los impuestos que pagas dependen de qué tan cara o valiosa sea tu casa.'
    },
    {
        match: /First degree misdemeanor/i,
        replace: 'Un <strong>Delito Menor de 1er Grado</strong> es serio. El típico ejemplo es vender listas de alquileres falsas. ¡El castigo puede ser hasta 1 año de cárcel y $1,000 de multa!'
    },
    {
         match: /Steering/i,
         replace: '<strong>Steering</strong> (Guiar) es algo terrible e ilegal. Es cuando alguien lleva a ciertas personas solo a ciertos barrios basándose en su raza, color o país de origen, en lugar de mostrarles todas sus opciones.'
    },
    {
         match: /Blockbusting/i,
         replace: '<strong>Blockbusting</strong> es causar pánico. Es cuando le dices a los vecinos "¡Vende ya porque están llegando personas de cierta raza y tu casa perderá valor!". Es súper ilegal.'
    },
    {
         match: /Redlining/i,
         replace: '<strong>Redlining</strong> es cuando un banco agarra un mapa, dibuja una línea roja sobre un vecindario pobre o de minorías, y decide "aquí no le vamos a prestar dinero a nadie". Muy prohibido.'
    },
    {
         match: /Tenancy in Common/i,
         replace: '<strong>Tenancy in Common</strong>: Es como comprar un pastel con amigos. No tienen que tener el mismo porcentaje del pastel, y si alguien fallece, su parte no va a los demás dueños, ¡sino a sus propios herederos!'
    },
    {
         match: /Joint Tenancy/i,
         replace: '<strong>Joint Tenancy</strong>: Compras el pastel exactamente en partes iguales al mismo tiempo. Y tiene la regla mágica de "Supervivencia": si un dueño muere, su parte pasa automáticamente a los otros dueños vivos.'
    },
    {
         match: /Due on Sale/i,
         replace: 'La cláusula <strong>Due-on-Sale</strong> significa "Si vendes, me pagas". El banco exige que le devuelvas todo el dinero prestado el mismo día que decidas vender la casa.'
    },
    {
         match: /Defeasance/i,
         replace: 'La cláusula <strong>Defeasance</strong> es la cláusula "¡Te vencí!". Básicamente, cuando por fin pagas toda la hipoteca, esta regla obliga al banco a soltar tu casa y cancelar la deuda oficialmente.'
    },
    {
         match: /Appraisal/i,
         replace: 'Un <strong>Appraisal</strong> (Tasación) es cuando un experto calcula cuánto vale de verdad una casa. ¡A ellos se les paga una tarifa fija por su trabajo extra, nunca una comisión basada en el precio de la casa!'
    }
];

// Helper to wrap the final text in a friendly tone
function friendlyWrap(tip, newTipStr) {
    const intros = [
        "👋 ¡Aquí va el truco!: ",
        "💡 Piénsalo así: ",
        "🧩 Imagínalo de esta manera: ",
        "🔑 La clave maestra es: ",
        "🧠 ¡No te compliques!: "
    ];
    let intro = intros[Math.floor(Math.random() * intros.length)];
    return newTipStr ? intro + newTipStr : tip;
}

// Process all cards
for (let c of cards) {
    let replaced = false;
    let oldTip = c.tip;
    
    // Attempt standard expansions
    for (let rule of conceptMap) {
        if (rule.match.test(oldTip) || rule.match.test(c.q)) {
            // If it matched, we completely replace the tip with our humanized version
            // (Only doing 1 major replace per card to keep it focused)
            c.tip = friendlyWrap(oldTip, rule.replace);
            replaced = true;
            break; 
        }
    }
    
    // If we didn't have a specific map for it, we just soften the existing text
    if (!replaced) {
        let softTip = oldTip;
        // Strip bold tags for a moment
        softTip = softTip.replace(/<strong>/g, '').replace(/<\/strong>/g, '');
        // Make it sound conversational
        softTip = softTip.replace(/El broker/g, 'El jefe de la oficina (el Broker)');
        softTip = softTip.replace(/El sales associate/g, 'El agente o asociado');
        softTip = softTip.replace(/es responsable/g, 'tiene la responsabilidad súper importante de');
        softTip = softTip.replace(/Se calcula/g, 'Para no enredarte, esto se calcula');
        softTip = softTip.replace(/significa que/g, 'básicamente significa que');
        softTip = softTip.replace(/Unenforceable/g, 'Imposible de forzar en la corte (Unenforceable)');
        softTip = softTip.replace(/La ley requiere/g, '¡Mucho ojo! La ley estatal siempre exige');
        
        c.tip = friendlyWrap(oldTip, " " + softTip);
    }
}

// Write the output back into a format we can inject into HTML
const outString = "const ALL_CARDS = " + JSON.stringify(cards, null, 4) + ";\n";
fs.writeFileSync('cards_new.js', outString);
console.log("Successfully smoothed out and rewritten all 123 tips!");
