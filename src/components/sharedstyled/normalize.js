import styledNormalize from 'styled-normalize';
import { injectGlobal } from 'styled-components';

const normalize = () => injectGlobal`
    ${styledNormalize}

    body {
        background-image: radial-gradient(#FAFAFA, #E0F7FA)
    }
`;

export default normalize;