import React, { createContext, useContext, useState, ReactNode } from 'react';


interface MenuContextProps {
  isMenuVisible: boolean;
  toggleMenu: () => void;
  hideMenu: () => void;
}

interface MenuProviderProps {
  children: ReactNode;
}

export const NavbarContext = createContext<MenuContextProps | undefined>(undefined);

export const useMenuContext = () => {
  const context = useContext(NavbarContext);
  if (!context) {
    throw new Error('useMenuContext must be used within a MenuProvider');
  }
  return context;
};


export const NavbarContextProvider: React.FC<MenuProviderProps> = ({children})=>{
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const toggleMenu = () => {
    setIsMenuVisible((prev) => !prev);
  };

  const hideMenu = () => {
    setIsMenuVisible(false);
  };


  return (
    <NavbarContext.Provider value={{isMenuVisible, toggleMenu, hideMenu}}>
      {children}
    </NavbarContext.Provider>
  )
}