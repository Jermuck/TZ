import { createEvent, createStore } from "effector";

export const setMessage = createEvent<{isOpen: boolean, value: string}>();

export const $message = createStore<{isOpen: boolean, value: string}>({isOpen: false, value: ''})
    .on(setMessage, (_, data) => setMessage(data));

