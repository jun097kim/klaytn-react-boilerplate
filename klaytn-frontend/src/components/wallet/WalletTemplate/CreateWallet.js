import React from 'react';

import Form from 'grommet/components/Form';
import FormFields from 'grommet/components/FormFields';
import FormField from 'grommet/components/FormField';
import PasswordInput from 'grommet/components/PasswordInput';
import Footer from 'grommet/components/Footer';
import Button from 'grommet/components/Button';

const CreateWallet = ({ handleChange, handleSubmit }) => {
  return (
    <Form onSubmit={handleSubmit}>
      <FormFields>
        <fieldset>
          <legend>지갑 만들기</legend>
          <FormField label="지갑 비밀번호">
            <PasswordInput name="walletPw" onChange={handleChange} />
          </FormField>
        </fieldset>
      </FormFields>
      <Footer pad={{ vertical: 'medium' }}>
        <Button label="완료" type="submit" primary />
      </Footer>
    </Form>
  );
};

export default CreateWallet;
