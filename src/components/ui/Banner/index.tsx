import React from 'react';
import { Link } from 'gatsby';

import Container from 'components/ui/Container';
import Button from 'components/ui/Button';
import TitleSection from 'components/ui/TitleSection';

import * as Styled from './styles';

interface Props {
  title: string;
  subtitle?: string;
  content: string;
  linkTo: string;
  linkText: string;
}

const Banner: React.FC<Props> = ({ title, subtitle, content, linkTo, linkText }) => (
  <Styled.Banner>
    <Container section>
      <TitleSection title={title} subtitle={subtitle} />
      <Styled.Content dangerouslySetInnerHTML={{ __html: content }} />
      {/* <Link to={linkTo}>
        <Button primary>{linkText}</Button>
      </Link> */}
    </Container>
  </Styled.Banner>
);

export default Banner;
