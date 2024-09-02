import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

// Initialize i18next
i18n
    .use(Backend) // Load translations from backend
    .use(LanguageDetector) // Detect user language
    .use(initReactI18next) // Pass i18n instance to react-i18next
    .init({
        backend: {
            loadPath: "/locales/{{lng}}/translation.json", // Adjust path as necessary
        },
        lng: localStorage.getItem("i18nextLng") || "az", // Set initial language from localStorage or default to 'az'
        fallbackLng: "az", // Fallback language
        debug: false, // Set to false to disable debug mode
        interpolation: {
            escapeValue: false, // React already escapes values
        },
        react: {
            useSuspense: false, // Disable suspense if you don't use it
        },
        detection: {
            order: ["localStorage", "cookie", "navigator", "htmlTag"], // Order of language detection
            caches: ["localStorage"], // Store language in localStorage
            lookupLocalStorage: "i18nextLng", // Specify the key for localStorage
        },
    });

// Save the selected language to localStorage when it changes
i18n.on("languageChanged", (lng) => {
    localStorage.setItem("i18nextLng", lng);
});

export default i18n;