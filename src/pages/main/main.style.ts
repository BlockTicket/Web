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
  width: 100%;
  height: 78.375rem;
  flex-shrink: 0;
`;

export const Advertisement = styled.section`
  position: relative;
  width: 100%;
  height: 37.5rem;
  overflow: hidden;
  border-top: 1px solid #25283b;
  border-bottom: 1px solid #25283b;
  background: #e2e2e2;
`;

export const AdArrow = styled.button<{ $right?: boolean }>`
  position: absolute;
  top: 50%;
  ${({ $right }) => ($right ? 'right: 2.5625rem;' : 'left: 2.5625rem;')}
  width: 1.125rem;
  height: 3.75rem;
  padding: 0;
  border: 0;
  background: transparent;
  transform: translateY(-50%);
  cursor: pointer;

  img {
    display: block;
    width: 100%;
    height: 100%;
  }
`;

export const Notice = styled.section`
  display: grid;
  grid-template-columns: 1fr 1px 1fr;
  align-items: center;
  width: 100%;
  height: 5rem;
  padding: 0 9.375rem;
  background: #f7f7f8;
`;

export const NoticeItem = styled.div`
  display: flex;
  align-items: center;
  min-width: 0;

  strong {
    min-width: 6.6875rem;
    color: #484848;
    font-size: 1.25rem;
    font-weight: 600;
  }

  span {
    overflow: hidden;
    color: #686868;
    font-size: 1rem;
    font-weight: 600;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  time {
    margin-left: 1rem;
    color: #7a7c82;
    font-size: 0.75rem;
    white-space: nowrap;
  }

  &:last-child {
    padding-left: 3rem;
  }
`;

export const NoticeDivider = styled.div`
  width: 1px;
  height: 2rem;
  background: #c7c8cc;
`;

export const Popular = styled.section`
  width: calc(100% - 12.5rem);
  height: 24.625rem;
  margin: 5rem auto 0;
`;

export const PopularHeader = styled.div`
  display: flex;
  align-items: flex-start;
  width: calc(100% - 10.5rem);
  height: 3.75rem;
  margin: 0 auto;

  h2 {
    margin: 0;
    color: #000;
    font-size: 1.875rem;
    font-weight: 800;
  }

  img {
    width: 1.125rem;
    height: 1.125rem;
    margin: 0.625rem 0 0 0.5rem;
  }

  a {
    margin: 2.1875rem 0 0 auto;
    color: #686868;
    font-size: 1.125rem;
    font-weight: 600;
    text-decoration: none;
  }
`;

export const Carousel = styled.div`
  position: relative;
  width: 100%;
  height: 20.875rem;
`;

export const CarouselArrows = styled.img`
  position: absolute;
  top: 6.6875rem;
  left: 4.125rem;
  width: calc(100% - 8.25rem);
  height: 3.75rem;
`;

export const CardList = styled.div`
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: repeat(7, 10.75rem);
  gap: 2.25rem;
  width: max-content;
  margin: 0 auto;

  @media (max-width: 100rem) {
    max-width: calc(100% - 10rem);
    overflow: hidden;
  }
`;

export const Card = styled.article`
  width: 10.75rem;
  color: #4d4d4d;

  .poster {
    width: 100%;
    height: 16rem;
    border-radius: 0.5rem;
    background: #e1e1e1;
  }

  h3 {
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
