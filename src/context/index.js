import { createContext, useContext, useState } from "react";
import { useLocalStorage } from "@/hooks";
import { getCookie } from 'cookies-next';

const AppContext = createContext();

export const useAppContext = () => {
    const context = useContext(AppContext);
    if (!context) throw new Error("useAppContext must be used within a TasksProvider");
    return context;
};

export const AppContextProvider = ({ children }) => {

    const [profile, setProfile] = useLocalStorage("profile", {});
    const [lang, setLang] = useState("es");
    const token = getCookie('SkyTurro-Token');

    const createProfile = (id, name, photo) => setProfile({...profile, id, name, photo });

    return (
        <AppContext.Provider
          value={{
            profile,
            createProfile,
            lang, 
            setLang,
            token
          }}
        >
          {children}
        </AppContext.Provider>
    );    
};
