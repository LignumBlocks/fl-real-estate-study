const ALL_CARDS = [
    {
        "cat": "Contratos",
        "q": "Para que un contrato de bienes raíces sea válido en Florida, debe contener ciertos elementos esenciales. ¿Cuál de las siguientes opciones lista CORRECTAMENTE los 5 elementos? (COLIC)",
        "opts": [
            "Partes competentes, Oferta y aceptación, Legalidad, Por escrito y firmado, Contraprestación",
            "Partes competentes, Consentimiento mutuo, Legalidad, Earnest money, Entrega",
            "Acuerdo, Capacidad, Legalidad, Forma escrita, Notarización",
            "Oferta, Aceptación, Contraprestación, Legalidad, Registro público"
        ],
        "correct": 0,
        "tip": "🧠 ¡No te compliques!: Para recordar los 5 elementos vitales usa el truquito <strong>COLIC</strong>: <br><br>👉 <strong>C</strong>ompetentes (personas mayores y cuerdas)<br>👉 <strong>O</strong>ferta y aceptación (ambos dicen \"sí\")<br>👉 <strong>L</strong>egalidad (nada de negocios ilegales)<br>👉 <strong>I</strong>n writing (por escrito)<br>👉 <strong>C</strong>onsideration (un pago de por medio)."
    },
    {
        "cat": "Contratos",
        "q": "Un contrato de bienes raíces fue acordado verbalmente entre comprador y vendedor. Según el Statute of Frauds, este contrato es:",
        "opts": [
            "Unenforceable (inejecutable)",
            "Void (nulo)",
            "Voidable (anulable)",
            "Completamente válido y ejecutable"
        ],
        "correct": 0,
        "tip": "🧠 ¡No te compliques!:  El Statute of Frauds exige que los contratos de bienes raíces estén por escrito y firmados. Sin escritura = inejecutable, no necesariamente nulo."
    },
    {
        "cat": "Contratos",
        "q": "Un comprador hace una oferta sobre una propiedad. ¿Cuál de las siguientes acciones NO terminaría la oferta? (WILD CARD)",
        "opts": [
            "El comprador obtiene financiamiento aprobado",
            "El vendedor hace una contraoferta",
            "Muere el comprador antes de la aceptación",
            "Expira el plazo de la oferta"
        ],
        "correct": 0,
        "tip": "💡 Piénsalo así:  WILD CARD: Withdrawal, Insanity, Lapse of time, Death, Counteroffer, Acceptance, Rejection, Destruction. Obtener financiamiento no termina la oferta."
    },
    {
        "cat": "Contratos",
        "q": "Un menor de edad firma un contrato de compraventa de bienes raíces. Este contrato es MEJOR descrito como:",
        "opts": [
            "Voidable — el menor puede anularlo",
            "Void — no tiene efecto legal",
            "Unenforceable — no se puede ejecutar en corte",
            "Valid — los menores pueden contratar con permiso parental"
        ],
        "correct": 0,
        "tip": "🔑 La clave maestra es:  Void: sin efecto legal (ilegal). Voidable: válido hasta que la parte afectada lo anule (ej: menor). Imposible de forzar en la corte (Unenforceable): válido pero no ejecutable (ej: no escrito)."
    },
    {
        "cat": "Contratos",
        "q": "En un contrato de bienes raíces, ¿qué constituye 'consideration' (contraprestación)?",
        "opts": [
            "Algo de valor intercambiado: dinero, promesa, o incluso 'love and affection'",
            "Exclusivamente dinero en efectivo o cheque certificado",
            "Solo el depósito de buena fe (earnest money)",
            "La inspección de la propiedad por ambas partes"
        ],
        "correct": 0,
        "tip": "🔑 La clave maestra es:  Consideration = algo de valor intercambiado. Puede ser dinero, una promesa, o incluso 'love and affection'. Sin consideración, no hay contrato válido."
    },
    {
        "cat": "Contratos",
        "q": "Un contrato incluye la cláusula 'Time is of the Essence'. El comprador no cierra en la fecha acordada. ¿Cuál es la consecuencia?",
        "opts": [
            "El comprador está en incumplimiento (breach) del contrato",
            "El contrato se extiende automáticamente 30 días",
            "El vendedor debe dar un período de gracia razonable",
            "El contrato se vuelve void automáticamente"
        ],
        "correct": 0,
        "tip": "🧠 ¡No te compliques!:  'Time is of the Essence' = las fechas son estrictamente obligatorias. No cumplir = incumplimiento (breach)."
    },
    {
        "cat": "Contratos",
        "q": "Un contrato donde AMBAS partes hacen promesas (ej: compraventa) se conoce como:",
        "opts": [
            "Contrato bilateral",
            "Contrato unilateral",
            "Contrato ejecutado",
            "Contrato implícito"
        ],
        "correct": 0,
        "tip": "🧩 Imagínalo de esta manera:  Bilateral: ambas partes prometen (compraventa). Unilateral: solo una promete, la otra actúa (ej: opción de compra)."
    },
    {
        "cat": "Contratos",
        "q": "Si un vendedor incumple un contrato de compraventa, ¿cuál de los siguientes NO es un remedio disponible para el comprador?",
        "opts": [
            "Arrestar al vendedor por fraude civil",
            "Specific Performance (cumplimiento forzoso)",
            "Rescission (rescisión del contrato)",
            "Demandar por daños y perjuicios"
        ],
        "correct": 0,
        "tip": "🧠 ¡No te compliques!:  Remedios del comprador: Specific Performance, Rescission, Liquidated Damages, Suit for damages. El arresto no es un remedio civil."
    },
    {
        "cat": "Corretaje",
        "q": "Un corredor que recibe una propiedad de un vendedor y le dice que él acepta $80,000, sin importar el precio por el cual se venda. ¿Qué tipo de contrato deben hacer antes de vender la propiedad?",
        "opts": [
            "contrato de precio neto (net listing)",
            "contrato de listado de agencia exclusiva (exclusive agency listing)",
            "contrato de derecho exclusivo de venta (exclusive right of sale listing)",
            "contrato de listado abierto (open listing)"
        ],
        "correct": 0,
        "tip": "🧠 ¡No te compliques!:  Net Listing: Es legal, pero crea un conflicto de intereses en FL y debe acompañarse del desglose del valor de la comisión. Ocurre cuando el vendedor establece una meta de ingreso garantizado y el bróker retiene lo excedente."
    },
    {
        "cat": "Corretaje",
        "q": "Un Single Agent le debe a su cliente ciertos deberes fiduciarios conocidos como COLD-AC. ¿Cuál de los siguientes NO es uno de esos deberes?",
        "opts": [
            "Negociación (Negotiation)",
            "Confidencialidad (Confidentiality)",
            "Obediencia (Obedience)",
            "Lealtad (Loyalty)"
        ],
        "correct": 0,
        "tip": "🧠 ¡No te compliques!:  COLD-AC: Confidentiality, Obedience, Loyalty, Disclosure, Accounting, Competence. Negotiation NO está incluido."
    },
    {
        "cat": "Corretaje",
        "q": "Bajo una relación de 'No Brokerage Relationship', ¿cuántos deberes tiene el licensee hacia el cliente?",
        "opts": [
            "3: Honestidad, Divulgar hechos materiales, Contabilidad de fondos",
            "6: Los mismos que un Single Agent",
            "2: Honestidad y Confidencialidad",
            "4: Honestidad, Lealtad, Divulgación, Obediencia"
        ],
        "correct": 0,
        "tip": "👋 ¡Aquí va el truco!:  Solo 3 deberes: Deal honestly and fairly, Disclose known material facts, Account for funds. NO hay confidencialidad ni lealtad."
    },
    {
        "cat": "Corretaje",
        "q": "En Florida, la Dual Agency (representar a ambas partes como fiduciario) es:",
        "opts": [
            "Prohibida por ley",
            "Permitida con consentimiento escrito",
            "Permitida solo en transacciones comerciales",
            "La relación por defecto"
        ],
        "correct": 0,
        "tip": "🧩 Imagínalo de esta manera:  La Dual Agency está prohibida en Florida. No confundir con Transaction Broker, que es legal."
    },
    {
        "cat": "Corretaje",
        "q": "¿Puede un Transaction Broker cambiar a Single Agent durante una transacción?",
        "opts": [
            "Sí, pero requiere consentimiento por escrito",
            "No, está prohibido por ley",
            "Sí, automáticamente si el cliente lo solicita verbalmente",
            "Solo con aprobación de la FREC"
        ],
        "correct": 0,
        "tip": "🧠 ¡No te compliques!:  Sí, es posible, pero requiere consentimiento por escrito de la parte."
    },
    {
        "cat": "Corretaje",
        "q": "¿Por cuánto tiempo debe un broker retener documentos de transacciones?",
        "opts": [
            "5 años",
            "3 años",
            "7 años",
            "10 años"
        ],
        "correct": 0,
        "tip": "🧩 Imagínalo de esta manera:  5 años desde la fecha del último acto o del litigio, lo que sea más largo."
    },
    {
        "cat": "Licencia",
        "q": "Para obtener la licencia de Sales Associate en Florida, un candidato debe cumplir TODOS los siguientes requisitos EXCEPTO:",
        "opts": [
            "Tener un título universitario",
            "Tener 18 años de edad",
            "Completar el curso de 63 horas",
            "Pasar el examen estatal"
        ],
        "correct": 0,
        "tip": "👋 ¡Aquí va el truco!:  Requisitos: 18 años, SSN, 63 horas de curso, aprobar examen, fingerprints. NO se requiere título universitario."
    },
    {
        "cat": "Licencia",
        "q": "¿Cuántas horas de educación continua se requieren para renovar una licencia de bienes raíces en Florida cada 2 años?",
        "opts": [
            "14 horas: 3h Core Law + 3h Ethics + 8h specialty",
            "12 horas, incluyendo 4 de Ethics",
            "20 horas, incluyendo 5 de Core Law",
            "8 horas, todas de especialidad"
        ],
        "correct": 0,
        "tip": "🔑 La clave maestra es:  14 horas cada 2 años: 3h Core Law + 3h Ethics and Business Practices (requisito ESTATAL, Regla 61J2-3.009) + 8h specialty. La ética ES obligatoria por el estado de FL, no solo por la NAR."
    },
    {
        "cat": "Licencia",
        "q": "La Florida Real Estate Commission (FREC) está compuesta por cuántos miembros, y cuántos deben ser brokers con experiencia?",
        "opts": [
            "7 miembros: 4 brokers con 5+ años, 1 licensee con 2+ años, 2 consumidores",
            "5 miembros: 3 brokers, 2 consumidores",
            "9 miembros: 5 brokers, 2 sales associates, 2 consumidores",
            "7 miembros: 5 brokers, 2 consumidores"
        ],
        "correct": 0,
        "tip": "💡 Piénsalo así:  FREC: 7 miembros — 4 brokers (5+ años), 1 broker o asociado (2+ años), 2 consumidores (sin licencia)."
    },
    {
        "cat": "Licencia",
        "q": "Una persona que ejerce como agente de bienes raíces sin licencia en Florida comete:",
        "opts": [
            "Un felony de tercer grado, hasta $5,000 de multa y 5 años de prisión",
            "Un misdemeanor de primer grado, hasta $1,000 de multa",
            "Una violación administrativa con multa de $500",
            "Un felony de segundo grado, hasta $10,000 de multa"
        ],
        "correct": 0,
        "tip": "👋 ¡Aquí va el truco!:  Ejercer sin licencia = Felony de tercer grado: hasta $5,000 multa y 5 años prisión."
    },
    {
        "cat": "Licencia",
        "q": "Un licensee no renueva su licencia a tiempo y queda como 'Involuntarily Inactive'. ¿Cuánto tiempo tiene para reactivarla?",
        "opts": [
            "2 años, después se vuelve null and void",
            "1 año, después debe retomar el curso",
            "6 meses, después debe re-examinar",
            "3 años, después se cancela permanentemente"
        ],
        "correct": 0,
        "tip": "🧩 Imagínalo de esta manera:  2 años para reactivar. Después → null and void (debe empezar de cero)."
    },
    {
        "cat": "Propiedad",
        "q": "¿Cuál de las siguientes NO es una forma de adquirir título de propiedad según WADED?",
        "opts": [
            "Compra directa (Purchase)",
            "Will (Testamento)",
            "Adverse Possession",
            "Deed (Escritura)"
        ],
        "correct": 0,
        "tip": "👋 ¡Aquí va el truco!:  WADED: Will, Adverse Possession (7 años + impuestos), Deed, Escheat, Descent. 'Purchase' no es una de las 5 formas listadas en WADED."
    },
    {
        "cat": "Propiedad",
        "q": "El gobierno puede tomar propiedad privada para uso público pagando compensación justa. Este poder se llama:",
        "opts": [
            "Eminent Domain",
            "Police Power",
            "Escheat",
            "Taxation"
        ],
        "correct": 0,
        "tip": "🔑 La clave maestra es:  PETE: Police Power (zoning), Eminent Domain (expropiación con compensación), Taxation, Escheat."
    },
    {
        "cat": "Propiedad",
        "q": "¿Cuál de las siguientes es una restricción PRIVADA sobre la propiedad? (DELL)",
        "opts": [
            "Easements (servidumbres)",
            "Eminent Domain",
            "Zoning",
            "Taxation"
        ],
        "correct": 0,
        "tip": "🧠 ¡No te compliques!:  Restricciones privadas (DELL): Deed restrictions, Easements, Leases, Liens. Las otras son restricciones gubernamentales (PETE)."
    },
    {
        "cat": "Propiedad",
        "q": "La teoría del gravamen establece que:",
        "opts": [
            "El prestatario posee el título y la propiedad y en el caso de que el deudor no pague las cuotas, el prestamista puede hacer un juicio, acelerar los pagos y vender la propiedad en una subasta.",
            "Los intereses de un prestamista son mayores que los derechos de posesión del prestatario.",
            "El prestamista tiene el título.",
            "El prestamista tiene los derechos de posesión."
        ],
        "correct": 0,
        "tip": "🔑 La clave maestra es:  Lien Theory (Teoría del gravamen): El comprador TIENE el título de la propiedad, el banco interpone un 'gravamen' contra la propiedad hasta pagar la deuda."
    },
    {
        "cat": "Propiedad",
        "q": "La Homestead Exemption en Florida exime un total de $50,000 del valor tasado. ¿Cuál es la característica ESPECIAL de los segundos $25,000?",
        "opts": [
            "No aplican a impuestos del school board",
            "No aplican a impuestos municipales",
            "Solo aplican a propiedades comerciales",
            "Requieren aprobación del condado"
        ],
        "correct": 0,
        "tip": "🧠 ¡No te compliques!:  Primeros $25K aplican a todos los impuestos. Segundos $25K NO aplican a school board taxes. Protege contra ejecución forzosa (excepto impuestos, hipoteca, mechanic's liens)."
    },
    {
        "cat": "Propiedad",
        "q": "¿Cuál tipo de escritura ofrece la MAYOR protección al comprador?",
        "opts": [
            "General Warranty Deed",
            "Special Warranty Deed",
            "Quitclaim Deed",
            "Bargain and Sale Deed"
        ],
        "correct": 0,
        "tip": "👋 ¡Aquí va el truco!: La <strong>General Warranty Deed</strong> es la mejor escritura de todas. Es como un escudo enorme que protege al comprador contra CUALQUIER error del pasado, no solo de los problemas recientes."
    },
    {
        "cat": "Propiedad",
        "q": "La co-propiedad exclusiva para parejas casadas que incluye derecho de supervivencia se llama:",
        "opts": [
            "Tenancy by the Entireties",
            "Joint Tenancy",
            "Tenancy in Common",
            "Community Property"
        ],
        "correct": 0,
        "tip": "🔑 La clave maestra es:  Tenancy by the Entireties: solo parejas casadas. Derecho de supervivencia. Ninguno puede vender sin el otro."
    },
    {
        "cat": "Divulgaciones",
        "q": "Según el caso Johnson vs. Davis, ¿qué obligación tiene el vendedor de una propiedad residencial?",
        "opts": [
            "Revelar defectos materiales conocidos no fácilmente observables",
            "Revelar todos los defectos, incluso los visibles",
            "Proporcionar una garantía de 1 año sobre la propiedad",
            "Obtener una inspección profesional antes de la venta"
        ],
        "correct": 0,
        "tip": "🔑 La clave maestra es:  Johnson vs. Davis: el vendedor debe revelar defectos materiales conocidos no fácilmente observables. Aplica a propiedades residenciales."
    },
    {
        "cat": "Divulgaciones",
        "q": "La divulgación de Lead-Based Paint es obligatoria para viviendas construidas antes de:",
        "opts": [
            "1978",
            "1985",
            "1970",
            "1992"
        ],
        "correct": 0,
        "tip": "👋 ¡Aquí va el truco!:  Viviendas construidas antes de 1978. Se debe: entregar panfleto, divulgar conocimiento, dar 10 días para inspección."
    },
    {
        "cat": "Divulgaciones",
        "q": "¿En qué tipo de transacciones es obligatoria la divulgación de Radon Gas en Florida?",
        "opts": [
            "En TODOS los contratos de venta de bienes raíces",
            "Solo en propiedades con sótano",
            "Solo en propiedades construidas antes de 1990",
            "Solo si se detecta radon en la inspección"
        ],
        "correct": 0,
        "tip": "🧩 Imagínalo de esta manera:  La divulgación de Radon es obligatoria en TODOS los contratos de venta en Florida. Informa sobre el gas y pruebas disponibles."
    },
    {
        "cat": "Divulgaciones",
        "q": "El Fair Housing Act protege 7 clases. ¿Cuál de las siguientes NO es una clase protegida federal?",
        "opts": [
            "Estado civil (Marital Status)",
            "Raza",
            "Discapacidad (Handicap)",
            "Estado Familiar (Familial Status)"
        ],
        "correct": 0,
        "tip": "🧩 Imagínalo de esta manera:  7 clases federales: Raza, Color, Religión, Sexo, Origen Nacional, Discapacidad, Estado Familiar. Estado civil NO es clase federal (puede serlo a nivel estatal)."
    },
    {
        "cat": "Divulgaciones",
        "q": "La exemption 'Mrs. Murphy' del Fair Housing Act aplica cuando:",
        "opts": [
            "El propietario vive en la propiedad de 4 unidades o menos, sin usar broker ni publicidad discriminatoria",
            "Cualquier propietario que no quiera alquilar a familias",
            "La propiedad tiene más de 50 años",
            "El propietario es una persona de la tercera edad"
        ],
        "correct": 0,
        "tip": "🔑 La clave maestra es:  Mrs. Murphy: propietario en propiedad ≤4 unidades. NO aplica si usa broker o publicidad discriminatoria."
    },
    {
        "cat": "Sanciones",
        "q": "Un broker no mantiene el letrero requerido en su oficina. ¿Cuál es la multa según la regla 61J2?",
        "opts": [
            "$500",
            "$250",
            "$1,000",
            "$5,000"
        ],
        "correct": 0,
        "tip": "🧠 ¡No te compliques!:  Multa por no tener letrero de oficina: $500."
    },
    {
        "cat": "Sanciones",
        "q": "Un licensee publica un anuncio que no incluye el nombre del broker. ¿Cuál es la sanción?",
        "opts": [
            "$250 a $1,000",
            "$100 a $500",
            "$500 a $5,000",
            "Solo una advertencia verbal"
        ],
        "correct": 0,
        "tip": "👋 ¡Aquí va el truco!:  Publicidad falsa o sin nombre del broker: $250 a $1,000. Toda publicidad debe incluir nombre del broker."
    },
    {
        "cat": "Sanciones",
        "q": "¿Cuál es el plazo máximo para depositar fondos de escrow después de la aceptación del contrato?",
        "opts": [
            "Antes del final del 3er día hábil",
            "Antes del final del 5to día hábil",
            "Dentro de 24 horas",
            "Dentro de 10 días calendario"
        ],
        "correct": 0,
        "tip": "🔑 La clave maestra es:  Depósito de escrow: antes del final del 3er día hábil después de aceptación. Sanción: $250-$1,000 + posible suspensión."
    },
    {
        "cat": "Sanciones",
        "q": "Si un licensee obtiene su licencia por medios fraudulentos, ¿cuál es la sanción?",
        "opts": [
            "$250 a $1,000 + 30 días de suspensión",
            "$5,000 + revocación inmediata",
            "$100 + curso de ética obligatorio",
            "Solo revocación sin multa"
        ],
        "correct": 0,
        "tip": "🧠 ¡No te compliques!:  Licencia por fraude: $250 a $1,000 + 30 días suspensión. Puede resultar en revocación."
    },
    {
        "cat": "Sanciones",
        "q": "La FHA:",
        "opts": [
            "Asegura los préstamos, pero no los garantiza.",
            "Garantiza los préstamos, pero no los asegura.",
            "Los préstamos son concedidos por el HUD.",
            "Tiene un programa (sección 234) para viviendas unifamiliares."
        ],
        "correct": 0,
        "tip": "👋 ¡Aquí va el truco!:  Federal Housing Administration (FHA): Agencia de gobierno que ASEGURA los préstamos en caso de default (impago), cobrando un MIP al deudor. VA garantiza y Convencional no tiene respaldo federal."
    },
    {
        "cat": "Financiamiento",
        "q": "¿Cuál es la diferencia principal entre un Promissory Note y una Mortgage?",
        "opts": [
            "El Note es la promesa de pago; la Mortgage es la garantía sobre la propiedad",
            "El Note se registra; la Mortgage no",
            "Ambos son lo mismo con nombres diferentes",
            "La Mortgage es la promesa de pago; el Note es la garantía"
        ],
        "correct": 0,
        "tip": "🧩 Imagínalo de esta manera:  Promissory Note = promesa personal de pago (evidencia de deuda). Mortgage = garantía sobre la propiedad."
    },
    {
        "cat": "Financiamiento",
        "q": "La cláusula Due-on-Sale en una hipoteca permite al prestamista:",
        "opts": [
            "Exigir pago total si la propiedad se vende sin autorización",
            "Aumentar la tasa de interés anualmente",
            "Ejecutar la hipoteca sin orden judicial",
            "Cobrar penalidades por pagos anticipados"
        ],
        "correct": 0,
        "tip": "🔑 La clave maestra es:  Due-on-Sale: el prestamista puede exigir pago total si la propiedad se vende/transfiere sin autorización."
    },
    {
        "cat": "Financiamiento",
        "q": "¿Cuál tipo de préstamo permite un down payment de 3.5% y requiere Mortgage Insurance Premium (MIP)?",
        "opts": [
            "FHA",
            "VA",
            "Convencional",
            "USDA"
        ],
        "correct": 0,
        "tip": "🧠 ¡No te compliques!:  Convencional: sin gobierno, PMI si LTV>80%. FHA: gobierno, 3.5% down, MIP. VA: veteranos, 0% down posible."
    },
    {
        "cat": "Financiamiento",
        "q": "Al calcular el LTV (Loan-to-Value), el prestamista usa como 'valor' de la propiedad:",
        "opts": [
            "El MENOR entre el precio de venta y el valor de tasación",
            "El MAYOR entre el precio de venta y el valor de tasación",
            "Siempre el precio de venta",
            "Siempre el valor de tasación"
        ],
        "correct": 0,
        "tip": "🔑 La clave maestra es:  LTV = Préstamo ÷ Valor × 100. Valor = el MENOR entre precio y tasación. Si LTV > 80% → PMI requerido (convencional)."
    },
    {
        "cat": "Financiamiento",
        "q": "RESPA requiere que el prestamista entregue el Loan Estimate al prestatario dentro de:",
        "opts": [
            "3 días hábiles después de la solicitud",
            "5 días hábiles después de la solicitud",
            "Al momento del cierre",
            "7 días antes del cierre"
        ],
        "correct": 0,
        "tip": "🔑 La clave maestra es:  RESPA: Loan Estimate dentro de 3 días de la solicitud. Closing Disclosure al menos 3 días antes del cierre."
    },
    {
        "cat": "Tasación",
        "q": "¿Cuál enfoque de tasación es MÁS apropiado para valorar propiedades de inversión que generan renta?",
        "opts": [
            "Income Approach (enfoque de ingresos)",
            "Sales Comparison Approach",
            "Cost Approach",
            "Market Data Approach"
        ],
        "correct": 0,
        "tip": "🧩 Imagínalo de esta manera:  3 enfoques: Sales Comparison (residencias), Cost Approach (propiedades únicas), Income Approach (inversiones — usa IRV)."
    },
    {
        "cat": "Tasación",
        "q": "Una propiedad de inversión genera un NOI de $48,000 y el cap rate es 6%. Usando la fórmula IRV, el valor estimado es:",
        "opts": [
            "$800,000",
            "$288,000",
            "$480,000",
            "$2,880"
        ],
        "correct": 0,
        "tip": "💡 Piénsalo así:  IRV: V = I ÷ R. $48,000 ÷ 0.06 = $800,000."
    },
    {
        "cat": "Tasación",
        "q": "En el enfoque de Sales Comparison, si una propiedad comparable tiene piscina y el sujeto NO tiene piscina, el tasador debe:",
        "opts": [
            "RESTAR el valor de la piscina del precio del comparable",
            "SUMAR el valor de la piscina al precio del comparable",
            "Descartar ese comparable",
            "No hacer ajuste alguno"
        ],
        "correct": 0,
        "tip": "🔑 La clave maestra es:  CBS: Comparable Superior → Restar. Comparable Inferior → Sumar. Siempre se ajusta el comparable."
    },
    {
        "cat": "Tasación",
        "q": "Un inversionista compra una propiedad por $480,000. La renta bruta anual es $40,000. ¿Cuál es el GIM?",
        "opts": [
            "12",
            "8",
            "48",
            "0.083"
        ],
        "correct": 0,
        "tip": "👋 ¡Aquí va el truco!:  GIM = Precio ÷ Renta Bruta Anual. $480,000 ÷ $40,000 = 12."
    },
    {
        "cat": "Cierre",
        "q": "En Florida (excepto Miami-Dade), ¿cuál es la tasa de Documentary Stamps on the DEED?",
        "opts": [
            "$0.70 por cada $100 del precio (redondeando hacia arriba)",
            "$0.35 por cada $100 del precio",
            "$0.60 por cada $100 del precio",
            "$1.00 por cada $100 del precio"
        ],
        "correct": 0,
        "tip": "💡 Piénsalo así:  Deed: $0.70/$100 del precio (redondear ↑). Miami-Dade: $0.60/$100. Note: $0.35/$100. Intangible: $0.002 × préstamo nuevo."
    },
    {
        "cat": "Cierre",
        "q": "Para calcular prorrateos al cierre, ¿cuál es el método correcto?",
        "opts": [
            "Costo anual ÷ 365 = tasa diaria × días del vendedor",
            "Costo anual ÷ 12 = tasa mensual × meses del comprador",
            "Costo anual × porcentaje de ocupación del vendedor",
            "Costo anual ÷ 360 = tasa diaria × días restantes"
        ],
        "correct": 0,
        "tip": "💡 Piénsalo así:  Prorrateo: 1) Costo anual. 2) ÷ 365 = tasa diaria. 3) × días del vendedor. El vendedor paga los días que usó."
    },
    {
        "cat": "Cierre",
        "q": "En una transacción típica en Florida, ¿quién paga los Documentary Stamps on the DEED?",
        "opts": [
            "El vendedor",
            "El comprador",
            "Se divide 50/50",
            "El prestamista"
        ],
        "correct": 0,
        "tip": "👋 ¡Aquí va el truco!:  Vendedor: Doc Stamps on Deed. Comprador: Doc Stamps on Note + Intangible Tax. Es negociable."
    },
    {
        "cat": "Uso de Suelo",
        "q": "El poder del gobierno local para regular el uso de la tierra (residencial, comercial, industrial) se ejerce mediante:",
        "opts": [
            "Zoning (bajo Police Power)",
            "Eminent Domain",
            "Deed Restrictions",
            "Escheat"
        ],
        "correct": 0,
        "tip": "🔑 La clave maestra es:  Zoning = Police Power local para regular uso de tierra. Se puede solicitar Variance o Rezoning."
    },
    {
        "cat": "Uso de Suelo",
        "q": "Una propiedad se usaba como tienda antes de que la zona se reclasificara como residencial. ¿Qué pasa con la tienda?",
        "opts": [
            "Puede continuar como uso 'nonconforming' (grandfathered) pero no expandirse",
            "Debe cerrar inmediatamente",
            "Puede expandirse con permiso especial",
            "Recibe compensación del gobierno por el cambio"
        ],
        "correct": 0,
        "tip": "🔑 La clave maestra es:  Uso nonconforming (grandfathered): se permite continuar, pero no expandir ni reconstruir si se destruye."
    },
    {
        "cat": "Uso de Suelo",
        "q": "El Green Belt Law en Florida permite que las tierras agrícolas sean tasadas según:",
        "opts": [
            "Su uso agrícola (no su valor de mercado)",
            "Su valor de mercado más alto posible",
            "El promedio entre uso agrícola y comercial",
            "Su valor potencial de desarrollo"
        ],
        "correct": 0,
        "tip": "🧠 ¡No te compliques!:  Green Belt Law: tierras agrícolas se tasan según uso agrícola, no valor de mercado. Reduce impuestos para granjeros."
    },
    {
        "cat": "Extras",
        "q": "¿Cuál es la diferencia PRINCIPAL entre un Broker y un REALTOR®?",
        "opts": [
            "REALTOR® es miembro de NAR (asociación), no es un tipo de licencia",
            "REALTOR® es una licencia superior al Broker",
            "Broker trabaja bajo un REALTOR®",
            "No hay diferencia, son sinónimos"
        ],
        "correct": 0,
        "tip": "🧠 ¡No te compliques!:  Agente: trabaja bajo broker. Broker: opera su oficina. REALTOR®: miembro de NAR, no es licencia."
    },
    {
        "cat": "Extras",
        "q": "Bajo TILA/Regulation Z, ¿cuántos días tiene un prestatario para rescindir un refinanciamiento de su vivienda principal?",
        "opts": [
            "3 días",
            "5 días",
            "7 días",
            "10 días"
        ],
        "correct": 0,
        "tip": "🧩 Imagínalo de esta manera:  TILA/Reg Z: divulgar APR, costos, términos. Trigger terms activan divulgación completa. 3 días de rescisión en refinanciamientos."
    },
    {
        "cat": "Extras",
        "q": "Un CMA (Comparative Market Analysis) elaborado por un sales associate:",
        "opts": [
            "Estima el precio de listado, pero NO es una tasación (appraisal)",
            "Es legalmente equivalente a una tasación",
            "Puede usarse para obtener financiamiento hipotecario",
            "Requiere certificación de tasador"
        ],
        "correct": 0,
        "tip": "🧩 Imagínalo de esta manera: Un <strong>Appraisal</strong> (Tasación) es cuando un experto calcula cuánto vale de verdad una casa. ¡A ellos se les paga una tarifa fija por su trabajo extra, nunca una comisión basada en el precio de la casa!"
    },
    {
        "cat": "Corretaje",
        "q": "Bajo el Commercial RE Sales Commission Lien Act, ¿el lien del broker se adhiere al inmueble?",
        "opts": [
            "No, solo se adhiere a los net proceeds (propiedad personal)",
            "Sí, se adhiere directamente al inmueble",
            "Sí, pero solo por 90 días",
            "Depende del monto de la comisión"
        ],
        "correct": 0,
        "tip": "🧩 Imagínalo de esta manera:  El lien es sobre los net proceeds (propiedad personal), NO se adhiere al inmueble."
    },
    {
        "cat": "Corretaje",
        "q": "Bajo el Commercial RE Leasing Commission Lien Act, ¿a qué se adhiere el lien del broker?",
        "opts": [
            "Al interés del landlord en el inmueble comercial",
            "Al leasehold del inquilino",
            "A los ingresos del alquiler",
            "A la propiedad personal del landlord"
        ],
        "correct": 0,
        "tip": "👋 ¡Aquí va el truco!:  Se adhiere al interés del landlord en el inmueble. NO se adhiere al leasehold del inquilino."
    },
    {
        "cat": "Corretaje",
        "q": "¿Puede un propietario renunciar de antemano al derecho del broker a reclamar un lien comercial?",
        "opts": [
            "No, el derecho no puede ser renunciado antes de que la comisión sea ganada",
            "Sí, con una cláusula en el contrato",
            "Sí, si ambas partes lo acuerdan",
            "Solo si el broker es un Transaction Broker"
        ],
        "correct": 0,
        "tip": "💡 Piénsalo así:  El derecho a reclamar un lien NO puede ser renunciado antes de que la comisión sea efectivamente ganada."
    },
    {
        "cat": "Divulgaciones",
        "q": "¿Qué deben firmar los compradores al cierre según las regulaciones de Florida sobre Foreign Principals?",
        "opts": [
            "Un affidavit bajo pena de perjurio declarando si son o no un Foreign Principal",
            "Una carta de intención de residencia",
            "Un acuerdo de divulgación de ingresos",
            "Un formulario de verificación de ciudadanía"
        ],
        "correct": 0,
        "tip": "🔑 La clave maestra es:  Deben firmar un affidavit bajo pena de perjurio declarando si son o no un 'Foreign Principal'."
    },
    {
        "cat": "Divulgaciones",
        "q": "¿Cuál es el propósito principal de CERCLA (Superfund)?",
        "opts": [
            "Establecer un fondo federal para limpiar sitios con desechos peligrosos",
            "Regular la construcción de viviendas nuevas",
            "Establecer estándares de eficiencia energética",
            "Proteger especies en peligro en terrenos privados"
        ],
        "correct": 0,
        "tip": "👋 ¡Aquí va el truco!:  CERCLA: fondo federal para limpiar sitios contaminados e identificar personas potencialmente responsables (PRPs)."
    },
    {
        "cat": "Divulgaciones",
        "q": "¿Qué defensa legal otorga CERCLA/SARA a ciertos propietarios que no causaron la contaminación?",
        "opts": [
            "La defensa de 'innocent landowner' con due diligence",
            "Inmunidad total automática",
            "Exención por antigüedad de la propiedad",
            "Protección solo para compradores de primera vivienda"
        ],
        "correct": 0,
        "tip": "🧠 ¡No te compliques!:  La defensa de 'innocent landowner' permite evitar responsabilidad si se cumplen criterios de due diligence."
    },
    {
        "cat": "Corretaje",
        "q": "'Commingling' en cuentas de escrow se refiere a:",
        "opts": [
            "Mezclar ilegalmente dinero de escrow con fondos personales del broker",
            "Depositar el dinero de escrow en múltiples bancos",
            "No depositar el dinero de escrow a tiempo",
            "Usar fondos de escrow para publicidad"
        ],
        "correct": 0,
        "tip": "🔑 La clave maestra es:  Commingling = acto ilegal de mezclar dinero de escrow con fondos personales o empresariales del broker."
    },
    {
        "cat": "Corretaje",
        "q": "¿Cuánto dinero propio puede mantener un broker en la cuenta de sales escrow?",
        "opts": [
            "Hasta $1,000",
            "$0 — ningún dinero propio",
            "Hasta $5,000",
            "Hasta $500"
        ],
        "correct": 0,
        "tip": "🧩 Imagínalo de esta manera:  Hasta $1,000 en sales escrow. Hasta $5,000 en property management escrow."
    },
    {
        "cat": "Corretaje",
        "q": "El uso no autorizado o mal uso de fondos de un cliente por parte de un licensee se denomina:",
        "opts": [
            "Conversion",
            "Commingling",
            "Embezzlement",
            "Misrepresentation"
        ],
        "correct": 0,
        "tip": "💡 Piénsalo así:  Conversion = uso no autorizado, mal uso o retención de propiedad/fondos del cliente."
    },
    {
        "cat": "Corretaje",
        "q": "¿Cuántos días hábiles tiene el broker para notificar a la FREC sobre un conflicto de escrow?",
        "opts": [
            "15 días hábiles",
            "10 días hábiles",
            "30 días calendario",
            "5 días hábiles"
        ],
        "correct": 0,
        "tip": "🔑 La clave maestra es: La <strong>FREC</strong> (Comisión de Bienes Raíces) es como el \"director de la escuela\" de los realtors. Ellos te pueden suspender, quitar la licencia o multar, pero <em>nunca</em> te pueden meter a la cárcel."
    },
    {
        "cat": "Corretaje",
        "q": "¿Cuáles son los procedimientos MALE para resolver conflictos de escrow?",
        "opts": [
            "Mediation, Arbitration, Litigation (interpleader), EDO de la FREC",
            "Mediation, Adjudication, Liquidation, Enforcement",
            "Meeting, Agreement, Legal action, Escrow release",
            "Mediation, Appeal, Lawsuit, Escrow surrender"
        ],
        "correct": 0,
        "tip": "💡 Piénsalo así:  MALE: Mediation, Arbitration, Litigation (interpleader), Escrow Disbursement Order (EDO) de la FREC."
    },
    {
        "cat": "Corretaje",
        "q": "¿En cuál situación está EXENTO el broker de notificar a la FREC sobre una disputa de escrow?",
        "opts": [
            "Cuando el comprador falla en cumplir la cláusula de financiamiento de buena fe",
            "Cuando el monto en disputa es menor a $1,000",
            "Cuando ambas partes son licensees",
            "Cuando el contrato no tiene fecha de cierre"
        ],
        "correct": 0,
        "tip": "🧩 Imagínalo de esta manera: La <strong>FREC</strong> (Comisión de Bienes Raíces) es como el \"director de la escuela\" de los realtors. Ellos te pueden suspender, quitar la licencia o multar, pero <em>nunca</em> te pueden meter a la cárcel."
    },
    {
        "cat": "Tasación",
        "q": "El 'going concern value' de un negocio comparado con el valor de sus bienes raíces:",
        "opts": [
            "Puede ser menor, igual o mayor",
            "Siempre es mayor",
            "Siempre es igual",
            "Siempre es menor"
        ],
        "correct": 0,
        "tip": "🧩 Imagínalo de esta manera:  El going concern value puede ser menor, igual o mayor que el valor de los activos inmobiliarios por separado."
    },
    {
        "cat": "Tasación",
        "q": "¿Cuál es un ejemplo de activo INTANGIBLE al valorar un negocio?",
        "opts": [
            "Goodwill (reputación y nombre del negocio)",
            "El edificio donde opera",
            "El inventario de productos",
            "Los muebles y equipos"
        ],
        "correct": 0,
        "tip": "🧩 Imagínalo de esta manera:  Goodwill = reputación y nombre del negocio. Es un activo intangible en la valuación."
    },
    {
        "cat": "Tasación",
        "q": "Al analizar los estados financieros de un negocio, ¿cuál de los siguientes es un ratio financiero clave?",
        "opts": [
            "Debt-to-worth ratio",
            "Price-to-earnings ratio",
            "Dividend yield",
            "Market capitalization"
        ],
        "correct": 0,
        "tip": "🧠 ¡No te compliques!:  Ratios clave: Quick ratio, inventory turnover, debt-to-worth ratio, net profit-to-owner ratio."
    },
    {
        "cat": "Corretaje",
        "q": "Tras el acuerdo NAR 2024, ¿dónde está PROHIBIDO publicar ofertas de compensación al buyer's agent?",
        "opts": [
            "En el MLS (Multiple Listing Service)",
            "En el sitio web del broker",
            "En periódicos locales",
            "En redes sociales"
        ],
        "correct": 0,
        "tip": "🧠 ¡No te compliques!:  Ya NO se pueden publicar ofertas de compensación al agente del comprador en el MLS."
    },
    {
        "cat": "Corretaje",
        "q": "Post agosto 2024, ¿qué debe firmar el comprador ANTES de que un agente le muestre propiedades?",
        "opts": [
            "Un acuerdo escrito de representación de comprador",
            "Un pre-approval de hipoteca",
            "Una carta de intención de compra",
            "Un formulario de divulgación de agencia"
        ],
        "correct": 0,
        "tip": "👋 ¡Aquí va el truco!:  Se requiere un acuerdo escrito de representación de comprador que especifique deberes y términos de comisión."
    },
    {
        "cat": "Sanciones",
        "q": "Un 'Notice of Noncompliance' del DBPR se emite para:",
        "opts": [
            "Una primera ofensa de violación menor sin daño económico o físico",
            "Cualquier violación que resulte en pérdida económica",
            "Violaciones repetidas de la misma norma",
            "Fraude o misrepresentation intencional"
        ],
        "correct": 0,
        "tip": "👋 ¡Aquí va el truco!:  Notice of Noncompliance: primera ofensa menor que no causa daño económico/físico ni afecta salud, seguridad o bienestar público."
    },
    {
        "cat": "Licencia",
        "q": "¿Pueden los 'residential loan alternative agreements' autorizar un lien sobre propiedad residencial?",
        "opts": [
            "No, no pueden autorizar liens sobre propiedad residencial",
            "Sí, con consentimiento del prestatario",
            "Sí, pero solo por 12 meses",
            "Solo si el monto es menor a $50,000"
        ],
        "correct": 0,
        "tip": "🔑 La clave maestra es:  Estos acuerdos NO pueden autorizar a una persona a colocar un lien sobre propiedad residencial."
    },
    {
        "cat": "Licencia",
        "q": "¿Pueden los sales associates operar bajo un nombre ficticio (trade name)?",
        "opts": [
            "No, solo los brokers pueden usar nombres ficticios",
            "Sí, con aprobación del DBPR",
            "Sí, si el broker lo autoriza por escrito",
            "Sí, si el nombre está registrado"
        ],
        "correct": 0,
        "tip": "💡 Piénsalo así:  Sales associates deben operar bajo su nombre legal. Solo brokers pueden usar nombres ficticios."
    },
    {
        "cat": "Impuestos",
        "q": "¿En qué fecha se vuelven MOROSOS (delinquent) los impuestos de propiedad en Florida?",
        "opts": [
            "Abril 1",
            "Enero 1",
            "Noviembre 1",
            "Julio 1"
        ],
        "correct": 0,
        "tip": "🧩 Imagínalo de esta manera:  Fechas clave: Ene 1: assessment. Mar 1: deadline exenciones. Nov 1: pagaderos con descuento (4% Nov, 3% Dic, 2% Ene, 1% Feb). Abr 1: delinquent."
    },
    {
        "cat": "Corretaje",
        "q": "¿Cuál tipo de listing agreement le garantiza al broker la comisión SIN IMPORTAR quién venda la propiedad?",
        "opts": [
            "Exclusive Right of Sale",
            "Exclusive Agency",
            "Open Listing",
            "Net Listing"
        ],
        "correct": 0,
        "tip": "💡 Piénsalo así:  Exclusive Right of Sale: broker gana siempre (más común). Exclusive Agency: broker gana solo si él vende. Open: varios brokers. Net: legal pero desaconsejado."
    },
    {
        "cat": "Financiamiento",
        "q": "La hipoteca que cubre varios lotes de terreno y normalmente incluye la cláusula de 'partial release' se conoce como:",
        "opts": [
            "hipoteca agrupada (blanket mortgage)",
            "hipoteca amortizada",
            "hipoteca a término",
            "hipoteca que garantiza el dinero en la compra (purchase money mortgage)"
        ],
        "correct": 0,
        "tip": "💡 Piénsalo así:  Blanket Mortgage (Hipoteca Colectiva o Agrupada): Financiamiento típico de desarrolladores para un lote entero. La cláusula de <em>liberación parcial</em> libera un lote vendido a la vez."
    },
    {
        "cat": "Propiedad",
        "q": "¿Qué es una sección de tierra (section) en el método de agrimensura gubernamental?",
        "opts": [
            "una milla cuadrada",
            "seis millas cuadradas",
            "un acre de terreno",
            "un terreno que pertenece a un grupo de dueños"
        ],
        "correct": 0,
        "tip": "👋 ¡Aquí va el truco!:  Una sección es 1 milla cuadrada y alberga un área total de 640 acres de terreno. Un 'Township' está compuesto por 36 secciones (6 millas de lado por 6 millas de lado)."
    },
    {
        "cat": "Divulgaciones",
        "q": "FIRPTA requiere retención del ___% del precio de venta cuando el vendedor es extranjero:",
        "opts": [
            "15%",
            "10%",
            "20%",
            "5%"
        ],
        "correct": 0,
        "tip": "🔑 La clave maestra es:  FIRPTA: retención del 15%. El comprador tiene la responsabilidad súper importante de de retener y remitir al IRS. Excepción: precio ≤$300K y comprador usará como residencia."
    },
    {
        "cat": "Propiedad",
        "q": "Qué tipo de derechos se incluyen en una propiedad que bordea un río o un curso de agua?",
        "opts": [
            "derechos ribereños (riparian rights)",
            "derechos litorales (littoral rights)",
            "derechos aluviales (alluvial rights)",
            "derecho alodial (allodial rights)"
        ],
        "correct": 0,
        "tip": "🔑 La clave maestra es:  Límites de agua: Riberas = River (ríos navegables y no navegables, arroyos). Littoral = Lagos grandes (Lake) y océanos sujetos a las mareas."
    },
    {
        "cat": "Financiamiento",
        "q": "Si el producto de una venta por foreclosure NO cubre la deuda hipotecaria, el prestamista puede buscar un:",
        "opts": [
            "Deficiency Judgment",
            "Lis Pendens",
            "Estoppel Certificate",
            "Satisfaction of Mortgage"
        ],
        "correct": 0,
        "tip": "👋 ¡Aquí va el truco!:  Deficiency Judgment: el prestamista demanda al prestatario por el saldo restante. En FL, foreclosure es judicial (requiere corte)."
    },
    {
        "cat": "Licencia",
        "q": "Un sales associate debe completar _____ horas de educación post-licencia antes de su primera renovación:",
        "opts": [
            "45 horas",
            "63 horas",
            "14 horas",
            "30 horas"
        ],
        "correct": 0,
        "tip": "👋 ¡Aquí va el truco!:  Sales Associates: 45 horas. Brokers: 60 horas. Si no se completa → licencia null and void."
    },
    {
        "cat": "Impuestos",
        "q": "Los gravámenes por impuestos especiales (Special Assessments) están (en orden de prioridad):",
        "opts": [
            "primero que los gravámenes privados",
            "después de los gravámenes privados",
            "primero que los gravámenes por impuestos a la propiedad",
            "primero que todos los gravámenes"
        ],
        "correct": 0,
        "tip": "🧩 Imagínalo de esta manera: <strong>Ad Valorem</strong> es latín para \"Según el valor\". Simplemente significa que los impuestos que pagas dependen de qué tan cara o valiosa sea tu casa."
    },
    {
        "cat": "Cierre",
        "q": "¿Cuál tipo de Title Insurance protege al COMPRADOR contra defectos ocultos en el título?",
        "opts": [
            "Owner's Policy",
            "Lender's Policy",
            "Hazard Insurance",
            "Surety Bond"
        ],
        "correct": 0,
        "tip": "🔑 La clave maestra es:  Owner's Policy: protege al comprador. Lender's Policy: protege al prestamista (obligatoria). En Miami-Dade/Broward, generalmente paga el vendedor."
    },
    {
        "cat": "Corretaje",
        "q": "¿Qué campo del corretaje ha aumentado la demanda debido al incremento de los dueños ausentes (absentee owners)?",
        "opts": [
            "Manejo de propiedades (Property Management)",
            "Corretaje de oportunidades de negocios",
            "Ventas comerciales",
            "Ventas de propiedades agrícolas"
        ],
        "correct": 0,
        "tip": "🔑 La clave maestra es:  Los dueños ausentes (absentee owners) confían en administradores de propiedades para mantener sus inversiones y generar ingresos."
    },
    {
        "cat": "Licencia",
        "q": "Un corredor de bienes raíces que va a trabajar como corredor de dos compañías de corretaje de bienes raíces al mismo tiempo, ¿qué tipo de licencia necesita?",
        "opts": [
            "licencia múltiple",
            "licencia de grupo",
            "El licenciado no necesita ninguna licencia especial.",
            "licencia especial de vendedor para trabajar con un desarrollador"
        ],
        "correct": 0,
        "tip": "💡 Piénsalo así:  Multiple license (Licencia múltiple): se emite para brokers que califican como corredor para más de una entidad comercial. Group license: es para asociados de ventas de un OWNER/DEVELOPER."
    },
    {
        "cat": "Licencia",
        "q": "Un licenciado en bienes raíces se enrola en el servicio activo de las Fuerzas Armadas de Estados Unidos. Mientras está en servicio, no se involucra en la práctica de bienes raíces en el sector privado. ¿Cuántos meses tiene de plazo para renovar su licencia después de que ha sido dado de baja en el ejército?",
        "opts": [
            "6 meses",
            "10 días",
            "1 mes",
            "3 meses"
        ],
        "correct": 0,
        "tip": "🧠 ¡No te compliques!:  Exención militar: 6 meses tras la baja honorable. Aplica también al cónyuge si reside en otro estado por el servicio militar del licenciado."
    },
    {
        "cat": "Licencia",
        "q": "¿Qué pasa con la licencia de un vendedor asociado o corredor si no hace el curso de educación antes del vencimiento de la primera renovación de sus licencias?",
        "opts": [
            "La licencia queda nula y sin valor.",
            "La licencia queda en periodo de gracia por 6 meses.",
            "La licencia queda en estado inactivo por hasta dos años.",
            "No pasa nada si el licenciado no está trabajando."
        ],
        "correct": 0,
        "tip": "🧠 ¡No te compliques!:  El primer plazo es FATAL. Si no se completan las 45h (SA) o 60h (Broker), la licencia pasa a ser nula y sin efecto (null and void). Debe volver a tomar el curso pre-licencia de 63h."
    },
    {
        "cat": "Licencia",
        "q": "¿Cuál es el estatuto de la Florida que se encarga de la regulación de todas las profesiones que se encuentran bajo el DBPR, incluyendo la de bienes raíces?",
        "opts": [
            "F.S. 455",
            "F.S. 475",
            "F.S. 120",
            "F.S. 720"
        ],
        "correct": 0,
        "tip": "💡 Piénsalo así:  F.S. 455 regula al DBPR y TODAS las profesiones en general. F.S. 475 es específico y exclusivo para Bienes Raíces. F.S. 120 es sobre procedimientos disciplinarios."
    },
    {
        "cat": "Corretaje",
        "q": "La vendedora asociada Sandra desea hacer publicidad a su casa en venta. Si la publicita únicamente en su nombre:",
        "opts": [
            "Se consideraría como un anuncio ciego y estaría sujeta a una acción disciplinaria por parte de la Comisión.",
            "Puede ser acusada de actuar como corredora.",
            "Puede hacerlo, pero debe revelar su estatus de licencia antes de iniciar negociaciones serias.",
            "Puede hacerlo, pero debe despojarse de su identidad como licenciada en el anuncio."
        ],
        "correct": 0,
        "tip": "🧩 Imagínalo de esta manera:  Un anuncio ciego (Blind Ad) omite el nombre registrado de la compañía de corretaje. Es ilegal en Florida y sujeto a multas disciplinarias por la FREC."
    },
    {
        "cat": "Corretaje",
        "q": "Smith and Brown, ambas entidades diferentes, son los únicos corredores de la zona de Key West. Ellos llegan a un acuerdo y deciden que solamente aceptarán aquellos listings que dejen el 7.5 % o más de comisión. ¿Es este acuerdo legal?",
        "opts": [
            "No, porque está siendo violada la ley antimonopolio (antitrust) de los Estados Unidos.",
            "Sí, porque es un ejemplo de libre empresa.",
            "Sí, siempre y cuando este haya sido por escrito.",
            "Sí, pero este debe ser previamente aprobado por el secretario del estado"
        ],
        "correct": 0,
        "tip": "👋 ¡Aquí va el truco!:  Sherman Antitrust Act: prohíbe terminantemente la fijación de precios (price-fixing), y es un delito establecer acuerdos tácitos o formales para manipular tarifas de comisión en el mercado."
    },
    {
        "cat": "Sanciones",
        "q": "La Comisión de Bienes Raíces de la Florida no puede:",
        "opts": [
            "imponer el encarcelamiento como penalidad",
            "aprobar reglas para implementar la Ley de Licencia",
            "determinar qué constituye una infracción",
            "establecer derechos de licencia"
        ],
        "correct": 0,
        "tip": "🔑 La clave maestra es: La <strong>FREC</strong> (Comisión de Bienes Raíces) es como el \"director de la escuela\" de los realtors. Ellos te pueden suspender, quitar la licencia o multar, pero <em>nunca</em> te pueden meter a la cárcel."
    },
    {
        "cat": "Divulgaciones",
        "q": "En determinadas circunstancias, la Ley de Bienes Raíces permite que un corredor nombre a un vendedor asociado para representar al vendedor y otro para representar al comprador. Siempre y cuando se cumplan todos los requisitos, el vendedor asociado se llamaría:",
        "opts": [
            "vendedor asociado designado",
            "agente doble",
            "corredor de transacción",
            "agente especial"
        ],
        "correct": 0,
        "tip": "💡 Piénsalo así:  Designated Sales Associate: permitido en transacciones NO residenciales donde ambas partes tienen activos >$1 millón y solicitan representación de agente exclusivo a través de diferentes vendedores de la misma firma."
    },
    {
        "cat": "Financiamiento",
        "q": "¿Cuál de las siguientes transacciones está exenta de los requerimientos de RESPA?",
        "opts": [
            "un préstamo para financiar la construcción de una casa unifamiliar cuando el prestatario es dueño del lote donde se construirá la casa",
            "un préstamo para construcción que se convertirá en un préstamo permanente después de que la construcción esté terminada",
            "un préstamo para comprar una casa nueva en una subdivisión",
            "un préstamo para comprar una casa unifamiliar"
        ],
        "correct": 0,
        "tip": "🧠 ¡No te compliques!:  RESPA aplica a propiedades residenciales de 1-4 unidades con préstamos con respaldo federal. NO aplica a la construcción si ya eres dueño del lote y no vas a convertir el préstamo en hipoteca permanente, o a ventas comerciales."
    },
    {
        "cat": "Divulgaciones",
        "q": "El objetivo principal del “Reglamento Z” consiste en:",
        "opts": [
            "Exigir a los prestamistas que divulguen el verdadero costo del crédito a los clientes.",
            "Exigir a los prestamistas que divulguen los costos de cierre a los prestatarios.",
            "Exigir a los corredores que divulguen los costos de cierre a los compradores.",
            "Exigir a los vendedores asociados que divulguen las comisiones a los clientes."
        ],
        "correct": 0,
        "tip": "👋 ¡Aquí va el truco!:  Regulación Z (TILA): exige que los prestamistas divulguen el VERDADERO costo del crédito (expresado como APR, que incluye de antemano el interés anual más los cargos financieros de cierre)."
    },
    {
        "cat": "Divulgaciones",
        "q": "Un corredor le comenta a un grupo de propietarios del acercamiento de personas de otras razas a su vecindario. Como consecuencia de esto, los propietarios venden más baratas sus propiedades usando los servicios de este corredor. ¿Cuál es el nombre de esta práctica ilegal?",
        "opts": [
            "rompecuadras (blockbusting)",
            "línea roja (redlining)",
            "conducción (steering)",
            "colusión (collusion)"
        ],
        "correct": 0,
        "tip": "🧠 ¡No te compliques!: <strong>Steering</strong> (Guiar) es algo terrible e ilegal. Es cuando alguien lleva a ciertas personas solo a ciertos barrios basándose en su raza, color o país de origen, en lugar de mostrarles todas sus opciones."
    },
    {
        "cat": "Divulgaciones",
        "q": "¿A quién se le debe entregar la notificación de pintura a base de plomo (Lead-Based Paint Disclosure)?",
        "opts": [
            "A inquilinos y compradores de propiedades residenciales construidas ANTES de 1978",
            "Solo a compradores de casas unifamiliares",
            "A todos los compradores en Florida",
            "Solo si hay niños pequeños viviendo en la casa"
        ],
        "correct": 0,
        "tip": "💡 Piénsalo así:  Aplica a TODAS las propiedades residenciales construidas antes de 1978. Exige divulgar presencia conocida y dar folleto informativo. No obliga al dueño a quitar la pintura o hacer pruebas."
    },
    {
        "cat": "Corretaje",
        "q": "Un arrendador decide imponer un reclamo de daños en el depósito de garantía de su inquilino. ¿Cuántos días tiene para notificárselo a su inquilino?",
        "opts": [
            "30 días",
            "21 días",
            "45 días",
            "60 días"
        ],
        "correct": 0,
        "tip": "💡 Piénsalo así: ¡Regla de los 15 días! El broker siempre tiene 15 días hábiles para avisarle a la Comisión (FREC) si las personas se están peleando por el dinero del depósito (Escrow)."
    },
    {
        "cat": "Propiedad",
        "q": "Entre los cuatro criterios que usa una corte para determinar si un artículo es considerado legalmente como un accesorio fijo (mueble adherido) o fixture, NO se incluye:",
        "opts": [
            "términos de disposición (disposition of the article)",
            "adaptación o instalación del artículo (adaptation of the article)",
            "relación entre las partes (relationship of the parties)",
            "intención de las partes (intent of the parties)"
        ],
        "correct": 0,
        "tip": "🧩 Imagínalo de esta manera:  Prueba Legal de Accesorio Fijo (IRMA): Intent of parties, Relationship of parties, Method of annexation, Adaptation. El VALOR y el MODO DE DISPOSICIÓN no importan."
    },
    {
        "cat": "Propiedad",
        "q": "¿Cuál de los siguientes es el tipo de propiedad más amplio (most comprehensive estate)?",
        "opts": [
            "patrimonio de dominio absoluto (fee simple estate)",
            "patrimonio de por vida (life estate)",
            "tenencia por años (estate for years)",
            "tenencia a voluntad (tenancy at will)"
        ],
        "correct": 0,
        "tip": "💡 Piénsalo así:  Fee Simple Estate / Pleno Dominio Absoluto: el tipo más completo, extenso y amplio de propiedad que puede tenerse sobre bienes raíces, el cual lo heredarán los sucesores del dueño."
    },
    {
        "cat": "Propiedad",
        "q": "Jim, Matt y Jack fueron copropietarios de una parcela de tierra. Matt murió y su parte del terreno se distribuyó de acuerdo con su testamento como parte de la herencia que dejó a sus herederos. ¿Qué tipo de patrimonio o tenencia tenía Matt en el terreno?",
        "opts": [
            "tenencia en común (tenancy in common)",
            "tenencia mancomunada entre esposos (tenancy by the entireties)",
            "tenencia mancomunada o conjunta (joint tenancy)",
            "tenencia a voluntad (tenancy at will)"
        ],
        "correct": 0,
        "tip": "🧠 ¡No te compliques!: <strong>Tenancy in Common</strong>: Es como comprar un pastel con amigos. No tienen que tener el mismo porcentaje del pastel, y si alguien fallece, su parte no va a los demás dueños, ¡sino a sus propios herederos!"
    },
    {
        "cat": "Propiedad",
        "q": "¿Con respecto a la protección de la vivienda principal contra deudas del propietario, cuál de las siguientes alternativas es INCORRECTA?",
        "opts": [
            "Solo es afectada por gravámenes hipotecarios.",
            "Para ser considerada vivienda principal, la propiedad no debe ser mayor de 160 acres cuando está fuera de un municipio ni mayor de ½ acre cuando está dentro de un municipio.",
            "El dueño de la propiedad debe ser cabeza de familia.",
            "La casa debe estar habitada por el propietario."
        ],
        "correct": 0,
        "tip": "🧩 Imagínalo de esta manera:  Respuesta: Solo es afectada por gravámenes hipotecarios. FALSO. También la pueden ejecutar (foreclose) por no pagar taxes de propiedad (Property Taxes), expensas de asociación (HOA) o tarifas de mejoras (Special Assessments) que recaen primero."
    },
    {
        "cat": "Cierre",
        "q": "En una escritura, la cláusula que contiene el nombre del otorgante y la descripción legal es la:",
        "opts": [
            "cláusula de transferencia o de premisas",
            "cláusula de habendum",
            "cláusula resolutoria",
            "cláusula de tenendum"
        ],
        "correct": 0,
        "tip": "💡 Piénsalo así:  Cláusula de Premisas (Premises / Granting Clause): La ÚNICA requerida legalmente para la validez de la escritura. Establece los nombres de las partes operativas, la descripción de la propiedad y las palabras de transferencia (granting words)."
    },
    {
        "cat": "Cierre",
        "q": "El tipo de escritura que NO proporciona garantías sobre la calidad del título y es frecuentemente usada para limpiar 'nubes en el título' es:",
        "opts": [
            "Escritura de Finiquito (Quitclaim Deed)",
            "Escritura de Garantía General (General Warranty)",
            "Escritura de Representante Personal",
            "Bargain and Sale Deed"
        ],
        "correct": 0,
        "tip": "🧠 ¡No te compliques!:  Quitclaim (Finiquito): El otorgante renuncia a cualquier interés que tenga (si es que tiene) sin ofrecer garantías. Útil para corregir defectos menores en título (clouds on title, como cambio de nombre por divorcio)."
    },
    {
        "cat": "Cierre",
        "q": "Tomar posesión física de la propiedad da qué tipo de conocimiento al mundo de su derecho legal en la propiedad?",
        "opts": [
            "Notificación real / Aviso de Autenticidad (Actual Notice)",
            "Aviso implícito (Constructive notice)",
            "Aviso judicial",
            "Dominio eminente"
        ],
        "correct": 0,
        "tip": "🧩 Imagínalo de esta manera:  Actual notice (Aviso real): tomar posesión física, ver o escuchar algo real. Constructive notice (Aviso implícito o legal): registrar el documento oficial en los registros públicos."
    },
    {
        "cat": "Cierre",
        "q": "El registro histórico completo de todas las transferencias de la propiedad (dueños, gravámenes, juicios) se denomina:",
        "opts": [
            "Cadena de título y Abstracto",
            "Title Insurance",
            "Survey",
            "Póliza del dueño"
        ],
        "correct": 0,
        "tip": "🧠 ¡No te compliques!:  Chain of title: secuencia de dueños. Abstract of title: resumen histórico completo preparado por el abogado/compañía de títulos con opinión de nubes/gravámenes."
    },
    {
        "cat": "Propiedad",
        "q": "Los cuatro poderes gubernamentales sobre la propiedad se pueden recordar por el acrónimo PETE, que significa:",
        "opts": [
            "Police power, Eminent domain, Taxation, Escheat (Confiscación)",
            "Possession, Enjoyment, Transfer, Exclusion",
            "Public, Executive, Testing, Economic",
            "Property, Exemptions, Timeshare, Escheat"
        ],
        "correct": 0,
        "tip": "👋 ¡Aquí va el truco!:  PETE: Police Power (Zonificación), Eminent Domain (Expropiación justa), Taxation (Impuestos), Escheat (Reversión al estado si dueño muere sin herederos)."
    },
    {
        "cat": "Propiedad",
        "q": "Los impuestos a la propiedad de bienes raíces y Special Assessments son gravámenes (liens):",
        "opts": [
            "Superiores específicos (priority over all others)",
            "Superiores generales",
            "Específicos subordinados",
            "Generales subordinados"
        ],
        "correct": 0,
        "tip": "💡 Piénsalo así:  Taxes a la propiedad y Special Assessments (impuestos por mejoras de calle/alcantarillas) son Gravámenes Superiores. Están primero en la línea de pago ante un foreclosure, seguidos de IRS, y luego por FECHA de registro/grabación."
    },
    {
        "cat": "Financiamiento",
        "q": "En los estados en los cuales opera la teoría del título (title theory), el prestatario o deudor (borrower):",
        "opts": [
            "Transfiere el título de la propiedad al prestamista o a una tercera parte hasta que el préstamo sea pagado por completo.",
            "Transfiere la posesión de la propiedad al prestamista o a una tercera parte hasta que la deuda sea pagada.",
            "Da en prenda/empeña/pignora (pledges) la propiedad como garantía por el préstamo.",
            "Crea una tenencia en común con el prestamista (lender)."
        ],
        "correct": 0,
        "tip": "💡 Piénsalo así:  Title Theory: El título legal se le confiere temporalmente (transfiere) al acreedor o intermediario hasta que se liquide la deuda por completo."
    },
    {
        "cat": "Financiamiento",
        "q": "El documento que sirve como evidencia de la deuda prometiendo pagar el préstamo, monto, tasa de interés, y plazos se conoce como:",
        "opts": [
            "Pagaré (Promissory Note)",
            "Hipoteca (Mortgage)",
            "Satisfacción de Hipoteca",
            "Escritura (Deed)"
        ],
        "correct": 0,
        "tip": "💡 Piénsalo así:  Pagaré (Note): El préstamo en sí (la evidencia de la obligación y la DEUDA). Hipoteca (Mortgage): El documento que GARANTIZA la deuda prendando la propiedad."
    },
    {
        "cat": "Financiamiento",
        "q": "Un purchase money mortgage se define como:",
        "opts": [
            "Es el préstamo que el vendedor le hace al comprador para completar la cuota inicial o para financiar parte del precio de la propiedad.",
            "Consiste en comprar una propiedad a través de un préstamo bancario.",
            "El que compra solicita una segunda hipoteca al banco.",
            "Consiste en comprar una propiedad hipotecada."
        ],
        "correct": 0,
        "tip": "👋 ¡Aquí va el truco!:  Purchase Money Mortgage (PMM / Hipoteca de pago parcial): cuando el vendedor financia parcial o totalmente al comprador (Seller Financing) usando la propiedad misma como garantía."
    },
    {
        "cat": "Financiamiento",
        "q": "El documento legal que sirve para colocar la propiedad como garantía por una deuda se llama:",
        "opts": [
            "hipoteca (mortgage)",
            "pagaré (promissory note)",
            "título (title)",
            "fianza"
        ],
        "correct": 0,
        "tip": "🔑 La clave maestra es:  Hipoteca (Mortgage): Es el instrumento de garantía pública. 'Hipoteca' el bien raíz como colateral o garantía de repago para respaldar la deuda."
    },
    {
        "cat": "Financiamiento",
        "q": "¿Qué hipoteca contiene un pago global final gigante (balloon payment) e incluye solo intereses cada mes?",
        "opts": [
            "Term / Straight Mortgage (Hipoteca a término)",
            "Partially Amortized Mortgage",
            "Adjustable Rate (ARM)",
            "Growing Equity Mortgage"
        ],
        "correct": 0,
        "tip": "🧩 Imagínalo de esta manera:  En la hipoteca a término (Term mortgage) o Straight mortgage, se paga SOLO interés, y el total del principal se debe al final del plazo. Si los pagos regulares mensuales tampoco alcanzan a cancelar todo el capital, el pago final gigante se llama balloon payment (Partially Amortized)."
    },
    {
        "cat": "Financiamiento",
        "q": "¿Quién asegura el préstamo FHA?",
        "opts": [
            "El FHA asegura el préstamo contra pérdidas del prestamista",
            "El VA",
            "El FNMA",
            "El banco asegura el monto"
        ],
        "correct": 0,
        "tip": "🔑 La clave maestra es:  La FHA (Federal Housing Administration) ASEGURA el préstamo de los prestamistas locales para incentivar que den préstamos (cálculo sobre Down Payment pequeño 3.5%). Cobra prima de seguro hipotecario (MIP/UFMIP)."
    },
    {
        "cat": "Financiamiento",
        "q": "El VA (Veterans Affairs):",
        "opts": [
            "GARANTIZA un porcentaje del préstamo si hay pérdida ('Guarantee')",
            "Asegura el 100% de los préstamos",
            "Financia directamente los préstamos de su propio dinero (salvo en áreas remotas)",
            "Es solo para veteranos con enganche obligatorio de 20%"
        ],
        "correct": 0,
        "tip": "🔑 La clave maestra es:  El VA GARANTIZA una porción del préstamo. En la mayoría de casos NO proveen el dinero, lo dan los prestamistas convencionales. Generalmente permite comprar casa con cero down payment (100% financiados)."
    },
    {
        "cat": "Contratos",
        "q": "Un contrato Opción u Opcional (Option Contract) para comprar a precio fijo por tiempo limitado es:",
        "opts": [
            "Unilateral",
            "Bilateral",
            "Inválido",
            "Ejecutado (Executed)"
        ],
        "correct": 0,
        "tip": "🔑 La clave maestra es:  Option Contract (Unilateral): El dueño (opcional) PROMETE mantener precio disponible. El comprador TIENE OPCIÓN (pero no la obligación) de comprar (él debe dar un consideration valioso por esta opción)."
    },
    {
        "cat": "Contratos",
        "q": "¿Qué ocurre automáticamente si se realiza una contraoferta (Counteroffer) sobre la oferta inicial?",
        "opts": [
            "La oferta inicial es cancelada y rechazada",
            "El comprador inicial ya no puede cancelar",
            "Hay que re-firmar el primer documento antes de negociar",
            "El contrato queda inmediatamente ejecutoriado (Executed)"
        ],
        "correct": 0,
        "tip": "🧠 ¡No te compliques!:  Una contraoferta mata permanentemente la oferta original y constituye ahora una NUEVA oferta."
    },
    {
        "cat": "Cierre",
        "q": "En el estado de liquidación (Closing Disclosure), el Earnest Money Deposit o depósito de buena fe, ¿aparece como crédito para quién?",
        "opts": [
            "Crédito para el comprador (Credit to buyer)",
            "Débito para el comprador",
            "Crédito al vendedor",
            "Débito al vendedor"
        ],
        "correct": 0,
        "tip": "👋 ¡Aquí va el truco!:  El depósito de garantía ya fue PAGADO por el comprador, por tanto, se acredita como parte del pago total en contra de lo que debe pagar al final (Credit to Buyer, no entra en el balance del vendedor de esa misma forma directa al cierre)."
    },
    {
        "cat": "Financiamiento",
        "q": "TRICKY: Los Discount Points se calculan sobre:",
        "opts": [
            "El monto del PRÉSTAMO (loan amount), nunca sobre el precio de venta",
            "El precio de venta de la propiedad",
            "El down payment del comprador",
            "El valor de tasación"
        ],
        "correct": 0,
        "tip": "🔑 La clave maestra es:  Siempre sobre el monto del préstamo. 1 punto = 1% del préstamo. NUNCA sobre el precio de venta."
    },
    {
        "cat": "Contratos",
        "q": "TRICKY: ¿Cuál es la diferencia entre Statute of Frauds y Statute of Limitations?",
        "opts": [
            "Frauds exige contratos escritos; Limitations establece plazos para demandar",
            "Ambos requieren contratos escritos",
            "Frauds es federal; Limitations es estatal",
            "Frauds aplica a fraude; Limitations a contratos"
        ],
        "correct": 0,
        "tip": "🧩 Imagínalo de esta manera:  Statute of Frauds: contratos por escrito para ser ejecutables. Statute of Limitations: 5 años contratos escritos, 4 años orales."
    },
    {
        "cat": "Corretaje",
        "q": "TRICKY: ¿Es un Transaction Broker lo mismo que un Dual Agent?",
        "opts": [
            "No. TB es legal y es el default en FL. Dual Agency está prohibida",
            "Sí, son términos equivalentes",
            "TB es una forma limitada de Dual Agency",
            "Dual Agency es el default, TB requiere acuerdo"
        ],
        "correct": 0,
        "tip": "💡 Piénsalo así:  NO son lo mismo. Transaction Broker es legal y default en FL. Dual Agency está prohibida. TB facilita sin representar como fiduciario."
    },
    {
        "cat": "Propiedad",
        "q": "TRICKY: Si un landlord (no un broker) guarda el depósito de seguridad, ¿cuáles son sus opciones?",
        "opts": [
            "Cuenta sin intereses, cuenta con intereses (75% al inquilino o 5% simple), o surety bond",
            "Solo cuenta sin intereses en un banco aprobado",
            "Solo surety bond",
            "Puede mantenerlo en efectivo en su oficina"
        ],
        "correct": 0,
        "tip": "👋 ¡Aquí va el truco!:  3 opciones: 1) Cuenta separada sin intereses. 2) Cuenta con intereses (75% al inquilino o 5% simple). 3) Surety bond."
    },
    {
        "cat": "Corretaje",
        "q": "TRICKY: En la regla 1-3 de depósito de escrow, ¿cuántos días tiene el sales associate para entregar el depósito al broker?",
        "opts": [
            "1 día hábil",
            "3 días hábiles",
            "24 horas naturales",
            "Inmediatamente"
        ],
        "correct": 0,
        "tip": "💡 Piénsalo así:  Asociado: 1 día hábil para entregar al broker. Broker: hasta el 3er día hábil desde que el asociado lo recibió para depositarlo."
    }
];
