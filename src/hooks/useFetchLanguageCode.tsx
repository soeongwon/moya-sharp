import { useEffect, useState } from "react";
import { getLanguagesCode } from "../api/languagesApi";

type codeType = {
  code: string;
  name: string;
};

type LanguageCodeType = {
  languages: Array<codeType>;
};

export const useFetchLanguageCode = () => {
  const [languageCode, setLanguageCode] = useState<LanguageCodeType>({
    languages: [
      {
        code: "be",
        name: "Belarusian"
      },
      {
        code: "bs",
        name: "Bosnian"
      },
      {
        code: "bg",
        name: "Bulgarian"
      },
      {
        code: "zh",
        name: "Chinese"
      },
      {
        code: "hr",
        name: "Croatian"
      },
      {
        code: "cs",
        name: "Czech"
      },
      {
        code: "en",
        name: "English"
      },
      {
        code: "fr",
        name: "French"
      },
      {
        code: "de",
        name: "German"
      },
      {
        code: "it",
        name: "Italian"
      },
      {
        code: "lv",
        name: "Latvian"
      },
      {
        code: "lt",
        name: "Lithuanian"
      },
      {
        code: "mk",
        name: "Macedonian"
      },
      {
        code: "cnr",
        name: "Montenegrin"
      },
      {
        code: "pl",
        name: "Polish"
      },
      {
        code: "pt",
        name: "Portuguese"
      },
      {
        code: "ro",
        name: "Romanian"
      },
      {
        code: "ru",
        name: "Russian"
      },
      {
        code: "sr",
        name: "Serbian"
      },
      {
        code: "sk",
        name: "Slovak"
      },
      {
        code: "sl",
        name: "Slovenian"
      },
      {
        code: "es",
        name: "Spanish"
      },
      {
        code: "uk",
        name: "Ukrainian"
      }
    ]
  });

  useEffect(() => {
    // async function fetchLanguage() {
    //   const response: any = await getLanguagesCode();
    //   setLanguageCode(response);
    // }
    // fetchLanguage();
  }, []);

  return languageCode;
};
