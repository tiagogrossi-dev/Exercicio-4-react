import styled from "styled-components";
import { spacings } from "./mixins";
import { variables } from "./variables";

export const MovieContainer = styled.div`
	border: 1px solid ${variables.primaryColor};
	border-radius: 5px;
	${spacings("15px", "10px")}
`;