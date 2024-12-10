import { components } from './mdx-components';
import One from './content/01.mdx';
import Two from './content/02.mdx';
import './App.css';

// import Header from './components/Assignment2/Header/Header';
// import Imgg from './components/Assignment2/Imgg/Imgg';
// import Webinar from './components/Assignment2/Webinar/Webinar';
// import Footer from './components/Assignment2/Footer/Footer';
import JsxIntro from './components/jsxIntro/JsxIntro';
import Counter from './components/ClassBasedCompo/Counter';
import UseStateIntro from './components/Hooks/useStateHook/useStateIntro';

// import Header from './components/Assignment1/Header/Header';
// import Container from './components/Assignment1/Container/Container';

function App() {
  return (
    // <>
    //   {/* Assign */}
    //   <Header />
    //   <Container />
    // </>

    // <>
    //   {/* jsxIntro */}
    //   {/* <JsxIntro /> *
    // </>

    // <>
    //    {/* Assignment 2 */}
    //   <Header />
    //   <Imgg />
    //   <Webinar />
    //   <Footer />
    // </>

    // <>
    //   hello
    // </>

    // Hooks
    <>
      <UseStateIntro />
    </>

    // <Two components={components} />
    // <Counter />
  );
}

export default App;
