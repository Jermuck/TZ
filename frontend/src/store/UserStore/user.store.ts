import {createEvent, createStore} from "effector";
import {IUser} from "../../types/index.types";

export const setUser = createEvent<IUser | null>();

export const $user = createStore<IUser | null>(null).on(setUser, (_, data) => data)