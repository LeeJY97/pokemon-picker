import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { setPageItems, setPlan } from '../redux/slices/pokemonSlice';
import HeadSection from '../components/HeadSection';
import BodySection from '../components/BodySection';
import AddPokemonList from '../components/AddPokemonList';
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import { useEffect } from 'react';
import PageButtonSection from '../components/PageButtonSection';
import Planbutton from '../components/Planbutton';

const StMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-width: 1400px;
  position: absolute;
  background-image: url('https://img.freepik.com/free-vector/gradient-pastel-sky-background_23-2148908165.jpg?t=st=1724679600~exp=1724683200~hmac=ba812abc090a613dec7b08c8d1fa76ea4c2b427c0faaca548a89aebcd833bc32&w=1060');
  background-size: 1920px 1080px;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
`;

const StPlanBox = styled.div`
  position: fixed;
  top: 100px;
  right: 50px;
  background-color: #b2b2f3;
  border-radius: 6px;
  border: none;
`;

const Dex = () => {
  const dispatch = useDispatch();
  const [isHeadSectionVisible, headSectionRef] = useIntersectionObserver();

  useEffect(() => {
    dispatch(setPageItems(1));
  }, []);

  return (
    <StMainContainer>
      <StPlanBox>
        <Planbutton action={setPlan} plan='premium'>
          유료
        </Planbutton>
      </StPlanBox>
      <HeadSection headSectionRef={headSectionRef} />
      {!isHeadSectionVisible && <AddPokemonList direction={'column'} />}
      <BodySection />
      <PageButtonSection />
    </StMainContainer>
  );
};

export default Dex;
