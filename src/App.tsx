import CombinedPage from './CombinedPage';
import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'

function App(){
  return (<div 
    className='d-flex totalContainer'
  style={{
    width:'100vw',
    height:'100vh'
    }}>
      <CombinedPage></CombinedPage>
              
    </div>);
}

export default App;