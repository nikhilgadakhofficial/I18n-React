import languageConfig from "./lang.json";

const I18n = (keyWord , placeholder,value) =>{
    const lang = localStorage.getItem("lang") || "en";

    const text = languageConfig[lang][keyWord];
    if(placeholder && value){
        return text.replace(placeholder,value);
    }
    return text
}

export default I18n;