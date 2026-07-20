import styled from 'styled-components';

export const Container = styled.footer`
  display: grid;
  grid-template-columns: 32rem 9.75rem 9.75rem 18.125rem;
  justify-content: space-between;
  width: 100%;
  height: 13rem;
  padding: 2.25rem 12.8125rem 2rem 17.5rem;
  background: #fafdff;

  @media (max-width: 90rem) {
    grid-template-columns: 1.7fr 1fr 1fr;
    padding: 2rem 4rem;
  }
`;

export const Company = styled.div`
  h2 {
    margin: 0 0 1.5rem;
    font-size: 2rem;
    font-weight: 800;
  }

  p {
    margin: 0 0 1rem;
    color: #7a7c82;
    font-size: 1rem;
    font-weight: 600;
    white-space: nowrap;
  }
`;

export const Menu = styled.div`
  h3 {
    margin: 1rem 0 1.25rem;
    font-size: 1.5rem;
    font-weight: 600;
  }

  a {
    display: block;
    margin-top: 1rem;
    color: #7a7c82;
    font-size: 1rem;
    font-weight: 600;
    text-decoration: none;
  }
`;

export const Social = styled.div`
  align-self: end;

  div {
    display: flex;
    gap: 0.75rem;
    margin-bottom: 1rem;
  }

  img {
    width: 1.5rem;
    height: 1.5rem;
  }

  p {
    margin: 0;
    color: #7a7c82;
    font-size: 0.875rem;
    white-space: nowrap;
  }

  @media (max-width: 90rem) {
    display: none;
  }
`;
