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
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-right: 16px;
    object-fit: cover;
    border: 1pt solid;
`;

const AuthorInfoWrapper = styled.span`
    display: flex;
    flex-direction: column;
`;

const AuthorName = styled.span`
    font-weight: bold;
    font-size: 14px;
    vertical-align: top;
`;

const Score = styled.span`
    font-size: 14px;
    font-weight: bold;
`;
