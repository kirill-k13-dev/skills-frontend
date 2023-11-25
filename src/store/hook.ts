import {useDispatch, useSelector, TypedUseSelectorHook} from 'react-redux';
import type {RootSate, AppDispatch} from "./index";


/*
* If you want to get the Dispatch type from your store, you can extract it after creating the store.
* It is recommended to give the type a different name like AppDispatch to prevent confusion, as the type name Dispatch is usually overused.
* You may also find it to be more convenient to export a hook like useAppDispatch shown below, then using it wherever you'd call useDispatch.
*
* Source: https://redux-toolkit.js.org/usage/usage-with-typescript#getting-the-dispatch-type
* */
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootSate> = useSelector;
