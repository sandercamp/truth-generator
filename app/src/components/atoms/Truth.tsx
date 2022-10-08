import styled from 'styled-components';
import { Quote } from '../../api';

type Props = {
    quote: Quote
}

const Truth = ({ quote, ...rest }: JSX.IntrinsicElements['span'] & Props) => (
    <span { ...rest }>
       &ldquo;{ quote.message }&rdquo;
    </span>
);

export default styled(Truth)`
    font-size: 1.5rem;
`;
