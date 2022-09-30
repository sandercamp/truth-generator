import styled from 'styled-components';
import { Quote } from '../../api';

type Props = {
    quote: Quote
}

const Truth = ({ quote, ...rest }: Props) => (
    <span { ...rest }>
        { quote.message }
    </span>

);

export default styled(Truth)`

`;
