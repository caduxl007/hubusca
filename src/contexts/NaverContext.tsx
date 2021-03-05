import React, { createContext, useCallback, useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';

import ModalSucess from '../components/ModalSucess';

interface INaver {
  id: string;
  job_role: string;
  admission_date: Date;
  birthdate: Date;
  project: string;
  name: string;
  url: string;
}

interface IModalSucess {
  title: string;
  message: string;
}

interface INaverContextData {
  naver: INaver;
  isModalNaver: boolean;
  isModalExclude: boolean;
  idNaverExclude: string;
  isNaverExclude: boolean;
  modalSucess: IModalSucess;
  openModalNaver: (data: INaver) => void;
  closeModalNaver: () => void;
  openModalSucess: (data: IModalSucess) => void;
  closeModalSucess: () => void;
  openModalExclude: (id: string) => void;
  closeModalExclude: () => void;
  modalExclude: () => void;
}

const NaverContext = createContext<INaverContextData>({} as INaverContextData);

export const NaverProvider: React.FC = ({ children }) => {
  const [isModalNaver, setIsModalNaver] = useState(false);
  const [isModalSucess, setIsModalSucess] = useState(false);
  const [isModalExclude, setIsModalExclude] = useState(false);
  const [isNaverExclude, setIsNaverExclude] = useState(false);
  const [idNaverExclude, setIdNaverExclude] = useState<string>('');
  const [naver, setNaver] = useState<INaver>({} as INaver);
  const [modalSucess, setModalSucess] = useState<IModalSucess>(
    {} as IModalSucess,
  );

  const history = useHistory();

  const openModalNaver = useCallback((naverParam: INaver) => {
    setIsModalNaver(true);
    setNaver(naverParam);
  }, []);

  const closeModalNaver = useCallback(() => {
    setIsModalNaver(false);
  }, []);

  const openModalSucess = useCallback(({ title, message }: IModalSucess) => {
    setModalSucess({ title, message });
    setIsModalSucess(true);
  }, []);

  const closeModalSucess = useCallback(() => {
    setIsModalSucess(false);
    setModalSucess({} as IModalSucess);
    history.push('/home');
  }, [history]);

  const openModalExclude = useCallback((id: string) => {
    setIsModalNaver(false);
    setIsModalSucess(false);
    setIdNaverExclude(id);
    setIsModalExclude(true);
  }, []);

  const closeModalExclude = useCallback(() => {
    setIsModalExclude(false);
  }, []);

  const modalExclude = useCallback(() => {
    setIdNaverExclude('');
    setIsNaverExclude((value) => !value);
  }, []);

  return (
    <NaverContext.Provider
      value={{
        isModalNaver,
        naver,
        modalSucess,
        isModalExclude,
        idNaverExclude,
        isNaverExclude,
        openModalNaver,
        closeModalNaver,
        openModalSucess,
        closeModalSucess,
        openModalExclude,
        closeModalExclude,
        modalExclude,
      }}
    >
      {children}
      {isModalSucess && <ModalSucess />}
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
