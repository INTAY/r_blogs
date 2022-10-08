import { BrowserRouter } from 'react-router-dom';
import Index from './router/index.jsx'
import classNames from 'classnames';
import commons from "./assets/scss/common.module.scss"
import './App.css'

function App() {

  return (
    <div className={classNames(commons.top_header, 'App')}>
      <BrowserRouter>
        <Index />
      </BrowserRouter>
    </div>
  )
}

export default App
