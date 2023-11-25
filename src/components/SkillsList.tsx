import React from "react";

import SkillsItem from './SkillsItem';
import {useAppSelector} from "../store/hook";


const SkillsList: React.FC = () => {
    const skills =  useAppSelector(state => state.skills.list)

    return (
        <>
            {skills.map((item) => (
                <SkillsItem
                    key={item.id}
                    {...item}
                />
            ))}
        </>
    )
};

export default SkillsList;
