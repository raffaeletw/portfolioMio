import React from "react";

// /**
//  * 關鍵字高亮工具函數
//  * @param text 需要高亮的文字
//  * @param language 當前語言
//  * @param highlightColor 高亮顏色，默認為 #ffa828
//  * @returns React 元素，包含高亮處理後的文字
//  */
// export const highlightKeywords = (
//   text: string,
//   language: string,
//   highlightColor: string = "#ffa828"
// ) => {
//   // 根據不同語言設置需要高亮的關鍵詞
//   const keywords: Record<string, string[]> = {
//     en: [
//       "Detail-oriented",
//       "organized",
//       "meticulous",
//       "AI",
//       "Robotics",
//       "Web Development",
//       "fast pace",
//       "tight deadlines",
//       "Enthusiastic team player",
//       "proactive",
//       "expertise",
//       "machine learning",
//       "Spring Boot",
//       "Java",
//       "RESTful API",
//       "TomTom",
//       "CO2 emissions",
//       "Python",
//       "TensorFlow",
//     ],
//     zh: [
//       "細心",
//       "有條理",
//       "一絲不苟",
//       "人工智能",
//       "機器人",
//       "網頁開發",
//       "快節奏",
//       "緊迫的期限",
//       "熱情的團隊合作者",
//       "專注",
//       "專業",
//       "機器學習",
//       "Spring Boot",
//       "Java",
//       "RESTful API",
//       "TomTom",
//       "二氧化碳排放",
//       "Python",
//       "TensorFlow",
//     ],
//     it: [
//       "orientato ai dettagli",
//       "organizzato",
//       "meticoloso",
//       "IA",
//       "Robotica",
//       "Sviluppo Web",
//       "ritmo sostenuto",
//       "scadenze strette",
//       "Entusiasta giocatore di squadra",
//       "proattivo",
//       "competenze",
//       "apprendimento automatico",
//       "Spring Boot",
//       "Java",
//       "RESTful API",
//       "TomTom",
//       "emissioni di CO2",
//       "Python",
//       "TensorFlow",
//     ],
//     mi: [
//       "aro ana ki nga taipitopito",
//       "whakaritea",
//       "tika",
//       "AI",
//       "Robotics",
//       "Whakawhanake Tukutuku",
//       "kato tere",
//       "wa mutunga maukati",
//       "kaitakaro roopu hihiko",
//       "mātanga",
//       "ako miihini",
//       "Spring Boot",
//       "Java",
//       "RESTful API",
//       "TomTom",
//       "tukunga CO2",
//       "Python",
//       "TensorFlow",
//     ],
//   };

//   // 獲取當前語言的關鍵詞
//   const currentKeywords = keywords[language] || [];

//   // 替換關鍵詞為帶有黃色樣式的 span
//   let highlightedText = text;

//   currentKeywords.forEach((keyword) => {
//     // 使用正則表達式做不區分大小寫的替換
//     const regex = new RegExp(`(${keyword})`, "gi");
//     highlightedText = highlightedText.replace(
//       regex,
//       `<span class="text-[${highlightColor}]">$1</span>`
//     );
//   });

//   return React.createElement("span", {
//     dangerouslySetInnerHTML: { __html: highlightedText },
//   });
// };

export const highlightKeywords = (text: string, language: string) => {
  // 根據不同語言設置需要高亮的關鍵詞
  const keywords: Record<string, string[]> = {
    en: [
      "Detail-oriented",
      "organized",
      "meticulous",
      "Robotics",
      "Web Development",
      "fast pace",
      "tight deadlines",
      "Enthusiastic team player",
      "proactive",
      "expertise",
      "machine learning",
      "Spring Boot",
      "Java",
      "RESTful API",
      "TomTom",
      "CO2 emissions",
      "Python",
      "TensorFlow",
      "development",
      "research",
      "web design",
      "implementation",
      "testing",
      "optimization",
      "analysis",
      "collaboration",
      "leadership",
    ],
    zh: [
      "細心",
      "有條理",
      "一絲不苟",
      "人工智能",
      "機器人",
      "網頁開發",
      "快節奏",
      "緊迫的期限",
      "熱情的團隊合作者",
      "專注",
      "專業",
      "機器學習",
      "Spring Boot",
      "Java",
      "RESTful API",
      "TomTom",
      "二氧化碳排放",
      "Python",
      "TensorFlow",
      "開發",
      "研究",
      "網頁設計",
      "實現",
      "測試",
      "優化",
      "分析",
      "協作",
      "領導",
    ],
    it: [
      "orientato ai dettagli",
      "organizzato",
      "meticoloso",
      "IA",
      "Robotica",
      "Sviluppo Web",
      "ritmo sostenuto",
      "scadenze strette",
      "Entusiasta giocatore di squadra",
      "proattivo",
      "competenze",
      "apprendimento automatico",
      "Spring Boot",
      "Java",
      "RESTful API",
      "TomTom",
      "emissioni di CO2",
      "Python",
      "TensorFlow",
      "web sviluppo",
      "ricerca",
      "progettazione",
      "implementazione",
      "testing",
      "ottimizzazione",
      "analisi",
      "collaborazione",
      "leadership",
    ],
    mi: [
      "aro ana ki nga taipitopito",
      "whakaritea",
      "tika",
      "Robotics",
      "Whakawhanake Tukutuku",
      "kato tere",
      "wa mutunga maukati",
      "kaitakaro roopu hihiko",
      "mātanga",
      "ako miihini",
      "Spring Boot",
      "Java",
      "RESTful API",
      "TomTom",
      "tukunga CO2",
      "Python",
      "TensorFlow",
      "whakawhanake",
      "rangahau",
      "hoahoa",
      "whakatinanatanga",
      "whakamātautau",
      "whakapai",
      "tātari",
      "mahi tahi",
      "rangatiratanga",
    ],
  };

  // 獲取當前語言的關鍵詞
  const currentKeywords = keywords[language] || [];

  // 替換關鍵詞為帶有高亮樣式的 span
  let highlightedText = text;

  // 首先處理 "AI" 的特殊情況
  highlightedText = highlightedText.replace(
    /\bAI\b/g,
    '<span style="color: #ffda64">AI</span>'
  );

  // 然後處理其他關鍵詞
  currentKeywords.forEach((keyword) => {
    // 使用正則表達式做不區分大小寫的替換，但確保是完整的單詞
    const regex = new RegExp(`\\b(${keyword})\\b`, "gi");
    highlightedText = highlightedText.replace(
      regex,
      '<span style="color: #ffda64">$1</span>'
    );
  });

  return highlightedText;
};
