import React from "react";
import { TrashIcon, CheckIcon } from "@heroicons/react/solid";

import AddItemModal from "organisms/AddItemModal";
import useApp from "context/AppContext";
import useVisibleState from "hooks/useVisibleStates";

export const ListSection = () => {
  const {
    state: { list },
    actions: { deleteItem, checkedItem },
  } = useApp();
  const { visible, hide, show } = useVisibleState(false);

  return (
    <>
      <div className="m-28 px-4 sm:px-8 pb-4 pt-3 overflow-x-auto relative">
        <>
          {visible && <AddItemModal hide={hide} />}
          <div className="flex flex-wrap sm:justify-between items-center font-bold my-3 w-full">
            List
            <button
              onClick={show}
              className="flex justify-center items-center  text-xs font-medium rounded shadow-sm  hover:border-primary border-2 font-bold px-4  py-2  rounded-md hover:font-bold  focus:outline-none text-sm px-4 px-16  py-3 font-bold  bg-primary text-white  "
            >
              Add New
            </button>
          </div>

          <div className="inline-block min-w-full shadow rounded-lg overflow-hidden ">
            <table className="min-w-full leading-normal">
              <thead>
                <tr>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Id
                  </th>

                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Name
                  </th>

                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Desc
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="font-medium">
                {list?.length === 0 ? (
                  <tr className="h-96">
                    <td
                      colSpan={5}
                      className="text-center font-bold text-gray-500"
                    >
                      No result
                    </td>
                  </tr>
                ) : (
                  <>
                    {list?.map((val: any) => (
                      <tr
                        key={val?.id}
                        className={val?.checked ? "line-through" : "none"}
                      >
                        <td className="px-5 py-3 border-b border-gray-200 bg-white text-sm">
                          <div>
                            <p className="text-gray-900 whitespace-no-wrap">
                              {val?.id}
                            </p>
                          </div>
                        </td>
                        <td className="px-5 py-3 border-b border-gray-200 bg-white text-sm">
                          <div>
                            <p className="capitalize text-gray-900 whitespace-no-wrap">
                              {val?.name}
                            </p>
                          </div>
                        </td>

                        <td className="px-5 py-3 border-b border-gray-200 bg-white text-sm">
                          <div>
                            <p className="text-gray-900 whitespace-no-wrap">
                              {val?.desc}
                            </p>
                          </div>
                        </td>

                        <td className="py-3 border-b border-gray-200 bg-white text-sm">
                          <div className="flex ">
                            <TrashIcon
                              className="ml-5 w-5 h-6 text-primary cursor-pointer shadow hover:shadow-corner"
                              onClick={() => deleteItem(val.id)}
                            />
                            {!val?.checked && (
                              <CheckIcon
                                className="ml-5 w-5 h-6 text-primary cursor-pointer shadow hover:shadow-corner"
                                onClick={() => checkedItem(val.id)}
                              />
                            )}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </>
                )}
              </tbody>
            </table>
          </div>
        </>
      </div>
    </>
  );
};
