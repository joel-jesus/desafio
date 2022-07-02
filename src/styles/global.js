import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    background: #ffffff;

}

body, input, button {
    font-family: 'Open Sans', sans-serif;
    font-size: 14px;
}

button {
    cursor:  pointer;
}

:root {
      
    --mobile: '320px';
    --tablet: '768px';
    --desktop: '1024px';


    --custom-red: #cc0d1f;
    --custom-black: #231f20;
}
`
