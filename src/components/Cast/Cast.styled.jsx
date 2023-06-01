import styled from '@emotion/styled';

export const CastList = styled.ul`
    display: grid;
    /* max-width: calc(100vw - 48px); */
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
    grid-gap: 16px;
    margin-top: 0;
    margin-bottom: 0;
    padding: 0;
    padding-left: 32px;
    padding-right: 32px;
    list-style: none;
    margin-left: auto;
    margin-right: auto;
`;

export const ActorPhoto = styled.img`
    display: block;
    margin-left: auto;
    margin-right: auto;
    max-width: 100%;
    height: 240px;
    object-fit: cover;
`;

export const ActorName = styled.p`
    margin-top: 8px;
    font-size: 16px;
    font-weight: 500;
`;

export const Text = styled.p`
    margin-top: 8px;
`;

export const Message = styled.div`
    font-size: 24px;
    font-weight: 500;
`;