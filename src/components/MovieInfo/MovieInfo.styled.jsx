import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const MovieCard = styled.div`
    display: flex;
    gap: 32px;
    margin-top: 40px;
    margin-bottom: 40px;
`;

export const Poster = styled.img`
    width: 320px;
`;

export const Info = styled.div`
    padding: 16px;
`;

export const Title = styled.h2`
    font-size: 36px;
    margin-bottom: 48px;
`;

export const Text = styled.p`
    font-size: 20px;
    margin-bottom: 24px;
`;

export const Subtitle = styled.h3`
    font-size: 24px;
    margin-bottom: 16px;
`;

//MovieDetails styles

export const BackLink = styled(Link)`
    background-color: #002077;
    color: #ffffff;
    padding: 8px 24px;
    border-radius: 8px;
    margin-bottom: 40px;
`;

export const AdditionalInfo = styled.ul`
    display: flex;
    gap: 40px;
    margin-bottom: 40px;
`;

export const InfoLink = styled(Link)`
    background-color: #002077;
    color: #ffffff;
    padding: 8px 24px;
    border-radius: 8px;
`;