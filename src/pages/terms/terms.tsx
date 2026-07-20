import searchIcon from '@/assets/figma/search.svg';
import Footer from '../../components/Footer/Footer.tsx';
import Header from '../../components/Header/Header.tsx';
import * as Terms from './terms.style.ts';

const terms = [
  '개인 사용자 서비스 이용약관',
  '법인 사용자 서비스 이용약관',
  '미성년 사용자 서비스 이용약관',
  '개인정보처리방침',
  '마케팅 정보 수신 동의',
  '제3자 정보 제공 동의',
  '위치기반 서비스 이용약관',
];

export default function TermsScreen() {
  return (
    <Terms.Page>
      <Header variant="simple" />

      <Terms.Body>
        <Terms.Title>서비스 이용약관</Terms.Title>
        <Terms.Content>
          <Terms.SearchForm role="search">
            <input aria-label="약관 검색" placeholder="검색" />
            <button type="submit" aria-label="검색">
              <img src={searchIcon} alt="" />
            </button>
          </Terms.SearchForm>

          <Terms.TermsList>
            {terms.map((term, index) => (
              <Terms.TermsItem key={term}>
                <a href={index === 0 ? '/terms/personal' : `#terms-${index + 1}`}>{term}</a>
                <time dateTime="2026-07-18">2026. 07. 18.</time>
              </Terms.TermsItem>
            ))}
          </Terms.TermsList>
        </Terms.Content>
      </Terms.Body>

      <Footer />
    </Terms.Page>
  );
}
