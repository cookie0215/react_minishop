import { useContext } from 'react';
import AppStateContext from '../contexts/AppStateContext';

// 상태를 변경한 함수를 받아서 전달하는 커스텀 훅
const useActions = () => {
  const { addToOrder, remove, removeAll } = useContext(AppStateContext);
  return { addToOrder, remove, removeAll };
};

export default useActions;