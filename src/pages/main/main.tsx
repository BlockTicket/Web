import { useState } from 'react';
import adLeftIcon from '@/assets/figma/ad-left.svg';
import adRightIcon from '@/assets/figma/ad-right.svg';
import carouselArrows from '@/assets/figma/card-arrows.svg';
import infoIcon from '@/assets/figma/info.svg';
import Footer from '../../components/Footer/Footer.tsx';
import Header from '../../components/Header/Header.tsx';
import * as Main from './main.style.ts';

const PAGE_SIZE = 7;

const performances = Array.from({ length: PAGE_SIZE * 2 }, (_, index) => {
  const isSecondPage = index >= PAGE_SIZE;

  return {
    id: index + 1,
    title: isSecondPage
      ? 'King Gnu CEN+RAL Tour 2026 in Seoul'
      : 'AKANE LIZE : OVT. FIRST SOLO CONCERT',
    venue: isSecondPage ? '고척스카이돔' : '고려대학교 화정체육관',
    date: isSecondPage ? '2026. 08. 22.' : '2026. 07. 11.',
  };
});

export default function MainScreen() {
  const [popularPage, setPopularPage] = useState(0);
  const pageCount = Math.ceil(performances.length / PAGE_SIZE);
  const visiblePerformances = performances.slice(
    popularPage * PAGE_SIZE,
    (popularPage + 1) * PAGE_SIZE,
  );

  const movePopularPage = (direction: -1 | 1) => {
    setPopularPage((currentPage) => (
      (currentPage + direction + pageCount) % pageCount
    ));
  };

  return (
    <Main.Page>
      <Header />

      <Main.Body>
        <Main.Advertisement aria-label="광고 슬라이드">
          <Main.AdArrow type="button" aria-label="이전 광고">
            <img src={adLeftIcon} alt="" />
          </Main.AdArrow>
          <Main.AdArrow $right type="button" aria-label="다음 광고">
            <img src={adRightIcon} alt="" />
          </Main.AdArrow>
        </Main.Advertisement>

        <Main.Notice id="notice">
          <Main.NoticeItem>
            <strong>공지사항</strong>
            <span>개인정보 처리방침 및 사용자 이용약관 개정</span>
            <time dateTime="2026-06-22">2026. 06. 22.</time>
          </Main.NoticeItem>
          <Main.NoticeDivider />
          <Main.NoticeItem>
            <strong>안내</strong>
            <span>King Gnu CEN+RAL Tour 2026 in Seoul 티켓 교환 안내</span>
            <time dateTime="2026-06-19">2026. 06. 19.</time>
          </Main.NoticeItem>
        </Main.Notice>

        <Main.Popular id="tickets">
          <Main.PopularHeader>
            <h2>지금 인기 있는 공연</h2>
            <img src={infoIcon} alt="" />
            <a href="/performances/popular">더보기</a>
          </Main.PopularHeader>
          <Main.Carousel>
            <Main.CarouselArrows src={carouselArrows} alt="" />
            <Main.CarouselButton
              type="button"
              aria-label="이전 인기 공연"
              onClick={() => movePopularPage(-1)}
            />
            <Main.CarouselButton
              $right
              type="button"
              aria-label="다음 인기 공연"
              onClick={() => movePopularPage(1)}
            />
            <Main.CardList>
              {visiblePerformances.map((performance) => (
                <Main.Card key={performance.id}>
                  <div className="poster" aria-hidden="true" />
                  <h3>{performance.title}</h3>
                  <p>{performance.venue}</p>
                  <time>{performance.date}</time>
                </Main.Card>
              ))}
            </Main.CardList>
            <Main.PageStatus aria-live="polite">
              {popularPage + 1} / {pageCount} 페이지
            </Main.PageStatus>
          </Main.Carousel>
        </Main.Popular>
      </Main.Body>

      <Footer />
    </Main.Page>
  );
}
