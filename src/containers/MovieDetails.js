/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Logo from '../components/Logo';

const MovieDetails = ({ movieData, handleSearch }) => {

    return (
        <Wrapper>
            <RowHeader>
                <Logo/>
                <SearchWrap onClick={handleSearch}>
                    <SearchBlock>
                        <SearchCircle />
                        <SearchRectangle />
                    </SearchBlock>
                </SearchWrap>
            </RowHeader>
            <Row>
                <Poster image={movieData.poster_path} />
                <MovieInfo>
                    <MovieInfoCol>
                        <Title>{movieData.title}</Title>
                        <Rating>{movieData.vote_average}</Rating>
                    </MovieInfoCol>
                    <Genre>{movieData.genres.join(' ')}</Genre>
                    <MovieInfoCol>
                        <ReleaseDate>{movieData.release_date}</ReleaseDate>
                        <Runtime>{movieData.runtime} min</Runtime>
                    </MovieInfoCol>
                    <Overview>{movieData.overview}</Overview>
                </MovieInfo>
            </Row>
        </Wrapper>
    );
};

const Wrapper = styled.section`
    position: absolute; 
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 460px;
    box-sizing: border-box;
    padding: 30px;
    z-index: 5;
    background: #232323;
    transition: all 0.8s ease;
`;

const RowHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 10px 20px 10px;
`;

const Row = styled.div`
    display: flex;
    padding: 10px;
`;

const SearchWrap = styled.div`
    position: relative;
    width: 40px;
    height: 30px;
`;

const SearchBlock = styled.div`
    position: relative;
    width: 20px;
    margin: 0 auto;
    padding: 10px 0;
    text-align: center;
`;

const SearchCircle = styled.div`
    width: 10px;
    height: 10px;
    border: 4px solid #f65261;
    border-radius: 50%;
`;

const SearchRectangle = styled.div`
    position: absolute;
    right: 15px;
    bottom: 10px;
    width: 12px;
    transform: rotate(140deg);
    border: 1.5px solid #f65261;
`;

const Poster = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 30%;
    height: 340px;
    background-image: url(${props => props.image});
    background-repeat: no-repeat;
    background-size: contain;
`;

const MovieInfo = styled.div`
    display: flex;
    flex-direction: column;
    color: #fff;
    padding: 16px 100px 16px 40px;
`;

const MovieInfoCol = styled.div`
    display: flex;
    align-items: center;
`;

const Title = styled.h2`
    margin: 0;
    padding-right: 20px;
    font-size: 3.5rem;
    font-weight: 400;
    letter-spacing: 3px;
`;

const Rating = styled.p`
    margin: 0;
    padding: 14px;
    color: green;
    font-size: 1.5rem;
    border: 1px solid white;
    border-radius: 50%;
`;

const Genre = styled.p`
    margin: 0;
    padding: 10px 0;
`;

const ReleaseDate = styled.p`
    margin-right: 20px;
    color: #f65261;
    font-size: 1.6rem;
`;

const Runtime = styled.p`
    margin-right: 20px;
    color: #f65261;
    font-size: 1.6rem;
`;

const Overview = styled.p`
    font-size: 1.4rem;
    letter-spacing: 1.5px;
`;

MovieDetails.propTypes = {
    // eslint-disable-next-line react/forbid-prop-types
    movieData: PropTypes.object,
    handleSearch: PropTypes.func.isRequired
};

MovieDetails.defaultProps = {
    movieData: {
        image: 'https://cdn3.vectorstock.com/i/1000x1000/50/07/http-404-not-found-error-message-hypertext-vector-20025007.jpg',
    }
};

export default MovieDetails;
