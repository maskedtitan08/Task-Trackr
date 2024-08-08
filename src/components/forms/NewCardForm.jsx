'use client';
import { useMutation } from "@/app/liveblocks.config";
import { LiveObject } from "@liveblocks/core";
import uniqid from "uniqid";

export default function NewCardForm({ columnId }) {
  const addCard = useMutation(({ storage }, cardName) => {
    return storage.get('cards').push(new LiveObject({
      name: cardName,
      id: uniqid.time(),
      columnId: columnId,
      index: 9999,
    }));
  }, [columnId]);

  function handleNewCardFormSubmit(ev) {
    ev.preventDefault();
    const input = ev.target.querySelector('input');
    if (input) {
      const cardName = input.value;
      addCard(cardName);
      input.value = '';
    }
  }

  return (
    <form onSubmit={handleNewCardFormSubmit}>
      <input type="text" placeholder="card name"/>
    </form>
  );
}
