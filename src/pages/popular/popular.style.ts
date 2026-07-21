import styled from 'styled-components';

export const Page = styled.div`
  width: 100%;
  max-width: 120rem;
  min-width: 20rem;
  margin: 0 auto;
  background: #fafdff;
  color: #25283b;
`;

export const Body = styled.main`
  position: relative;
  width: calc(100% - 12.5rem);
  height: 110.875rem;
  margin: 0 6.25rem;

  @media (max-width: 75rem) {
    width: 100%;
    height: auto;
    min-height: 110.875rem;
    margin: 0;
    padding: 0 2rem 6rem;
  }
`;

export const BackLink = styled.a`
  position: absolute;
  top: 6.25rem;
  left: 7.3125rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: #7f7f7f;
  font-size: 1.125rem;
  font-weight: 300;
  text-decoration: none;

  img {
    width: 0.625rem;
    height: 1.125rem;
  }

  @media (max-width: 75rem) {
    left: 2rem;
  }
`;

export const Title = styled.h1`
  position: absolute;
  top: 9.625rem;
  left: 7.3125rem;
  margin: 0;
  color: #000;
  font-size: 1.75rem;
  font-weight: 800;
  line-height: 1.75rem;

  @media (max-width: 75rem) {
    left: 2rem;
  }
`;

export const Grid = styled.div`
  position: absolute;
  top: 14.375rem;
  left: 11.4375rem;
  display: grid;
  grid-template-columns: repeat(7, 10.75rem);
  gap: 3rem 2.25rem;

  @media (max-width: 110rem) {
    right: 2rem;
    left: 2rem;
    grid-template-columns: repeat(auto-fit, 10.75rem);
    justify-content: center;
  }
`;

export const Card = styled.article`
  width: 10.75rem;
  height: 20.875rem;
  color: #4d4d4d;

  .poster {
    width: 100%;
    height: 16rem;
    border-radius: 0.5rem;
    background: #e1e1e1;
  }

  h2 {
    display: -webkit-box;
    height: 2.375rem;
    margin: 0.25rem 0 0;
    overflow: hidden;
    font-size: 1rem;
    font-weight: 700;
    line-height: 1.1875;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }

  p,
  time {
    display: block;
    margin: 0.125rem 0 0;
    overflow: hidden;
    font-size: 0.75rem;
    font-weight: 500;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;
