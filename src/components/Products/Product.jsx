import { useContext } from 'react';
import styled from 'styled-components';

import {
  ImgOrnamentBottom,
  ImgOrnamentRightMobile,
  ImgOrnamentTop,
} from '~assets/graphics';
import { ListContext } from '~context/ListContext';

const Wrapper = styled.div`
  width: 100%;
  height: 8.7em;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1em;

  > a {
    height: 100%;
    width: 12em;
    ${p => p.theme.maxWidth.phone`
      width: 60%;
    `}
  }

  ${p => p.theme.maxWidth.phone`
    height: 14em;
  `}
`;

const OrnamentTop = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  > svg {
    width: 2.5em;
    height: 2.5em;
  }

  ${p => p.theme.maxWidth.phone`
    display: none;
  `}
`;

const OrnamentBottom = styled.div`
  position: absolute;
  bottom: -3px;
  right: 1px;

  > svg {
    width: 2em;
    height: 4em;
  }

  ${p => p.theme.maxWidth.phone`
    display: none;  
  `}
`;

const OrnamentMobileRight = styled.div`
  display: none;
  ${p => p.theme.maxWidth.phone`
    display: unset;
    position: absolute;
    bottom:  -2px;
    right: 0;

    > svg {
      width: 2.4em;
      height: 12em;
    }
  `}
`;

const OrnamentMobileLeft = styled.div`
  transform: rotateY(180deg);
  display: none;
  ${p => p.theme.maxWidth.phone`
    display: unset;
    position: absolute;
    bottom:  -2px;
    left: 0;

    > svg {
      width: 2.4em;
      height: 12em;
    }
  `}
`;

const ImageBox = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: ${p => p.theme.colors.gray};
  border-radius: 1em;
  overflow: hidden;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: ${p => p.theme.colors.blueLight};
  }
`;

const Image = styled.img`
  margin-top: 1em;
  width: 7em;
  ${p => p.theme.maxWidth.phone`
    width: 15em;
    height: 10em;
  `}
`;

const Title = styled.p`
  width: 8em;
  margin-bottom: 1em;
  font-size: 0.8em;
  font-weight: bold;
  text-align: center;
  ${p => p.theme.maxWidth.phone`
    font-size: 1em;
  `}
`;

const Info = styled.div`
  background-color: ${p => p.theme.colors.gray};
  border-radius: 1em;
  width: 100%;
  height: 100%;
  margin-left: 1em;
  padding: 1em 0;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  ${p => p.theme.maxWidth.phone`
    width: 40%;
    flex-direction: column;
    padding: 0 1em;;
  `}
`;

const Data = styled.div`
  border-right: 2px solid #d6d4d4;
  height: 100%;
  width: 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &:last-child {
    border-right: none;
  }

  ${p => p.theme.maxWidth.phone`
    width: 100%;
    height: 20%;
    border-right: none;
    border-bottom: 1px solid #d6d4d4;
    flex-direction: row;
    justify-content: space-evenly;
    &:last-child {
      border-bottom: none;
    }
  `}
`;

const Power = styled.p`
  font-weight: bold;
  margin-bottom: 1em;
  ${p => p.theme.maxWidth.phone`
    margin-bottom: 0;
  `}
`;

const Count = styled.p``;

const countByLumen = (stateLumen, itemLumen) =>
  Math.round(stateLumen / itemLumen);

const Product = ({ data }) => {
  const { state } = useContext(ListContext);

  const emptyField = data.types.length <= 5 ? 5 - data.types.length : 0;

  return (
    <Wrapper>
      <a href={data.url} rel="noreferrer noopener" target="_blank">
        <ImageBox>
          <OrnamentMobileRight>
            <ImgOrnamentRightMobile />
          </OrnamentMobileRight>
          <OrnamentMobileLeft>
            <ImgOrnamentRightMobile />
          </OrnamentMobileLeft>
          <OrnamentBottom>
            <ImgOrnamentBottom />
          </OrnamentBottom>
          <OrnamentTop>
            <ImgOrnamentTop />
          </OrnamentTop>
          <Image src={data.slika} />
          <Title>{data.ime}</Title>
        </ImageBox>
      </a>
      <Info>
        {data.types.map((el, i) => {
          const count = countByLumen(state.selected.lumen, el.flux);
          if (i < 5)
            return (
              <Data key={el.id}>
                <Power>{`${el.snaga}W`}</Power>
                <Count>{`${count}X`}</Count>
              </Data>
            );

          return null;
        })}
        {[...Array(emptyField).keys()].map(el => (
          <Data key={`empty-${el}`} />
        ))}
      </Info>
    </Wrapper>
  );
};

export default Product;
