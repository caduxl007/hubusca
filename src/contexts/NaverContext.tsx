import React, { createContext, useCallback, useContext, useState } from 'react';

interface INaver {
  id: string;
  job_role: string;
  admission_date: Date;
  birthdate: Date;
  project: string;
  name: string;
  url: string;
}

interface INaverContextData {
  naver: INaver;
  isModalNaver: boolean;
  openModalNaver: (data: INaver) => void;
  closeModalNaver: () => void;
}

const NaverContext = createContext<INaverContextData>({} as INaverContextData);

export const NaverProvider: React.FC = ({ children }) => {
  const [isModalNaver, setIsModalNaver] = useState(false);
  const [naver, setNaver] = useState<INaver>({} as INaver);

  const openModalNaver = useCallback((naverParam: INaver) => {
    setIsModalNaver(true);
    setNaver(naverParam);
  }, []);

  const closeModalNaver = useCallback(() => {
    setIsModalNaver(false);
  }, []);

  return (
    <NaverContext.Provider
      value={{ isModalNaver, naver, openModalNaver, closeModalNaver }}
    >
      {children}
    </NaverContext.Provider>
  );
};

export function useNaver(): INaverContextData {
  const context = useContext(NaverContext);

  if (!context) {
    throw new Error('useNaver must be used within an NaverProvider');
  }

  return context;
}
