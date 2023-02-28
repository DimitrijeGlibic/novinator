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
    padding: 32px 16px 24px 16px;
`;

const StyledImage = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 16px;
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
