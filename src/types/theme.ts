import 'styled-components';

export interface Theme {
    mainColor: string;
    subColor: string;
    textPrimary: string;
}

declare module 'styled-components' {
    export interface DefaultTheme {
        mainColor: string;
        subColor: string;
        textPrimary: string;
    }
}
