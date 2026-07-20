import backIcon from '@/assets/figma/back.svg';
import Footer from '../../components/Footer/Footer.tsx';
import Header from '../../components/Header/Header.tsx';
import { PERSONAL_TERMS_CLAUSES } from './personal-terms.constants.ts';
import * as Terms from './terms.style.ts';

export default function PersonalTermsScreen() {
  return (
    <Terms.Page>
      <Header variant="simple" />
      <Terms.DetailBody>
        <Terms.Title>약관</Terms.Title>
        <Terms.BackLink href="/terms">
          <img src={backIcon} alt="" />
          뒤로가기
        </Terms.BackLink>
        <Terms.DetailTitle>개인 사용자 서비스 이용약관</Terms.DetailTitle>
        <Terms.Article>
          {PERSONAL_TERMS_CLAUSES.map((clause) => (
            <section key={clause.title}>
              <h3>{clause.title}</h3>
              {clause.content.map((content, index) =>
                Array.isArray(content) ? (
                  <ol key={`${clause.title}-${index}`}>
                    {content.map((item) => <li key={item}>{item}</li>)}
                  </ol>
                ) : (
                  <p key={`${clause.title}-${index}`}>{content}</p>
                ),
              )}
            </section>
          ))}
        </Terms.Article>
      </Terms.DetailBody>
      <Footer />
    </Terms.Page>
  );
}
