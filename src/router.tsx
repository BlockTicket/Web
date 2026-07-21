import {createBrowserRouter, Navigate} from 'react-router-dom';

// 공통 레이아웃
import App from './App';

// 메인 페이지
import MainScreen from '@/pages/main/main.tsx';

// 공연 페이지
import PopularScreen from '@/pages/popular/popular.tsx';

// 약관 페이지
import PersonalTermsScreen from '@/pages/terms/personal-terms.tsx';
import TermsScreen from '@/pages/terms/terms.tsx';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        children: [
            // 메인 페이지
            {index: true, element: <MainScreen/>},

            // 지금 인기 있는 공연 전체보기 페이지
            {path: 'performances/popular', element: <PopularScreen/>},

            // 약관 페이지
            {
                path: 'terms',
                children: [
                    {index: true, element: <TermsScreen/>},
                    {path: 'personal', element: <PersonalTermsScreen/>},
                ],
            },

            // 등록되지 않은 경로는 메인 페이지로 이동
            {path: '*', element: <Navigate to="/" replace/>},
        ],
    },
]);

export default router;
