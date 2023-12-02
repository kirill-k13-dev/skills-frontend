import React from "react";
import {styled} from "styled-components";

import {useAppDispatch} from '../store/hook';
import {ISkill} from '../types/data';
import {SubmitButton} from "../styledComponents/CommonComponents";
import {removeSkill, toggleVerifySkill} from "../store/skillSlice";

const ItemStyled = styled.div`
  margin-top: 10px;
  display: flex;
  
  &>div {
    line-height: 2;
    padding-right: 10px;
  }
  
  &>input {
    height: 20px;
    width: 20px;
    margin-top: 6px;
  }
`;

const CheckboxStyled = styled.input`
  height: 20px;
  width: 20px;
  margin-top: 6px;
`;

const RemoveButton = styled(SubmitButton)`
  height: 20px;
  width: 20px;
  font-size: 18px;
  padding: 0;
  
  &:hover {
    font-size: 20px;
    font-weight: bold;
  }
`;


const SkillsItem: React.FC<ISkill> = ({id, title, verified}) => {
    const dispatch = useAppDispatch();

    return (
        <ItemStyled>
            <div>
                <CheckboxStyled
                    type="checkbox"
                    checked={verified}
                    onChange={() => dispatch(toggleVerifySkill(id))}
                />
            </div>
            <div>
                {title}
            </div>
            <div>
                <RemoveButton
                    onClick={() => dispatch(removeSkill(id))}
                    $color={'red'}
                    $backgroundColor={'transparent'}
                >
                    &times;
                </RemoveButton>
            </div>
        </ItemStyled>
    )
};

export default SkillsItem;
