import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt } from '@fortawesome/free-solid-svg-icons';

const Author = ({ photo, name, score }) => {
    return (
        <AuthorWrapper>
            <StyledImage src={photo} />
            <AuthorInfoWrapper>
                <AuthorName>{name}</AuthorName>
                <Score>
                    <FontAwesomeIcon icon={faBolt} className="me-1 mt-1"/> {score}
                </Score>
            </AuthorInfoWrapper>
        </AuthorWrapper>
    );
};

export default Author;

const AuthorWrapper = styled.div`
    display: flex;
`;

const StyledImage = styled.img`
    width: 32px;
    height: 32px;
    border-radius: 50%;
    margin-right: 16px;
`;

const AuthorInfoWrapper = styled.span`
    display: flex;
    flex-direction: column;
`;

const AuthorName = styled.span`
    font-weight: bold;
    font-size: 11px;
    vertical-align: top;
`;

const Score = styled.span`
    font-size: 11px;
    font-weight: bold;
`;
