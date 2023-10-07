import React from "react";
import { AiFillEdit } from "react-icons/ai";
import { RiDeleteBin6Line } from "react-icons/ri";
const Table = () => {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg px-2 mx-auto mt-1">
      <table className="w-full text-sm text-left text-black dark:text-black">
        <thead className="text-xs text-black bg-gray-50 dark:bg-gray-300 dark:text-black">
          <tr>
            <th scope="col" className="p-4">
              <div className="flex items-center">
                <label htmlFor="checkbox-all" className="sr-only">
                  checkbox
                </label>
              </div>
            </th>
            <th scope="col" className="px-6 py-3">
              SI No
            </th>
            <th scope="col" className="px-6 py-3">
              Project
            </th>
            <th scope="col" className="px-6 py-3">
              Location
            </th>
            <th scope="col" className="px-6 py-3">
              Date
            </th>
            <th scope="col" className="px-6 py-3">
              Time
            </th>
            <th scope="col" className="px-6 py-3">
              Incident Type
            </th>
            <th scope="col" className="px-6 py-3">
              Severity Type
            </th>
            <th scope="col" className="px-6 py-3">
              Potential Rate
            </th>
            <th scope="col" className="px-6 py-3">
              Description of Incident
            </th>
            <th scope="col" className="px-6 py-3">
              Description of Damage
            </th>
            <th scope="col" className="px-6 py-3">
              No of Injured
            </th>
            <th scope="col" className="px-6 py-3">
              Names of injured
            </th>
            <th scope="col" className="px-6 py-3">
              Immediate causes
            </th>
            <th scope="col" className="px-6 py-3">
              Underlying causes
            </th>
            <th scope="col" className="px-6 py-3">
              Edit
            </th>
            <th scope="col" className="px-6 py-3">
              Delete
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white border-b dark:bg-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-400">
            <td className="w-4 p-4">
              <div className="flex items-center">
                <input
                  id="checkbox-table-1"
                  type="checkbox"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label htmlFor="checkbox-table-1" className="sr-only">
                  checkbox
                </label>
              </div>
            </td>
            <td className="px-6 py-4">1</td>
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
            >
              Apple MacBook Pro 17"
            </th>
            <td className="px-6 py-4">Silver</td>
            <td className="px-6 py-4">Laptop</td>
            <td className="px-6 py-4">$2999</td>
            <td className="px-6 py-4">$2999</td>
            <td className="px-6 py-4">$2999</td>
            <td className="px-6 py-4">$2999</td>
            <td className="px-6 py-4">$2999</td>
            <td className="px-6 py-4">$2999</td>
            <td className="px-6 py-4">$2999</td>
            <td className="px-6 py-4">$2999</td>
            <td className="px-6 py-4">$2999</td>
            <td className="px-6 py-4">$2999</td>
            <td className="px-6 py-4">
              <AiFillEdit />
            </td>
            <td className="px-6 py-4">
              <RiDeleteBin6Line />
            </td>
          </tr>
          <tr className="bg-white border-b dark:bg-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-400">
            <td className="w-4 p-4">
              <div className="flex items-center">
                <input
                  id="checkbox-table-2"
                  type="checkbox"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label htmlFor="checkbox-table-2" className="sr-only">
                  checkbox
                </label>
              </div>
            </td>
            <td className="px-6 py-4">2</td>
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
            >
              Microsoft Surface Pro
            </th>
            <td className="px-6 py-4">White</td>
            <td className="px-6 py-4">Laptop PC</td>
            <td className="px-6 py-4">$1999</td>
            <td className="px-6 py-4">$2999</td>
            <td className="px-6 py-4">$2999</td>
            <td className="px-6 py-4">$2999</td>
            <td className="px-6 py-4">$2999</td>
            <td className="px-6 py-4">$2999</td>
            <td className="px-6 py-4">$2999</td>
            <td className="px-6 py-4">$2999</td>
            <td className="px-6 py-4">$2999</td>
            <td className="px-6 py-4">$2999</td>
            <td className="px-6 py-4">
              <AiFillEdit />
            </td>
            <td className="px-6 py-4">
              <RiDeleteBin6Line />
            </td>
          </tr>
          <tr className="bg-white border-b dark:bg-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-400">
            <td className="w-4 p-4">
              <div className="flex items-center">
                <input
                  id="checkbox-table-3"
                  type="checkbox"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label htmlFor="checkbox-table-3" className="sr-only">
                  checkbox
                </label>
              </div>
            </td>
            <td className="px-6 py-4">3</td>
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
            >
              Magic Mouse 2
            </th>
            <td className="px-6 py-4">Black</td>
            <td className="px-6 py-4">Accessories</td>
            <td className="px-6 py-4">$99</td>
            <td className="px-6 py-4">$2999</td>
            <td className="px-6 py-4">$2999</td>
            <td className="px-6 py-4">$2999</td>
            <td className="px-6 py-4">$2999</td>
            <td className="px-6 py-4">$2999</td>
            <td className="px-6 py-4">$2999</td>
            <td className="px-6 py-4">$2999</td>
            <td className="px-6 py-4">$2999</td>
            <td className="px-6 py-4">$2999</td>
            <td className="px-6 py-4">
              <AiFillEdit />
            </td>
            <td className="px-6 py-4">
              <RiDeleteBin6Line />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
