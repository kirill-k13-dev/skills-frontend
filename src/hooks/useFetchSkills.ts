import {useEffect} from "react";

import {useAppDispatch} from "../store/hook";
import {fetchSkills} from "../store/skillSlice";


export default function useFetchSkills() {
    const dispatch = useAppDispatch();

    useEffect(()=> {
        dispatch(fetchSkills());
    }, [dispatch])
};
