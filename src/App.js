import Header from './components/Header/Header';
import {useFetch} from './hooks/useFetch'
import {Routes, Route} from 'react-router-dom'
import NotFound from './components/NotFound/NotFound';
import Home from './components/Home/Home';
import Blogs from './components/Blogs/Blogs';
import Reviews from './components/Reviews/Reviews';
import Dashboard from './components/Dashboard/Dashboard';
import About from './components/About/About';
function App() {
  //const [data,setData,loading] = useFetch('https://retoolapi.dev/xpCGKN/reviews/');
  return (
    <>
        <Header/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/blogs' element={<Blogs/>}/>
            <Route path='/dashboard' element={<Dashboard/>}/>
            <Route path='/reviews' element={<Reviews/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='*' element={<NotFound/>}/>
        </Routes>
    </>
  );
}

export default App;
