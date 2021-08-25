import { useReducer } from "react";
import { createContainer, createReducer, createAction } from "utils/context";

import { ListItemType } from "typings/listItem";

const initialState = {
  list: [],
};
const actions = {
  addList: createAction("ADD_LIST"),
};

const appReducer = createReducer({
  [actions.addList.toString()]: (state, { payload }) => ({
    ...state,
    list: payload,
  }),
});

export const { useContext: useApp, Provider: AppProvider } = createContainer(
  () => {
    const [state, dispatch] = useReducer(appReducer, initialState);

    const addList = async (obj: ListItemType) => {
      dispatch(actions.addList([...state.list, obj]));
    };
    const deleteItem = async (id: string) => {
      const data = state.list.filter((obj: ListItemType) => obj?.id !== id);
      dispatch(actions.addList(data));
    };
    const checkedItem = async (id: string) => {
      const data = state.list.map((item: ListItemType, index: any) => {
        if (item.id === id) {
          return { ...item, checked: true };
        } else {
          return item;
        }
      });
      dispatch(actions.addList(data));
    };

    return {
      state,
      actions: {
        addList,
        deleteItem,
        checkedItem,
      },
    };
  }
);

export default useApp;
