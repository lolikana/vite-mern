import useTitle from '@hooks/use-title';
import { useRef } from 'react';

const Homepage = () => {
  const headTitleRef = useRef<string>('HOMEPAGE');
  useTitle(headTitleRef.current);

  return (
    <section>
      <h1>{headTitleRef.current}</h1>
    </section>
  );
};

export default Homepage;
