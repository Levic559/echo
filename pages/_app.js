import 'semantic-ui-css/semantic.min.css'
import '../styles/app.scss'
import AppProvider from '@/utils//provider';
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";


function MyApp({ Component, pageProps }) {
  return <AppProvider>
  <DndProvider backend={HTML5Backend}>

    <Component {...pageProps} />
    
    </DndProvider>
  </AppProvider>
}

export default MyApp
