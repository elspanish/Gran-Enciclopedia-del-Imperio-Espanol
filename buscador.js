/**
 * Base de datos del Imperio Español y motor de búsqueda
 * Enciclopedia Profesional del Imperio Español
 */

const baseDatosImperio = [
  // --- MONARCAS ---
  {
    id: "isabel-i",
    categoria: "monarcas",
    titulo: "Isabel I de Castilla (La Católica)",
    subtitulo: "Reina de Castilla (Reinado: 1474-1504)",
    url: "monarcas.html#isabel-i",
    resumen: "Co-artífice de la Unión Dinástica, el fin de la Reconquista de Granada y el patrocinio del histórico viaje de Cristóbal Colón en 1492.",
    detalles: "Isabel de Castilla sentó las bases del posterior Imperio Español junto a su esposo Fernando de Aragón mediante el Tratado de Alcaçovas, las Leyes de Toro y el financiamiento de exploraciones ultramarinas.",
    keywords: ["isabel", "catolica", "reina", "castilla", "colon", "granada", "1492", "reconquista", "monarquia", "union dinastica"]
  },
  {
    id: "fernando-ii",
    categoria: "monarcas",
    titulo: "Fernando II de Aragón (El Católico)",
    subtitulo: "Rey de Aragón, Sicilia, Nápoles y Regente de Castilla (Reinado: 1479-1516)",
    url: "monarcas.html#fernando-ii",
    resumen: "Estratega militar excepcional, unificador peninsular y pieza clave en la expansión del imperio en el Mediterráneo, el norte de África e Italia.",
    detalles: "Inspiración directa de 'El Príncipe' de Maquiavelo. Diseñó la diplomacia europea de contención contra Francia y supervisó la expansión militar bajo el mando del Gran Capitán.",
    keywords: ["fernando", "catolico", "rey", "aragon", "napoles", "maquiavelo", "gran capitan", "italia", "reconquista"]
  },
  {
    id: "carlos-i",
    categoria: "monarcas",
    titulo: "Carlos I de España y V del Sacro Imperio",
    subtitulo: "Emperador (Reinado: 1516-1556)",
    url: "monarcas.html#carlos-i",
    resumen: "El soberano del 'Imperio en el que nunca se pone el sol'. Gobernó una herencia territorial sin precedentes en Europa y América.",
    detalles: "Bajo su cetro se consolidaron las conquistas de México y Perú. Lideró la corona contra la Reforma Protestante, el Imperio Otomano de Solimán el Magnífico y la dinastía Valois en Francia.",
    keywords: ["carlos", "emperador", "carlos v", "carlos i", "austrias", "sacro imperio", "soliman", "luteranismo", "comunidades"]
  },
  {
    id: "felipe-ii",
    categoria: "monarcas",
    titulo: "Felipe II (El Prudente)",
    subtitulo: "Rey de España, Nápoles, Portugal e Indias (Reinado: 1556-1598)",
    url: "monarcas.html#felipe-ii",
    resumen: "El rey burócrata por excelencia. Consolidó la primera gran burocracia global, unió a Portugal a la corona y venció en Lepanto.",
    detalles: "Trasladó la capital a Madrid y mandó edificar el Monasterio del Escorial. Su reinado alcanzó la cúspide territorial con la incorporación de Portugal en 1580 y las Filipinas.",
    keywords: ["felipe", "prudente", "felipe ii", "portugal", "escorial", "lepanto", "armada invencible", "madrid", "leyenda negra"]
  },
  {
    id: "felipe-iii",
    categoria: "monarcas",
    titulo: "Felipe III (El Piadoso)",
    subtitulo: "Rey de España y Portugal (Reinado: 1598-1621)",
    url: "monarcas.html#felipe-iii",
    resumen: "Inició la etapa de los Austrias Menores, firmando la tregua con Flandes e impulsando una política de paz temporal ('Pax Hispanica').",
    detalles: "Delegó las tareas de gobierno en su valido, el Duque de Lerma. Durante su reinado se decretó la expulsión de los moriscos (1609) y florecieron las artes del Siglo de Oro.",
    keywords: ["felipe iii", "piadoso", "valido", "duque de lerma", "moriscos", "pax hispanica", "austrias", "siglo de oro"]
  },
  {
    id: "felipe-iv",
    categoria: "monarcas",
    titulo: "Felipe IV (El Grande o El Rey Planeta)",
    subtitulo: "Rey de España y Portugal (Reinado: 1621-1665)",
    url: "monarcas.html#felipe-iv",
    resumen: "Mecenas de Diego de Velázquez, enfrentó el reto histórico de la Guerra de los Treinta Años y la secesión de Portugal y Cataluña.",
    detalles: "Su reinado estuvo dominado por la figura del Conde-Duque de Olivares, cuyos esfuerzos centralizadores toparon con la crisis de 1640. Fue un gran impulsor de la cultura peninsular.",
    keywords: ["felipe iv", "rey planeta", "olivares", "velazquez", "treinta años", "rocroi", "crisis 1640", "siglo de oro"]
  },
  {
    id: "carlos-ii",
    categoria: "monarcas",
    titulo: "Carlos II (El Hechizado)",
    subtitulo: "Rey de España (Reinado: 1665-1700)",
    url: "monarcas.html#carlos-ii",
    resumen: "Último monarca de la dinastía de los Habsburgo en España. Su muerte sin descendencia desató la crucial Guerra de Sucesión Española.",
    detalles: "A pesar de su fragilidad física, su reinado presenció una notable recuperación económica en los territorios peninsulares y la resistencia táctica frente al expansionismo francés de Luis XIV.",
    keywords: ["carlos ii", "hechizado", "habsburgo", "austrias", "guerra de sucesion", "fin dinastia", "testamento", "reina madre"]
  },
  {
    id: "felipe-v",
    categoria: "monarcas",
    titulo: "Felipe V (El Animoso)",
    subtitulo: "Primer Rey de España de la dinastía Borbón (Reinado: 1700-1746)",
    url: "monarcas.html#felipe-v",
    resumen: "Introdujo el centralismo borbónico con los Decretos de Nueva Planta, reorganizando los reinos bajo un único modelo administrativo.",
    detalles: "Tras los Tratados de Utrecht en 1713, sacrificó las posesiones europeas para concentrar el imperio en la defensa del comercio y la soberanía de los virreinatos americanos.",
    keywords: ["felipe v", "borbon", "animoso", "decretos de nueva planta", "utrecht", "guerra de sucesion", "centralismo", "francia"]
  },
  {
    id: "carlos-iii",
    categoria: "monarcas",
    titulo: "Carlos III (El Político o El Mejor Alcalde de Madrid)",
    subtitulo: "Rey de España (Reinado: 1759-1788)",
    url: "monarcas.html#carlos-iii",
    resumen: "Máximo exponente del Despotismo Ilustrado en España. Reformó las finanzas, las fuerzas militares y el comercio ultramarino.",
    detalles: "Expulsó a los Jesuitas en 1767, liberalizó el comercio colonial con América, embelleció los espacios públicos madrileños y brindó apoyo militar clave a la Independencia de los Estados Unidos.",
    keywords: ["carlos iii", "ilustrado", "despotismo", "reformas borbonicas", "jesuitas", "comercio libre", "independencia de estados unidos", "madrid"]
  },

  // --- EXPLORADORES ---
  {
    id: "cristobal-colon",
    categoria: "exploradores",
    titulo: "Cristóbal Colón",
    subtitulo: "Navegante y Almirante del Mar Océano (1451-1506)",
    url: "exploradores.html#cristobal-colon",
    resumen: "Descubridor de América para la corona española en 1492, inaugurando la Era de los Descubrimientos y el inicio del Imperio Global.",
    detalles: "Realizó cuatro viajes históricos cruzando el Atlántico. Aunque creía haber llegado a las Indias Orientales, unificó permanentemente dos hemisferios de la Tierra por primera vez.",
    keywords: ["cristobal", "colon", "america", "descubrimiento", "1492", "carabelas", "guanahani", "viajes", "navegante"]
  },
  {
    id: "vasco-nunez-balboa",
    categoria: "exploradores",
    titulo: "Vasco Núñez de Balboa",
    subtitulo: "Conquistador y Explorador (1475-1519)",
    url: "exploradores.html#vasco-nunez-balboa",
    resumen: "El primer europeo en avistar el Océano Pacífico (Mar del Sur) cruzando el istmo de Panamá en 1513.",
    detalles: "Esta asombrosa hazaña confirmó fehacientemente que el Nuevo Mundo era un continente independiente y abrió la ruta marítima hacia Asia y los tesoros de la cuenca del Pacífico.",
    keywords: ["vasco", "nuñez", "balboa", "pacifico", "mar del sur", "panama", "istmo", "1513", "explorador"]
  },
  {
    id: "fernando-magallanes",
    categoria: "exploradores",
    titulo: "Fernando de Magallanes",
    subtitulo: "Navegante portugués al servicio de España (1480-1521)",
    url: "exploradores.html#fernando-magallanes",
    resumen: "Iniciador del primer viaje de circunnavegación del globo. Descubrió el Estrecho que lleva su nombre en el extremo sur de América.",
    detalles: "Patrocinado por Carlos I, comandó la Armada de la Especiería. Cruzó el Océano Pacífico por primera vez, perdiendo la vida en Filipinas antes de que su segundo al mando completara la gesta.",
    keywords: ["fernando", "magallanes", "estrecho", "circunnavegacion", "pacifico", "especieria", "carlos i", "vuelta al mundo"]
  },
  {
    id: "juan-sebastian-elcano",
    categoria: "exploradores",
    titulo: "Juan Sebastián Elcano",
    subtitulo: "Navegante vasco (1486-1526)",
    url: "exploradores.html#juan-sebastian-elcano",
    resumen: "Completó la primera circunnavegación de la Tierra a bordo de la nao Victoria entre 1519 y 1522.",
    detalles: "Tomó el mando de la diezmada expedición tras la muerte de Magallanes. Trajo de vuelta solo 18 hombres sanos de los 250 iniciales, demostrando de forma demostrable la esfericidad terrestre.",
    keywords: ["juan", "sebastian", "elcano", "nao victoria", "circunnavegacion", "1522", "primus circumdedisti me", "vuelta al mundo"]
  },
  {
    id: "francisco-orellana",
    categoria: "exploradores",
    titulo: "Francisco de Orellana",
    subtitulo: "Explorador del Amazonas (1511-1546)",
    url: "exploradores.html#francisco-orellana",
    resumen: "Completó el primer descenso documentado de toda la longitud del majestuoso río Amazonas en 1542.",
    detalles: "Participó en la expedición de Gonzalo Pizarro al País de la Canela antes de separarse de la fuerza principal para navegar miles de kilómetros de cuenca fluvial desconocida.",
    keywords: ["francisco", "orellana", "amazonas", "rio", "pizarro", "exploracion", "selva", "1542"]
  },
  {
    id: "hernando-soto",
    categoria: "exploradores",
    titulo: "Hernando de Soto",
    subtitulo: "Explorador de Norteamérica (1500-1542)",
    url: "exploradores.html#hernando-soto",
    resumen: "Lideró la expedición pionera a través del sureste de los actuales Estados Unidos, descubriendo el caudaloso río Misisipi.",
    detalles: "Exploró Florida, Georgia, Carolina del Norte, Carolina del Sur, Tennessee, Alabama, Misisipi y Arkansas en una de las exploraciones terrestres más extensas y audaces en Norteamérica.",
    keywords: ["hernando", "soto", "misisipi", "florida", "norteamerica", "rio", "explorador", "conquistador"]
  },

  // --- VIRREINATOS ---
  {
    id: "nueva-espana",
    categoria: "virreinatos",
    titulo: "Virreinato de la Nueva España",
    subtitulo: "Fundado en 1535. Capital: Ciudad de México",
    url: "virreinatos.html#nueva-espana",
    resumen: "El centro neurálgico del imperio en el norte y centro de América, que abarcaba desde el actual Canadá hasta Costa Rica e incluía las Filipinas.",
    detalles: "Foco de un desarrollo intelectual asombroso (Sor Juana Inés de la Cruz) y de una colosal riqueza platera sustentada en los yacimientos de Zacatecas y Guanajuato. Su puerto de Acapulco conectaba la ruta comercial asiática.",
    keywords: ["nueva españa", "mexico", "acapulco", "zacatecas", "sor juana", "virreinato", "plata", "filipinas", "galeon"]
  },
  {
    id: "peru",
    categoria: "virreinatos",
    titulo: "Virreinato del Perú",
    subtitulo: "Fundado en 1542. Capital: Lima",
    url: "virreinatos.html#peru",
    resumen: "El corazón del imperio en Sudamérica, famoso mundialmente por las inmensas minas de plata de Potosí.",
    detalles: "Establecido formalmente bajo Carlos I tras pacificar las guerras de conquistadores. Desarrolló una red urbana de influencia defensiva de Lima al Callao y una rica asimilación cultural barroca andina.",
    keywords: ["peru", "lima", "potosi", "plata", "andes", "callao", "tupac amaru", "barroco", "virreinato"]
  },
  {
    id: "nueva-granada",
    categoria: "virreinatos",
    titulo: "Virreinato de la Nueva Granada",
    subtitulo: "Fundado definitivamente en 1739. Capital: Santa Fe de Bogotá",
    url: "virreinatos.html#nueva-granada",
    resumen: "Establecido para reforzar la defensa militar y el control territorial de las costas caribeñas y el norte del subcontinente.",
    detalles: "Bajo las Reformas Borbónicas se impulsaron las expediciones botánicas de José Celestino Mutis. Su baluarte defensivo indiscutible fue Cartagena de Indias, asediada heroicamente por la flota inglesa en 1741.",
    keywords: ["nueva granada", "bogota", "cartagena de indias", "mutis", "blas de lezo", "oro", "caribe", "virreinato"]
  },
  {
    id: "rio-de-la-plata",
    categoria: "virreinatos",
    titulo: "Virreinato del Río de la Plata",
    subtitulo: "Fundado en 1776. Capital: Buenos Aires",
    url: "virreinatos.html#rio-de-la-plata",
    resumen: "El último virreinato fundado, de vital importancia para el control del Atlántico Sur y el flujo comercial minero.",
    detalles: "Nació para frenar el contrabando anglo-portugués en Colonia del Sacramento y consolidar la frontera meridional de la Patagonia. Convirtió a Buenos Aires de un puerto menor a una metrópoli comercial pujante.",
    keywords: ["rio de la plata", "buenos aires", "montevideo", "contrabando", "patagonia", "colonia del sacramento", "atlantico", "virreinato"]
  },

  // --- BATALLAS ---
  {
    id: "granada",
    categoria: "batallas",
    titulo: "Toma de Granada (1492)",
    subtitulo: "Fin de la Reconquistas y unificación ibérica",
    url: "batallas.html#granada",
    resumen: "La culminación del asedio de diez años contra el Reino Nazarí de Granada, con la capitulación oficial de Boabdil ante los Reyes Católicos por el Tratado de Granada.",
    detalles: "Este trascendental hecho político e ideológico permitió a las Coronas de Castilla y Aragón liberar abundantes recursos financieros orientándolos al patrocinio y expansión ultramarina.",
    keywords: ["granada", "1492", "boabdil", "reyes catolicos", "reconquista", "capitulacion", "asedio", "unificacion"]
  },
  {
    id: "lepanto",
    categoria: "batallas",
    titulo: "Batalla de Lepanto (1571)",
    subtitulo: "El mayor choque naval del Mediterráneo",
    url: "batallas.html#lepanto",
    resumen: "Victoria aplastante de la Liga Santa (liderada magistralmente por Don Juan de Austria y la armada imperial española) sobre el temido poder galero del Imperio Otomano.",
    detalles: "Frenó por completo el predominio otomano en el mar Mediterráneo occidental. Participó heroicamente Miguel de Cervantes, apodado desde entonces 'el manco de Lepanto'.",
    keywords: ["lepanto", "1571", "juan de austria", "liga santa", "otomanos", "galeras", "cervantes", "mediterraneo"]
  },
  {
    id: "san-quintin",
    categoria: "batallas",
    titulo: "Batalla de San Quintín (1557)",
    subtitulo: "Trascendente victoria sobre Francia en Europa",
    url: "batallas.html#san-quintin",
    resumen: "Hito militar contra las tropas francesas en el norte de Francia. Supuso la consolidación de la influencia militar hispana.",
    detalles: "La espectacular victoria forzó la firma de la Paz de Cateau-Cambrésis en 1559. En conmemoración de este triunfo militar, Felipe II mandó construir el asombroso Monasterio de San Lorenzo del Escorial.",
    keywords: ["san quintin", "1557", "francia", "felipe ii", "cateau-cambresis", "escorial", "manuel filiberto"]
  },
  {
    id: "breda",
    categoria: "batallas",
    titulo: "Sitio de Breda (1624-1625)",
    subtitulo: "La obra maestra militar del general Ambrosio Spínola",
    url: "batallas.html#breda",
    resumen: "Asedio militar prolongado durante el cual los Tercios Españoles rompieron las sólidas defensas de la ciudad holandesa de Breda.",
    detalles: "Inmortalizado en el famoso lienzo 'Las Lanzas' de Diego Velázquez. Reflejó la cortesía militar y la imbatible superioridad metodológica de los Tercios en la prolongada Guerra de los Ochenta Años.",
    keywords: ["breda", "spinola", "velazquez", "las lanzas", "asedio", "flandes", "tercios", "1625"]
  },
  {
    id: "nordlingen",
    categoria: "batallas",
    titulo: "Batalla de Nördlingen (1634)",
    subtitulo: "Demostración de fuerza de los Tercios en el Sacro Imperio",
    url: "batallas.html#nordlingen",
    resumen: "Victoria monumental de las tropas conjuntas imperiales católicas y los Tercios de Infantería Española ante las vanguardias protestantes suecas.",
    detalles: "Bajo las órdenes del Cardenal-Infante Don Fernando de Austria. Su demoledora infantería aniquiló por completo la reputación de invencibilidad del disciplinado ejército del rey Gustavo Adolfo de Suecia.",
    keywords: ["nordlingen", "1634", "cardenal-infante", "suecia", "protestantes", "catolicos", "tercios", "guerra de los treinta años"]
  },

  // --- TERCIOS ---
  {
    id: "organizacion-tercios",
    categoria: "tercios",
    titulo: "Organización y Origen de los Tercios",
    subtitulo: "Creados en el siglo XVI",
    url: "tercios.html#organizacion",
    resumen: "La infantería española de élite que dominó de manera absoluta los campos de batalla europeos por más de un siglo y medio.",
    detalles: "Nacidos a raíz de las astutas reformas tácticas de Gonzalo Fernández de Córdoba (El Gran Capitán). Combinaban disciplinadamente picas, arcabuces y espadas en una estructura altamente profesionalizada y voluntaria.",
    keywords: ["tercio", "picas", "arcabuz", "organizacion", "gran capitan", "infanteria", "elite", "flandes", "reformas"]
  },
  {
    id: "tacticas-armamento",
    categoria: "tercios",
    titulo: "Tácticas, Armamento y Escuadrones",
    subtitulo: "Innovaciones bélicas revolucionarias",
    url: "tercios.html#tacticas",
    resumen: "La revolucionaria combinación táctica de armas de fuego y armas de asta conocida internacionalmente como 'pike and shot'.",
    detalles: "Estudiado y copiado por toda Europa. Su unidad defensiva-ofensiva básica era el 'cuadro de picas', apoyado por las 'mangas de arcabuceros' que castigaban al enemigo a distancia antes del choque físico cuerpo a cuerpo de espada y rodela.",
    keywords: ["tácticas", "armamento", "picas", "arcabuces", "mosquete", "cuadro", "mangas", "pike and shot"]
  },

  // --- COMERCIO ---
  {
    id: "galeon-manila",
    categoria: "comercio",
    titulo: "El Galeón de Manila (Nao de China)",
    subtitulo: "La primera arteria comercial de escala global (1565-1815)",
    url: "comercio.html#galeon-manila",
    resumen: "La ruta de navegación anual por el Pacífico que conectaba Manila (Filipinas) con Acapulco (Nueva España).",
    detalles: "Inaugurado tras el genial descubrimiento del 'tornaviaje' por el fraile y navegante Andrés de Urdaneta. Intercambiaba ingentes toneladas de plata americana extraída de Potosí y Zacatecas por seda china, especias orientales finas, marfil, porcelana fina de la dinastía Ming y té.",
    keywords: ["galeon", "manila", "china", "acapulco", "tornaviaje", "urdaneta", "seda", "plata", "pacifico", "globalizacion"]
  },
  {
    id: "flota-indias",
    categoria: "comercio",
    titulo: "La Flota de Indias",
    subtitulo: "El convoy marítimo que blindó la seguridad del tesoro atlántico",
    url: "comercio.html#flota-indias",
    resumen: "Un inteligente e inviolable sistema de convoyes blindados que transportaba de forma segura las mercancías e inmensas riquezas entre Sevilla/Cádiz y el Caribe americano.",
    detalles: "A pesar de las leyendas extendidas de asaltos corsarios constantes, el sistema de flotas de escolta militar española demostró ser uno de los más exitoso y seguros eficaces de la historia naval, perdiendo un porcentaje minúsculo de flotas ante ataques o tormentas.",
    keywords: ["flota", "indias", "convoy", "sevilla", "cadiz", "caribe", "plata", "piratas", "galeones"]
  },
  {
    id: "casa-contratacion",
    categoria: "comercio",
    titulo: "La Casa de la Contratación",
    subtitulo: "Fundada en Sevilla en 1503",
    url: "comercio.html#casa-contratacion",
    resumen: "La institución burocrática y de investigación cartográfica que administraba monopolios comerciales y registraba exploraciones.",
    detalles: "Funcionaba a la vez como aduana comercial, tribunal jurídico marítimo, escuela de navegación académica avanzada y archivo maestro del Padrón Real (el mapa global secreto de navegación militar y científica actualizado por los pilotos imperiales).",
    keywords: ["casa de contratacion", "sevilla", "monopolio", "padron real", "cartografia", "aduana", "navegacion", "archivo"]
  },

  // --- CRONOLOGIA GENERAL ---
  {
    id: "hito-1469",
    categoria: "cronologia",
    titulo: "1469 - Matrimonio de los Reyes Católicos",
    subtitulo: "Unión dinástica de Castilla y Aragón",
    url: "cronologia.html#1469",
    resumen: "Boda secreta que unificó políticamente las coronas españolas de Isabel I y Fernando II, permitiendo el nacimiento del Imperio.",
    detalles: "Sentaría las bases territoriales nacionales y unificaría la diplomacia militar peninsular.",
    keywords: ["1469", "boda", "reyes catolicos", "castilla", "aragon", "union"]
  },
  {
    id: "hito-1492",
    categoria: "cronologia",
    titulo: "1492 - Descubrimiento de América y Toma de Granada",
    subtitulo: "El año que cambió el curso de la humanidad",
    url: "cronologia.html#1492",
    resumen: "Llegada fortuita de la nao y carabelas de Cristóbal Colón a tierras americanas y el fin oficial de la Reconquista en la península.",
    detalles: "Este año crucial también contempló la publicación de la primera gramática impresa castellana por Antonio de Nebrija.",
    keywords: ["1492", "colon", "granada", "nebrija", "gramatica", "descubrimiento", "carabela"]
  },
  {
    id: "hito-1519",
    categoria: "cronologia",
    titulo: "1519 - Circunnavegación y Conquista de México",
    subtitulo: "Giro geopolítico universal",
    url: "cronologia.html#1519",
    resumen: "Zarpa la flota de Magallanes/Elcano y Hernán Cortés inicia la expedición al interior del colosal Imperio Mexica.",
    detalles: "Supuso la expansión de límites geográficos y territoriales insospechados para la civilización peninsular de la época.",
    keywords: ["1519", "cortes", "mexico", "magallanes", "circunnavegacion", "imperio mexica", "aztecas"]
  },
  {
    id: "hito-1571",
    categoria: "cronologia",
    titulo: "1571 - Triunfo de Lepanto",
    subtitulo: "Victoria naval santa",
    url: "cronologia.html#1571",
    resumen: "Detención militar del avance marítimo del Imperio Otomano en el Mediterráneo mediante la coalición militar de galeras católicas.",
    detalles: "Consolidación indiscutible española como el paladín defensivo militar cristiano del Mediterráneo.",
    keywords: ["1571", "lepanto", "galeras", "otomanos", "liga santa"]
  },
  {
    id: "hito-1580",
    categoria: "cronologia",
    titulo: "1580 - Unión Ibérica",
    subtitulo: "Máxima concentración de Coronas unidas de la historia moderna",
    url: "cronologia.html#1580",
    resumen: "Felipe II hereda legalmente el trono de Portugal y unifica las dos coronas globales bajo un único soberano dinastía Habsburgo.",
    detalles: "Hablamos del imperio global más integrado que el mundo haya visto de América a Asia, incluyendo costas africanas, Azores y Brasil.",
    keywords: ["1580", "portugal", "union iberica", "felipe ii", "lisboa", "imperio portugues"]
  },
  {
    id: "hito-1643",
    categoria: "cronologia",
    titulo: "1643 - Batalla de Rocroi",
    subtitulo: "Punto de inflexión militar táctico en la Guerra de Flandes",
    url: "cronologia.html#1643",
    resumen: "La infantería de los Tercios sufre su primera derrota campal táctica significativa en suelo francés.",
    detalles: "Fue idealizada como el crepúsculo militar de la hegemonía española frente al fulgurante ascenso francés bajado por Luis XIV.",
    keywords: ["1643", "rocroi", "francia", "tercios", "derrota"]
  },
  {
    id: "hito-1713",
    categoria: "cronologia",
    titulo: "1713 - Tratado de Utrecht",
    subtitulo: "Nombramiento de los Borbones y desmembramiento patrimonial europeo",
    url: "cronologia.html#1713",
    resumen: "Paz que sella diplomáticamente la sangrienta Guerra de Sucesión Española.",
    detalles: "Felipe V es validado rey nacional pero cede los Países Bajos españoles, Gibraltar, Menorca y posesiones imperiales italianas.",
    keywords: ["1713", "utrecht", "guerra de sucesion", "felipe v", "borbon", "gibraltar", "menorca"]
  },
  {
    id: "hito-1898",
    categoria: "cronologia",
    titulo: "1898 - El Desastre del 98",
    subtitulo: "Pérdida de Cuba, Filipinas y Puerto Rico ante Estados Unidos",
    url: "cronologia.html#1898",
    resumen: "Fin simbólico de las posesiones coloniales transoceánicas remanentes del otrora Imperio Español.",
    detalles: "Desencadenó una severa crisis moral, política e intelectual nacional plasmada magistralmente en la Generación del 98.",
    keywords: ["1898", "cuba", "filipinas", "puerto rico", "eeuu", "desastre del 98", "mar de cavite", "santiago de cuba", "generacion del 98"]
  }
];

// Función para inicializar los buscadores dinámicos
document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("search-input");
  const searchResults = document.getElementById("search-results");
  const resultSummary = document.getElementById("search-summary");
  
  // Si estamos en la página del buscador, recuperamos los parámetros de la URL
  const params = new URLSearchParams(window.location.search);
  const queryParam = params.get("q") || "";
  
  if (searchInput) {
    searchInput.value = queryParam;
    
    // Si tenemos una consulta en la URL, realizamos la búsqueda de inmediato
    if (queryParam) {
      realizarBusqueda(queryParam, searchResults, resultSummary);
    }
    
    // Escuchar cambios en tiempo real
    searchInput.addEventListener("input", (e) => {
      const query = e.target.value.trim();
      realizarBusqueda(query, searchResults, resultSummary);
      
      // Actualizar URL sutilmente sin recargar la página para simular router real
      const newUrl = `${window.location.pathname}?q=${encodeURIComponent(query)}`;
      window.history.replaceState({ path: newUrl }, '', newUrl);
    });
  }
  
  // Vincular buscadores sencillos de la cabecera (Header Search widget en todas las cabeceras)
  const headerSearchForm = document.getElementById("header-search-form");
  if (headerSearchForm) {
    headerSearchForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const headerInput = document.getElementById("header-search-input");
      if (headerInput && headerInput.value.trim() !== "") {
        window.location.href = `buscador.html?q=${encodeURIComponent(headerInput.value.trim())}`;
      }
    });
  }
});

/**
 * Motor de búsqueda difuso sutil sobre keywords y detales históricos
 */
function realizarBusqueda(query, container, summaryContainer) {
  if (!container) return;
  
  if (!query || query.length < 2) {
    container.innerHTML = `
      <div class="col-span-full text-center py-16 text-slate-400 font-merriweather italic">
        Escriba al menos dos caracteres para iniciar la búsqueda en el archivo imperial...
      </div>
    `;
    if (summaryContainer) {
      summaryContainer.textContent = "Mostrando base completa del catálogo histórico.";
    }
    // Si no hay búsqueda, podemos sugerir todo o mostrar una cuadrícula limpia
    mostrarResultadosDestacados(baseDatosImperio.slice(0, 8), container);
    return;
  }
  
  const searchTerms = query.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").split(/\x08| /).filter(t => t);
  
  const resultados = baseDatosImperio.filter(item => {
    // Normalizar campos para mejorar la precisión
    const targetString = `${item.titulo} ${item.subtitulo} ${item.resumen} ${item.detalles} ${item.keywords.join(" ")}`
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
      
    // Encontrar coincidencias por términos independientes
    return searchTerms.every(term => targetString.includes(term));
  });
  
  // Actualizar el resumen
  if (summaryContainer) {
    const pluralResultados = resultados.length === 1 ? "documento encontrado" : "documentos encontrados";
    summaryContainer.innerHTML = `Mostrando <strong class="text-dorado font-mono">${resultados.length}</strong> ${pluralResultados} para la consulta "<span class="text-rojo-imperial font-merriweather italic">${query}</span>".`;
  }
  
  if (resultados.length === 0) {
    container.innerHTML = `
      <div class="col-span-full text-center py-16 bg-slate-900/40 rounded-xl border border-dorado/20 max-w-2xl mx-auto px-6">
        <svg class="mx-auto h-12 w-12 text-dorado/40 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>
        </svg>
        <h3 class="text-lg font-cinzel font-bold text-white mb-2">Ningún registro en las crónicas imperiales</h3>
        <p class="text-slate-400 text-sm font-merriweather leading-relaxed">
          No hemos hallado crónicas que respondan a la búsqueda. Intente con términos más genéricos como "Carlos", "Plata", "Galeón", "Tercios", "Potosí" o "Lepanto".
        </p>
      </div>
    `;
    return;
  }
  
  mostrarResultadosDestacados(resultados, container);
}

/**
 * Pinta la cuadrícula de resultados
 */
function mostrarResultadosDestacados(listaResultados, container) {
  container.innerHTML = "";
  
  listaResultados.forEach(item => {
    // Definir color de etiqueta según sección
    let badgeColor = "bg-slate-800 text-slate-300 border-slate-700";
    if (item.categoria === "monarcas") badgeColor = "bg-amber-950/50 text-amber-300 border-amber-800/40";
    if (item.categoria === "exploradores") badgeColor = "bg-emerald-950/50 text-emerald-300 border-emerald-800/40";
    if (item.categoria === "virreinatos") badgeColor = "bg-cyan-950/50 text-cyan-300 border-cyan-800/40";
    if (item.categoria === "batallas") badgeColor = "bg-rose-950/50 text-rose-300 border-rose-800/40";
    if (item.categoria === "tercios") badgeColor = "bg-blue-950/50 text-blue-300 border-blue-800/40";
    if (item.categoria === "comercio") badgeColor = "bg-indigo-950/50 text-indigo-300 border-indigo-800/40";
    if (item.categoria === "cronologia") badgeColor = "bg-purple-950/50 text-purple-300 border-purple-800/40";

    const card = document.createElement("div");
    card.className = "card-museum rounded-lg overflow-hidden group border border-dorado/15 flex flex-col justify-between h-full bg-slate-900/60 p-6 self-stretch transition-all duration-300";
    
    card.innerHTML = `
      <div>
        <div class="flex items-center justify-between mb-3 gap-2 flex-wrap">
          <span class="text-xs uppercase tracking-widest font-mono border px-2 py-0.5 rounded ${badgeColor}">
            ${item.categoria}
          </span>
          <span class="text-xs font-mono text-slate-400">IMPERIO ESPAÑOL</span>
        </div>
        <h4 class="text-lg font-cinzel font-bold text-white group-hover:text-dorado transition-colors mb-1">
          <a href="${item.url}">${item.titulo}</a>
        </h4>
        <p class="text-xs text-dorado/80 font-serif italic mb-4">${item.subtitulo}</p>
        <p class="text-sm text-slate-300 font-serif leading-relaxed mb-4">${item.resumen}</p>
        <p class="text-xs text-slate-400 font-serif leading-relaxed bg-slate-950/45 p-3 rounded border border-slate-800/60 italic">${item.detalles}</p>
      </div>
      <div class="mt-6 pt-4 border-t border-slate-800/50 flex justify-end">
        <a href="${item.url}" class="text-xs text-dorado hover:text-white uppercase font-mono tracking-wider flex items-center gap-1.5 transition-all">
          Consultar Registro
          <svg class="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
          </svg>
        </a>
      </div>
    `;
    container.appendChild(card);
  });
}
