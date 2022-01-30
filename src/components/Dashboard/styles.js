import styled from "styled-components";

import { Box } from "@adminjs/design-system";

export const Card = styled(Box)`
    display: ${({flex}) => (flex ? 'flex': 'block')};
    color: ${({theme}) => theme.colors.grey100};
    text-decoration: none;
    border: 1px solid transparent;
    height: 100%;
    padding: 1rem 5px 5px;
    &:hover {
        border-color: ${({theme}) => theme.colors.primary100};
        box-shadow: ${({theme}) => theme.shadows.cardHover};
    }
`;
Card.defaultProps = {
    variant: 'white',
    boxShadow: 'card',
}