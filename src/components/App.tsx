import React from "react";

import {Container} from "../styledComponents/CommonComponents";
import NewSkillsForm from "./NewSkillsForm";
import SkillsList from "./SkillsList";
import Loading from "./Loading";
import {useAppSelector} from "../store/hook";

const App: React.FC = () => {
    const {loading} = useAppSelector(state => state.skills);

    return (
        <Container>
            <NewSkillsForm/>
            <SkillsList/>

            {loading && <Loading/>}
        </Container>
    )
};

export default App;
