import React, {FunctionComponent} from 'react';
import ContentLoader from "react-content-loader";

interface OwnProps {
}

type Props = OwnProps;

const UserLoading: FunctionComponent<Props> = (props) => {

  return <div>
    <ContentLoader
      speed={2}
      width={60}
      height={90}
      viewBox="0 0 60 90"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      {...props}
    >
      <circle cx="30" cy="21" r="20" />
      <rect x="0" y="50" rx="0" ry="0" width="60" height="10" />
      <rect x="0" y="70" rx="0" ry="0" width="60" height="10" />
    </ContentLoader>
  </div>;
};

export default UserLoading;
