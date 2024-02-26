import styled from '@emotion/styled';
import Typography from '@mui/material/Typography';

const borderRadius = '30px';

export const Container = styled.div`
  max-width: 1170px;
  margin: 0 auto;
  background-color: #f2f2f2;
  padding: 20px;
`;

export const Wrapper = styled.div`
  background-color: #e6e6e6;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  margin-bottom: 20px;
`;

export const ErrorMessage = styled.p`
  color: red;
`;

export const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 386.43px;
  max-width: 386.43px;
  background-color: #ffffff;
  padding: 20px;
  padding-top: 38px;
  border-radius: 8px;
  /* box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); */
`;

export const Title = styled(Typography)`
  text-align: left;
  font-weight: 700;
`;

export const Description = styled(Typography)`
  text-align: left;
`;

export const textFieldCommonProps: any = {
  fullWidth: true,
  margin: 'normal',
  variant: 'outlined',
  sx: {
    bgcolor: '#f2f5f7',
    borderRadius,
    marginBottom: '2rem',
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#f2f5f7',
        borderRadius,
        padding: 0,
        margin: 0,
        fontSize: 0,
      },
      '&:hover fieldset': {
        borderColor: '#f2f5f7',
      },
      '&.Mui-focused fieldset': {
        // borderColor: '#b4d1e6',
        borderColor: '#f2f5f7',
      },
    },
  },
  InputProps: { style: { color: '#355479' } },
  InputLabelProps: {
    style: {
      color: '#8ca5c0',
      marginTop: '-1.3rem',
      marginLeft: '-0.7rem',
      fontSize: 20,
    },
    shrink: true,
  },
};

export { Typography };
