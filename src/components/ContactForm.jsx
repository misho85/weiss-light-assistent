import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';
import { useContext } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import styled from 'styled-components';
import * as yup from 'yup';

import { ListContext } from '~context/ListContext';
import productData from '~data/products';

import Input from './Input';

const API_URL = `https://www.weisslight.eu/wp-json/weisslight-assistant/v1/create-email`;

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-radius: 2em;
  background-color: ${p => p.theme.colors.white};
  margin-bottom: 1.2em;
  padding: 0 8%;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 2.5em;
`;

const DoubleBox = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const InputBox = styled.div`
  width: 100%;
  ${p => p.theme.minWidth.tablet`
    flex: 0 0 50%;
    max-width: 50%;
    &:first-of-type {
      padding-right: 1em;
    }
    &:last-of-type {
      padding-left: 1em;
    }
  `}
`;

const InfoBox = styled.div`
  margin: 0 0.5em 1em;
  font-size: 1.2em;
  width: 75%;
`;

const validationSchema = yup.object().shape({
  firstName: yup
    .string()
    .matches(/^([\p{L}\s]+)$/u, {
      message: 'Ime nije validno!',
      excludeEmptyString: true,
    })
    .required('Ime je neophodno!'),
  lastName: yup
    .string()
    .matches(/^([\p{L}\s]+)$/u, {
      message: 'Prezime nije validno!',
      excludeEmptyString: true,
    })
    .required('Prezime je neophodno!'),
  email: yup
    .string()
    .email('Email nije validan!')
    .required('Email je neophodan!'),
  // message: yup.string().required('Poruka je neophodna!'),
});

const countByLumen = (stateLumen, itemLumen) =>
  Math.round(stateLumen / itemLumen);

const ContactForm = ({ setSubmited }) => {
  const { state } = useContext(ListContext);

  const methods = useForm({
    mode: 'onBlur',
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = data => {
    const assistentData = state.items.map(item => {
      const lumen = item.kvadratura * item.lux;

      const products = productData.map(product => {
        const types = product.types.map(type => {
          const count = countByLumen(lumen, type.flux);
          return {
            snaga: type.snaga,
            count,
          };
        });

        return {
          name: product.ime,
          types,
        };
      });

      return {
        ...item,
        products,
      };
    });

    const allData = { ...data, assistentData };

    const postData = async () => {
      try {
        const res = await axios.post(API_URL, { ...allData });
        // eslint-disable-next-line no-console
        console.log('👉 Returned data:', res.data);
        setSubmited('success');
      } catch (e) {
        // eslint-disable-next-line no-console
        console.error(`😱 Axios request failed: ${e.response.status}`);
        setSubmited('error');
      }
    };

    postData();
    methods.reset();
  };

  return (
    <FormProvider {...methods}>
      <FormWrapper onSubmit={methods.handleSubmit(onSubmit)} id="contact-form">
        <Container>
          <InfoBox>
            <p>
              Da biste dobili cenu za ponudjenu rasvetu, unesite podatke i
              pošaljite upit
            </p>
          </InfoBox>
          <DoubleBox>
            <InputBox>
              <Input
                contact
                type="text"
                name="firstName"
                placeholder="Ime"
                autoComplete="given-name"
                required
              />
            </InputBox>
            <InputBox>
              <Input
                contact
                type="text"
                name="lastName"
                placeholder="Prezime"
                autoComplete="family-name"
                required
              />
            </InputBox>
          </DoubleBox>
          <DoubleBox>
            <InputBox>
              <Input
                contact
                type="text"
                name="email"
                placeholder="Email"
                autoComplete="email"
                required
              />
            </InputBox>
            <InputBox>
              <Input
                contact
                type="text"
                name="company"
                placeholder="Naziv firme"
                autoComplete="organization"
                // required
              />
            </InputBox>
          </DoubleBox>
          <Input
            contact
            textarea
            name="message"
            placeholder="Poruka"
            rows={6}
            // required
          />
        </Container>
      </FormWrapper>
    </FormProvider>
  );
};

export default ContactForm;
