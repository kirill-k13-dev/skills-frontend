import React from "react";

import {Container} from "../styledComponents/CommonComponents";
import NewSkillsForm from "./NewSkillsForm";
import SkillsList from "./SkillsList";

const App: React.FC = () => {
    return (
        <Container>
            <NewSkillsForm/>
            <SkillsList/>
        </Container>
    )
};

export default App;
