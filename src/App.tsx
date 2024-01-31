
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import './App.css'
import { GlobalStyle } from './styles/global'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />

      <h1>Hello World!</h1>
    </ThemeProvider>
  )
}
