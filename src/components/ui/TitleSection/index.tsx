import React from 'react';
import Separator from './Separator';
import tw from 'tailwind.macro';

import * as Styled from './styles';
import { StyledProps } from './styles';

interface Props extends StyledProps {
  title: string;
  subtitle?: string;
}

const TitleSection: React.FC<Props> = ({ center, title, subtitle }) => (
  <Styled.TitleSection>
    {subtitle && <Styled.SubTitle center={center}>{subtitle}</Styled.SubTitle>}
    <Styled.Title center={center}>{title}</Styled.Title>
    {/* <Separator center={center} /> */}
    {center ? (
      <div className={tw`text-center`}>
        <Separator />
      </div>
    ) : (
      <Separator />
    )}
  </Styled.TitleSection>
);

export default TitleSection;
