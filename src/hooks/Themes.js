export class Themes {

    static LightTheme = {
        '--color-background-soft': '#fcfcfc',
        '--color-background-hard': '#fff',
        '--color-background-accent': '#fff6e9',
        '--color-shadow-accent': '#ead1c3d4',
        '--color-soft': '#222a',
        '--color-hard': '#222',
        '--color-accent': '#ffeac9'
    }

    static DarkTheme = {
        '--color-background-soft': '#222',
        '--color-background-hard': '#151515',
        '--color-background-accent': '#333',
        '--color-shadow-accent': '#0000',
        '--color-soft': '#fff7',
        '--color-hard': '#fff9',
        '--color-accent': '#202020'
    }

    static SetTheme(theme) {
        let currTheme = theme === 'light' ? Themes.LightTheme : Themes.DarkTheme;

        localStorage.theme = theme;
            
        let keys = Object.keys(currTheme);
        let styles =  Object.values(currTheme);
        for (let i = 0; i < keys.length; i++)
            document
                .documentElement
                .style
                .setProperty(keys[i], styles[i]);
    }

    static GetTheme() {
        return localStorage.theme || 'light';
    }

}