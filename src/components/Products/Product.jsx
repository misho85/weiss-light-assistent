import React, { useContext } from 'react';
import styled from 'styled-components';
import { ListContext } from '../../context/ListContext';
import { ImgOrnamentRightMobile } from '../../assets/graphics';

const Wrapper = styled.div`
  width: 100%;
  height: 6.5em;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.1em;
  ${p => p.theme.maxWidth.phone`
    height: 14em;
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
  width: 12em;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: ${p => p.theme.colors.gray};
  border-radius: 1em;
  overflow: hidden;
  ${p => p.theme.maxWidth.phone`
    width: 60%;
  `}
`;

const Image = styled.img`
  width: 7em;
  ${p => p.theme.maxWidth.phone`
    width: 15em;
    height: 10em;
  `}
`;

const Title = styled.p`
  width: 8em;
  margin-bottom: 1em;
  font-size: 0.65em;
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
      <ImageBox>
        <OrnamentMobileRight>
          <ImgOrnamentRightMobile />
        </OrnamentMobileRight>
        <OrnamentMobileLeft>
          <ImgOrnamentRightMobile />
        </OrnamentMobileLeft>
        <Image src={data.slika} />
        <Title>{data.ime}</Title>
      </ImageBox>
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
