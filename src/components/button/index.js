import React from 'react';
import * as S from './style';

const Button = ({ variation, label }) => (
  <S.Button variation={variation}>{label}</S.Button>
);

export default Button;

Button.defaultProps = {
  variation: 'Primary',
};
