import styledNormalize from 'styled-normalize';
import { injectGlobal } from 'styled-components';

const normalize = () => injectGlobal`
    ${styledNormalize}
`;

export default normalize;