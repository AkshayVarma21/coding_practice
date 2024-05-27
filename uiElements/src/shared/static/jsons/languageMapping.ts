import { ISelectedLanguage } from '../Constants';
export const languageMapping: Array<ISelectedLanguage> = [
    {
        languageHeader: "Select language",
        language: "en",
        header: "Content",
        content: `This is a sample component for the language converter. 
                  The same functionality will be replicated once the user selects a language while logging in.
                  This is based on some hardcoded json data and this will be driven by api response once apis are integrated.`,
        subContent: "This content is in English",
    },
    {
        language: "spanish",
        languageHeader: "Seleccione el idioma",
        header: "Contenido",
        content: `Este es un componente de muestra para el convertidor de idiomas.
                  La misma funcionalidad se replicará una vez que el usuario seleccione un idioma al iniciar sesión.
                  Esto se basa en algunos datos json codificados y será impulsado por la respuesta de la API una vez que las API estén integradas.`,
        subContent: "Este contenido está en español",
    },
    {
        language: "german",
        languageHeader: "Sprache auswählen",
        header: "Inhalt",
        content: `Dies ist eine Beispielkomponente für den Sprachkonverter.
                  Dieselbe Funktionalität wird repliziert, sobald der Benutzer beim Anmelden eine Sprache auswählt.
                  Dies basiert auf einigen hartcodierten JSON-Daten und wird von der API-Antwort gesteuert, sobald die APIs integriert sind.`,
        subContent: "Dieser Inhalt ist auf Deutsch",
    },
    {
        language: "hindi",
        languageHeader: "भाषा का चयन करें",
        header: "विषय",
        content: `यह भाषा परिवर्तक के लिए एक नमूना घटक है।
                  लॉग इन करते समय उपयोगकर्ता द्वारा किसी भाषा का चयन करने के बाद वही कार्यक्षमता दोहराई जाएगी।
                  यह कुछ हार्डकोडेड जोंस डेटा पर आधारित है और एपिस के एकीकृत होने के बाद यह एपीआई प्रतिक्रिया द्वारा संचालित होगा।`,
        subContent: "यह सामग्री हिंदी में है",
    },
]