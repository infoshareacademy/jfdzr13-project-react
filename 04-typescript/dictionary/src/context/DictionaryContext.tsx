import React, { useContext, useState } from "react";

const BASE_URL = "https://api.dictionaryapi.dev/api/v2/entries/en";

// @ts-expect-error default state is set within DictionaryProvider
export const DictionaryContext = React.createContext();

export const useDictionary = () => {
  return useContext(DictionaryContext);
};

type LoadingState = "idle" | "pending" | "resolved" | "rejected";

type DefinitionItem = {
  definition: string;
  synonyms: string[];
  antonyms: string[];
  example: string;
};

type Definition = {
  partOfSpeech: "noun" | "verb" | "adjective" | "adverb" | "pronoun";
  definitions: DefinitionItem[];
};

type DictionaryType = {
  loadingState: State;
  definition: Definition[];
};

export const DictionaryProvider = ({ children }: { children: JSX.Element }) => {
  const [data, setData] = useState<DictionaryType>({
    definition: [],
    loadingState: "idle",
  });
  console.log({ data });

  const getDefinition = async (word: string) => {
    setData((prev) => ({ ...prev, loadingState: "pending" }));
    await fetch(`${BASE_URL}/${word}`)
      .then((res) => res.json())
      .then((fetchedDefinition) =>
        setData((prev) => ({
          ...prev,
          definition: fetchedDefinition[0].meanings,
          loadingState: "resolved",
        }))
      )
      .catch((error) => {
        console.error(error);
        setData((prev) => ({ ...prev, loadingState: "rejected" }));
      });
  };

  const passedData = { data, getDefinition };

  return (
    <DictionaryContext.Provider value={passedData}>
      {children}
    </DictionaryContext.Provider>
  );
};
