import searchIcon from '@/assets/figma/search.svg';
import * as HeaderStyle from './Header.style.ts';

type HeaderProps = {
  variant?: 'main' | 'simple';
};

export default function Header({ variant = 'main' }: HeaderProps) {
  const isSimple = variant === 'simple';

  return (
    <HeaderStyle.Container $simple={isSimple}>
      <HeaderStyle.Logo href="/">티키타카</HeaderStyle.Logo>
      {!isSimple && (
        <>
          <HeaderStyle.MainNav aria-label="주요 메뉴">
            <a href="#tickets">티켓</a>
            <a href="#schedule">공연일정</a>
            <a href="#notice">공지사항</a>
          </HeaderStyle.MainNav>
          <HeaderStyle.SearchForm role="search">
            <input aria-label="검색어" placeholder="검색어를 입력해주세요." />
            <button type="submit" aria-label="검색">
              <img src={searchIcon} alt="" />
            </button>
          </HeaderStyle.SearchForm>
        </>
      )}
      <HeaderStyle.AuthNav $simple={isSimple} aria-label="회원 메뉴">
        <a href="#login">로그인</a>
        <a href="#signup">회원가입</a>
      </HeaderStyle.AuthNav>
    </HeaderStyle.Container>
  );
}
