import React, { FunctionComponent } from 'react';

interface OwnProps {
  id: number
}

type Props = OwnProps;

const Header: FunctionComponent<Props> = (props) => {

  return (
    <header className='header'>
      Header
      {props.id}
    </header>
  );
};

export default Header;

