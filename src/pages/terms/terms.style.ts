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
  width: 100%;
  height: 58.5rem;
`;

export const Title = styled.h1`
  position: absolute;
  top: 6.25rem;
  left: 17.5rem;
  margin: 0;
  color: #000;
  font-size: 2rem;
  font-weight: 800;
  line-height: 2rem;

  @media (max-width: 75rem) {
    left: 2rem;
  }
`;

export const Content = styled.div`
  position: absolute;
  top: 10.5rem;
  left: 50%;
  width: min(65.625rem, calc(100% - 4rem));
  transform: translateX(-50%);
`;

export const SearchForm = styled.form`
  position: relative;
  width: 100%;
  height: 2.75rem;

  input {
    width: 100%;
    height: 100%;
    padding: 0 3rem 0 0.9375rem;
    border: 1px solid #a6a7ae;
    border-radius: 0.75rem;
    outline: none;
    background: transparent;
    color: #25283b;
    font-size: 1rem;
    font-weight: 500;
  }

  input::placeholder {
    color: #a6a7ae;
  }

  button {
    position: absolute;
    top: 50%;
    right: 0.9375rem;
    width: 1.25rem;
    height: 1.25rem;
    padding: 0;
    border: 0;
    background: transparent;
    transform: translateY(-50%);
    cursor: pointer;
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
  }
`;

export const TermsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  margin: 3rem 0 0;
  padding: 0;
  list-style: none;
`;

export const TermsItem = styled.li`
  height: 2.625rem;

  a {
    display: block;
    color: #25283b;
    font-size: 1.25rem;
    font-weight: 700;
    line-height: 1.25rem;
    text-decoration: none;
  }

  time {
    display: block;
    margin-top: 0.6875rem;
    color: #a6a7ae;
    font-size: 0.875rem;
    font-weight: 500;
    line-height: 0.875rem;
  }
`;

export const DetailBody = styled.main`
  position: relative;
  width: 100%;
  height: 177.5rem;
`;

export const BackLink = styled.a`
  position: absolute;
  top: 8.375rem;
  left: 27.1875rem;
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

export const DetailTitle = styled.h2`
  position: absolute;
  top: 11.75rem;
  left: 27.1875rem;
  margin: 0;
  color: #000;
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1.5rem;

  @media (max-width: 75rem) {
    left: 2rem;
  }
`;

export const Article = styled.article`
  position: absolute;
  top: 17.25rem;
  left: 50%;
  width: min(61.4375rem, calc(100% - 4rem));
  color: #000;
  font-size: 1.25rem;
  font-weight: 500;
  line-height: 1.59;
  transform: translateX(-50%);

  section {
    margin-bottom: 1.9875rem;
  }

  h3 {
    margin: 0;
    font-size: inherit;
    font-weight: 700;
    line-height: inherit;
  }

  p {
    margin: 0;
  }

  ol {
    margin: 0;
    padding-left: 1.75rem;
  }
`;
