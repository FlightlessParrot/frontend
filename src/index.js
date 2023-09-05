import React from 'react';
import ReactDOM from 'react-dom/client';
import  router from './router';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import { RouterProvider } from 'react-router-dom';
import './styles/style.scss';
import 'animate.css';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { menuTheme } from './ChakraStyles/Components/Menu';
import { Input } from './ChakraStyles/Components/Input';
//import reportWebVitals from './reportWebVitals';
const theme = extendTheme({
  
    initialColorMode: 'dark',
    useSystemColorMode: false,

  colors: {
    odra: "#002029",
    baltic: "#00303D",
    sea: "#004052",
    sel: "#005066",
    mediterrianian: "#00607A",
    c_gray: '#9C9C9C' 
  }, fonts: {
    body: "Nunito",
    heading: "Nunito",
    mono: "Nunito",
  },
  styles: {
    global: {
      body: {
        bg: "",
        color: ""
      }
    }
  },
  components: {
   Input: Input,
    Menu: menuTheme
   
      
    
  }
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <ChakraProvider theme={theme}>
  <RouterProvider router={router} />
</ChakraProvider>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
