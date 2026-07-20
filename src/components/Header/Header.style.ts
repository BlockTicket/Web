import styled from 'styled-components';

export const Container = styled.header<{ $simple: boolean }>`
  display: flex;
  align-items: center;
  width: 100%;
  height: 6.25rem;
  padding: ${({ $simple }) => ($simple ? '0 13.125rem 0 17.5rem' : '0 clamp(2rem, 14.58vw, 17.5rem)')};
  background: #f5f5f5;

  @media (max-width: 75rem) {
    padding: 0 2rem;
  }
`;

export const Logo = styled.a`
  flex: 0 0 auto;
  color: #000;
  font-size: 1.75rem;
  font-weight: 800;
  text-decoration: none;
`;

export const MainNav = styled.nav`
  display: flex;
  gap: 1.75rem;
  margin-left: 9.375rem;

  a {
    color: #272829;
    font-size: 1.25rem;
    font-weight: 700;
    text-decoration: none;
    white-space: nowrap;
  }

  @media (max-width: 75rem) {
    margin-left: 3rem;
  }

  @media (max-width: 55rem) {
    display: none;
  }
`;

export const SearchForm = styled.form`
  position: relative;
  width: min(32.5rem, 28vw);
  height: 3.25rem;
  margin-left: auto;

  input {
    width: 100%;
    height: 100%;
    padding: 0 3.25rem 0 1.6875rem;
    border: 1px solid #25283b;
    border-radius: 1.625rem;
    outline: none;
    color: #25283b;
    font: inherit;
  }

  input::placeholder {
    color: #a6a7ae;
    font-size: 1rem;
    font-weight: 300;
  }

  button {
    position: absolute;
    top: 50%;
    right: 1.25rem;
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

  @media (max-width: 42rem) {
    display: none;
  }
`;

export const AuthNav = styled.nav<{ $simple: boolean }>`
  display: flex;
  gap: 2.8125rem;
  margin-left: ${({ $simple }) => ($simple ? 'auto' : '4.5rem')};

  a {
    color: #272829;
    font-size: 1.25rem;
    font-weight: 700;
    text-decoration: none;
    white-space: nowrap;
  }

  @media (max-width: 75rem) {
    gap: 1.5rem;
    margin-left: ${({ $simple }) => ($simple ? 'auto' : '2rem')};
  }
`;
