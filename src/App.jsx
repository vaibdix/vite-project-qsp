// BROWSER ROUTER
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { Header } from './components/Header';
// import { HomePage } from './pages/HomePage';
// import { PostPage } from './pages/PostPage';

// OLD MDX
// import { components } from './mdx-components';
// import One from './content/01.mdx';
// import Two from './content/02.mdx';

// import Header from './components/Assignment2/Header/Header';
// import Imgg from './components/Assignment2/Imgg/Imgg';
// import Webinar from './components/Assignment2/Webinar/Webinar';
// import Footer from './components/Assignment2/Footer/Footer';
import JsxIntro from './components/jsxIntro/JsxIntro';
import Counter from './components/ClassBasedCompo/Counter';
import UseStateIntro from './components/Hooks/useStateHook/useStateIntro';
import PropsIntro from './components/Props/PropsInto';
import FlipKartHeader from './components/CssModules/FlipKartHeader';
import Home from './components/ConditionalRendering/Home';
import EventsIntro from './components/Events/EventsIntro';

// Assignment 1
// import Header from './components/Assignment1/Header/Header';
// import Container from './components/Assignment1/Container/Container';

const App = () => {
  return (
    // <>
    //   {/* Assign */}
    //   <Header />
    //   <Container />
    // </>

    // <>
    //   <JsxIntro />
    // </>

    // <>
    // {/*  Assignment 2  */}
    //   <Header />
    //   <Imgg />
    //   <Webinar />
    //   <Footer />
    // </>

    // {/*  Hooks  */}
    // <>
    //   <UseStateIntro />
    // </>

    // {/*  Props  */}
    // <>
    //   <PropsIntro />
    // </>

    // {/*  CSS Modules  */}
    // <>
    //   <FlipKartHeader />
    // </>

    // {/*  Conditional Rendering  */}
    // <>
    //   <Home />
    // </>

    // <Two components={components} />
    // <Counter />

    <>
      <EventsIntro />
    </>

    // <BrowserRouter>
    //   <div className="min-h-screen bg-gray-50">
    //     <Header />
    //     <main>
    //       <Routes>
    //         <Route path="/" element={<HomePage />} />
    //         <Route path="/post/:id" element={<PostPage />} />
    //       </Routes>
    //     </main>
    //   </div>
    // </BrowserRouter>
  );
};

export default App;
