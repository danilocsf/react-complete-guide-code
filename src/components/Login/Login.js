import React, { useState, useEffect } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';

const Login = (props) => {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [emailIsValid, setEmailIsValid] = useState();
  const [enteredPassword, setEnteredPassword] = useState('');
  const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  /* Por padrão, useEffect roda depois da primeira renderização e depois de toda atualização.
     Neste caso foram informadas dependências, então somente executará caso enteredEmail ou enteredPassword
     tiveram alterações no último ciclo de renderização do componente.
    */
  useEffect(() => {
    /*Utilizando esta função para que a verificação se o formulário é válido ocorra após 500 milisegundos
      após o usuário parar de digitar.
      Sem o setTimeut, a cada vez que o usuário pressionasse uma tecla, passaria aqui.
      Com o setTimeout, cada vez que o usuário digita uma tecla, inicia-se o contador de tempo antes de executar a função.
      Caso atinja s 500 milisegundos configurados, executa-se a função.
      Caso o usuário pressione outra tecla enquanto o timer está sendo contabilizado (ou seja, antes dos 500 milisegundos), 
      o timer é reiniciado no cleanup function, portanto a função só será executada uma ve após 500 milisegundos que o usuário parou de digitar.
    */
    const identifier = setTimeout(() => {
      console.log('Checking form validity');
      setFormIsValid(
        enteredEmail.includes('@') && enteredPassword.trim().length > 6
      );
    }, 500);
    /*cleanup function = é executado toda vez que useEffect é executado, porém antes de useEffect ser executado, com exceção
      da primeira execução de useEffect .
      Pode ser uma função anônima ou nomeada
    */ 
    return () => {
      console.log('Cleaning up');
      clearTimeout(identifier);
    };
  },
    [enteredEmail, enteredPassword]
  );

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);
  };

  const validateEmailHandler = () => {
    setEmailIsValid(enteredEmail.includes('@'));
  };

  const validatePasswordHandler = () => {
    setPasswordIsValid(enteredPassword.trim().length > 6);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(enteredEmail, enteredPassword);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${emailIsValid === false ? classes.invalid : ''
            }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={enteredEmail}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${passwordIsValid === false ? classes.invalid : ''
            }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={enteredPassword}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
