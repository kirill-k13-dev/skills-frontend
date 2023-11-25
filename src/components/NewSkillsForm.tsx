import React, {useState, useEffect, useRef} from "react";
import {styled} from "styled-components";

import {FlexContainer, SubmitButton} from "../styledComponents/CommonComponents";
import TextInput from "../styledComponents/TextInput";
import {useAppDispatch} from "../store/hook";
import {addSkill} from "../store/skillSlice";


const FlexContainerStyled = styled(FlexContainer)`
  margin-top: 20px;
`;

const ButtonBlock = styled.div`
  margin-left: 15px;
`;

const NewSkillsForm:React.FC = () => {
    const [value, setValue] = useState('');

    const inputRef = useRef<HTMLInputElement>(null);
    const dispatch = useAppDispatch();

    useEffect(()=>{
        inputRef.current?.focus();
    }, []);

    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setValue(e.target.value);
    };

    const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
        if (e.key === 'Enter') {
            dispatch(addSkill(value));
            setValue('');
        }
    };

    const handleAdd = () => {
        if (!value || !value.trim()) return;

        dispatch(addSkill(value.trim()));
        setValue('');
    };

    return (
            <FlexContainerStyled>
                <TextInput
                    required={false}
                    inputRef={inputRef}
                    type="text"
                    onChange={handleChange}
                    onKeyDown={handleKeyDown}
                    value={value}
                    label={'New Skill'}
                />
                <ButtonBlock>
                    <SubmitButton
                        onClick={handleAdd}
                        $color={'#fff'}
                        $backgroundColor={'#000000'}
                    >
                        Add Skill
                    </SubmitButton>
                </ButtonBlock>
            </FlexContainerStyled>
    )
};

export default NewSkillsForm;
