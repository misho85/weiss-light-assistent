/* eslint-disable react/jsx-props-no-spreading */
import React, { useContext } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers';
import * as yup from 'yup';
import { ListContext } from '../context/ListContext';
import Input from './Input';
import productData from '../data/products';

const API_URL = `https://www.weisslight.eu/x/wp-json/weisslight-assistant/v1/create-email`;
const TOKEN = `Mie9Xiehoo=z3iK~aiPh4ooL4aekai3ut9`;

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

const NameBox = styled.div`
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

const validationSchema = yup.object().shape({
  firstName: yup
    .string()
    .matches(/^([\p{L}\s]+)$/u, {
      message: 'Name is not valid!',
      excludeEmptyString: true,
    })
    .required('Name is required!'),
  lastName: yup
    .string()
    .matches(/^([\p{L}\s]+)$/u, {
      message: 'Last name is not valid!',
      excludeEmptyString: true,
    })
    .required('Last name is required!'),
  email: yup
    .string()
    .email('Email is not valid!')
    .required('Email is required!'),
  message: yup.string().required('Message is required!'),
});

const countByLumen = (stateLumen, itemLumen) =>
  Math.round(stateLumen / itemLumen);

const ContactForm = () => {
  const { state } = useContext(ListContext);

  const methods = useForm({
    mode: 'onBlur',
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = data => {
    const assistentData = state.items.map(el => {
      const lumen = el.kvadratura * el.lux;

      const products = productData.map(el => {
        const types = el.types.map(el => {
          const count = countByLumen(lumen, el.flux);
          return {
            snaga: el.snaga,
            count,
          };
        });

        return {
          name: el.ime,
          types,
        };
      });

      return {
        ...el,
        products,
      };
    });

    const allData = { ...data, assistentData };

    const postData = async () => {
      try {
        const res = await axios.post(
          API_URL,
          { ...allData },
          { params: { token: TOKEN } }
        );
        console.log('👉 Returned data:', res.data);
      } catch (e) {
        console.error(`😱 Axios request failed: ${e.response.status}`);
      }
    };

    postData();

    methods.reset();
  };

  return (
    <FormProvider {...methods}>
      <FormWrapper onSubmit={methods.handleSubmit(onSubmit)} id="contact-form">
        <Container>
          <NameBox>
            <InputBox>
              <Input
                contact
                type="text"
                name="firstName"
                placeholder="Name"
                autoComplete="given-name"
                required
              />
            </InputBox>
            <InputBox>
              <Input
                contact
                type="text"
                name="lastName"
                placeholder="Last Name"
                autoComplete="family-name"
                required
              />
            </InputBox>
          </NameBox>
          <Input
            contact
            type="text"
            name="email"
            placeholder="Email"
            autoComplete="email"
            required
          />
          <Input
            contact
            textarea
            name="message"
            placeholder="Message"
            rows={6}
            required
          />
        </Container>
      </FormWrapper>
    </FormProvider>
  );
};

export default ContactForm;
