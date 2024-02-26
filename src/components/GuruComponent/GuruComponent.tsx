import React from 'react';
import { useForm } from 'react-hook-form';
import {
  Container,
  Wrapper,
  MenuItem,
  TextField,
  Button,
  HeaderWrapper,
  Title,
  FormStyled,
  Description,
  areaAtuacaoArray,
  setorArray,
  faturamentoMedioArray,
  textFieldCommonProps,
} from './imports';
import FormField from './FormField';

const GuruComponent: React.FC = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <Container className='container'>
      <Wrapper className='wrapper'>
        <HeaderWrapper>
          <div>
            <Title variant='h4' gutterBottom>
              Meu Negócio
            </Title>
            <Description variant='body1'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec
              semper tortor. Vivamus commodo metus id metus fringilla tincidunt.
            </Description>
          </div>
        </HeaderWrapper>
        <FormStyled onSubmit={handleSubmit(onSubmit)}>
          <FormField
            control={control}
            name='businessDescription'
            errorMessage={
              errors.businessDescription && errors.businessDescription.message
            }
          >
            <TextField
              label='Conte-nos sobre o seu negócio:'
              multiline
              rows={4}
              {...textFieldCommonProps}
            />
          </FormField>
          <FormField
            control={control}
            name='areaAtuacao'
            errorMessage={errors.areaAtuacao && errors.areaAtuacao.message}
          >
            <TextField
              select
              label='Área de atuação:'
              {...textFieldCommonProps}
            >
              {areaAtuacaoArray.map((item, index) => (
                <MenuItem key={index} value={item}>
                  {item}
                </MenuItem>
              ))}
            </TextField>
          </FormField>
          <FormField
            control={control}
            name='setor'
            errorMessage={errors.setor && errors.setor.message}
          >
            <TextField select label='Setor:' {...textFieldCommonProps}>
              {setorArray.map((item, index) => (
                <MenuItem key={index} value={item}>
                  {item}
                </MenuItem>
              ))}
            </TextField>
          </FormField>
          <FormField
            control={control}
            name='faturamentoMedio'
            errorMessage={
              errors.faturamentoMedio && errors.faturamentoMedio.message
            }
          >
            <TextField
              select
              label='Faturamento médio por mês:'
              {...textFieldCommonProps}
            >
              {faturamentoMedioArray.map((item, index) => (
                <MenuItem key={index} value={item}>
                  {item}
                </MenuItem>
              ))}
            </TextField>
          </FormField>
          <Button type='submit' variant='contained' color='primary' fullWidth>
            SALVAR OU ATUALIZAR MEUS DADOS
          </Button>
        </FormStyled>
      </Wrapper>
    </Container>
  );
};

export default GuruComponent;
