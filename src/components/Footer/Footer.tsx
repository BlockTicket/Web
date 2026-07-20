import instagramIcon from '@/assets/figma/instagram.svg';
import twitterIcon from '@/assets/figma/twitter.svg';
import * as FooterStyle from './Footer.style.ts';

export default function Footer() {
  return (
    <FooterStyle.Container>
      <FooterStyle.Company>
        <h2>티키타카</h2>
        <p>주소 대구광역시 달성군 구지면 창리로11길 93(대구소프트웨어마이스터고등학교)</p>
        <p>고객문의 010-1234-5678</p>
      </FooterStyle.Company>
      <FooterStyle.Menu>
        <h3>서비스 안내</h3>
        <a href="/terms">서비스이용약관</a>
        <a href="#privacy">개인정보처리방침</a>
        <a href="#notice">공지사항</a>
      </FooterStyle.Menu>
      <FooterStyle.Menu>
        <h3>문의 · 지원</h3>
        <a href="#support">고객센터</a>
        <a href="#inquiry">1:1 문의</a>
      </FooterStyle.Menu>
      <FooterStyle.Social>
        <div>
          <a href="#instagram" aria-label="인스타그램"><img src={instagramIcon} alt="" /></a>
          <a href="#twitter" aria-label="트위터"><img src={twitterIcon} alt="" /></a>
        </div>
        <p>Copyright © 2026 Tikitaka. All rights reserved.</p>
      </FooterStyle.Social>
    </FooterStyle.Container>
  );
}
