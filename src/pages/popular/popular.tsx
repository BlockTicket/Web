import backIcon from '@/assets/figma/back.svg';
import Footer from '../../components/Footer/Footer.tsx';
import Header from '../../components/Header/Header.tsx';
import * as Popular from './popular.style.ts';

const performances = Array.from({ length: 28 }, (_, index) => ({
  id: index + 1,
  title: 'AKANE LIZE : OVT. FIRST SOLO CONCERT',
  venue: '고려대학교 화정체육관',
  date: '2026. 07. 11.',
}));

export default function PopularScreen() {
  return (
    <Popular.Page>
      <Header />
      <Popular.Body>
        <Popular.BackLink href="/">
          <img src={backIcon} alt="" />
          뒤로가기
        </Popular.BackLink>
        <Popular.Title>지금 인기 있는 공연</Popular.Title>
        <Popular.Grid>
          {performances.map((performance) => (
            <Popular.Card key={performance.id}>
              <div className="poster" aria-hidden="true" />
              <h2>{performance.title}</h2>
              <p>{performance.venue}</p>
              <time>{performance.date}</time>
            </Popular.Card>
          ))}
        </Popular.Grid>
      </Popular.Body>
      <Footer />
    </Popular.Page>
  );
}
