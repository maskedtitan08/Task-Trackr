'use client';

import { useMutation } from "@/app/liveblocks.config";
import { LiveObject } from "@liveblocks/core";
import uniqid from "uniqid";

export default function NewColumnForm() {

  const addColumn = useMutation(({ storage }, columnName) => {
    return storage.get('columns').push(new LiveObject({
      name: columnName,
      id: uniqid.time(),
      index: 9999,
    }));
  }, []);

  function handleNewColumn(ev) {
    ev.preventDefault();
    const input = ev.target.querySelector('input');
    if (input) {
      const columnName = input.value;
      addColumn(columnName);
      input.value = '';
    }
  }
  return (
    <form onSubmit={handleNewColumn} className=" w-1/3 rounded-lg">
      <div className="flex items-center">
        <label className="flex-shrink-0 mr-2">
          <span className="text-gray-600 block">Column name:</span>
        </label>
        <input
          type="text"
          placeholder="New column name"
          className="flex-grow p-2 border rounded-md "
        />
        <button type="submit" className="bg-[#4A5696] text-white p-2 px-4 border-2 rounded-xl border-white ml-2">
          Create
        </button>
      </div>
    </form>
  );
}
