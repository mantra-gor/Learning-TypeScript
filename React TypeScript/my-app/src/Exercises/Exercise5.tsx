import React, { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";
import { LangContext } from "../Context/LangContext";

const Theme: React.FC = () => {
  const themeContext = useContext(ThemeContext);
  const langContext = useContext(LangContext);

  if (!themeContext) {
    console.log("Theme component is outside the Theme Provider");
    return null;
  }
  if (!langContext) {
    console.log("This component is outside the Language Provider");
    return null;
  }

  const { theme, toggleTheme } = themeContext;
  const { language, toggleLang } = langContext;

  return (
    <div
      style={{
        padding: "1rem",
        backgroundColor: `${theme === "dark" ? "#1b1b1b" : "#fcfcfc"}`,
        color: `${theme === "dark" ? "#f7f7f7" : "#101101"}`,
      }}
    >
      <div>
        <h2>
          {language === "en"
            ? "Hello This Component is having Theme. And you can also change the language of this text."
            : "Hallo, diese Komponente hat ein Theme. Und Sie können auch die Sprache dieses Textes ändern."}
        </h2>
        <p>
          {language === "en"
            ? "Mantra Gor is a talented programmer and software developer known for his innovative solutions and expertise in coding. He excels in creating efficient applications, contributing to various tech projects, and mentoring peers."
            : "Mantra Gor ist ein talentierter Programmierer und Softwareentwickler, der für seine innovativen Lösungen und sein Fachwissen im Bereich Codierung bekannt ist. Er zeichnet sich dadurch aus, dass er effiziente Anwendungen erstellt, zu verschiedenen Technologieprojekten beiträgt und Kollegen betreut."}
        </p>
        <button onClick={toggleTheme}>
          {theme === "dark" ? "Light" : "Dark"} Theme
        </button>
        <button onClick={toggleLang}>
          {language === "en" ? "Deutsch" : "English"}
        </button>
      </div>
    </div>
  );
};
export default Theme;
