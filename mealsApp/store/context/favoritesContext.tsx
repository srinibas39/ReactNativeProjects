import { createContext, useContext, useState, ReactNode } from "react";

interface FavoriteContextType {
  ids: string[];
  updateFavorites: (id: string) => void;
  removeFavorites: (id: string) => void;
}

const FavoritesContext = createContext<FavoriteContextType>({
  ids: [],
  updateFavorites: (id) => { },
  removeFavorites: (id) => { },
});

interface FavoritesProviderType {
  children?: ReactNode;
}

export const FavoriteProvider = ({ children }: FavoritesProviderType) => {
  const [ids, setIds] = useState<string[]>([]);

  const updateFavorites = (id: string) => {
    setIds((p) => [...p, id])
  };

  const removeFavorites = (id: string) => {
    // setIds(ids.filter((item) => item !== id));
    setIds(
      ids.filter((idx) => idx !== id)
    )
  };

  const contextValue: FavoriteContextType = {
    ids,
    updateFavorites,
    removeFavorites,
  };

  return (
    <FavoritesContext.Provider value={contextValue}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorite = () => useContext(FavoritesContext);
