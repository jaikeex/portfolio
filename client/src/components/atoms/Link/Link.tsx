import React, { useMemo } from 'react';
import * as Styled from './styles';
type LinkProps = { openInNew?: boolean; } & React.PropsWithChildren & React.ComponentProps<'a'>;

export const Link: React.FC<LinkProps> = ({ children = null, openInNew = false, ...props }): JSX.Element => {
  const anchorProps = useMemo(() => {
    const props = {} as LinkProps;

    if (openInNew) {
      props.rel = 'noreferrer';
      props.target = '_blank';
    }

    return props;
  }, [openInNew]);

  return (
    <Styled.Link {...anchorProps} {...props}>
      {children}
    </Styled.Link>
  );
};
