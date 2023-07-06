import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {dispatchStore, foodStore} from "../store/Redicer";

export const useAppDispatch = () => useDispatch<dispatchStore>()
export const useAppSelector : TypedUseSelectorHook<foodStore> = useSelector