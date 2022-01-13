import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Home from './screen/Home';
import PostStory from './screen/PostStory';
const App = () => {
      return (
           <Routes>
                  <Route path='/' element={ <Home/> }/>
                  <Route path='/postStory' element={ <PostStory/> }/>
           </Routes>
      )
}

export default App;