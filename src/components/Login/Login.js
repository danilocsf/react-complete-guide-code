import React, { useReducer, useContext } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
import AuthContext from '../../Context/auth-context';

/*emailReducer será chamado automaticamente quando o dispatchEmail for executado*/
const emailReducer = (state, action) => {
  if (action.type === 'USER_INPUT') {
    return { value: action.val, isValid: action.val.includes('@') };
  }
  if (action.type === 'INPUT_BLUR') {
    return { value: state.value, isValid: state.value.includes('@') };
  }
  return { value: '', isValid: false };
};

/*passwordReducer será chamado automaticamente quando o dispatchPassword for executado*/
const passwordReducer = (state, action) => {
  if (action.type === 'USER_INPUT') {
    return { value: action.val, isValid: action.val.trim().length > 6 };
  }
  if (action.type === 'INPUT_BLUR') {
    return { value: state.value, isValid: state.value.trim().length > 6 };
  }
  return { value: '', isValid: false };
};

const Login = (props) => {
  /*
    - emailState - the latest state snapshot
    - dispatchEmail - é uma função que permite alterar o estado.
    Essa função irá enviar uma ação(automaticamente) para a função emailReducer, que é a responsável por alterar o estado
    - emailReducer - função que irá alterar o estado / Recebe no primeiro parâmetro  o último estado e no segundo parâmetro é 
    a ação enviada pelo dispatchEmail
    - 2 paramtero de useReducer é a versão inicial do estado.
  */
  const [emailState, dispatchEmail] = useReducer(emailReducer,
    {
      value: '',
      isValid: false
    });

  const [passwordState, dispatchPassword] = useReducer(passwordReducer,
    {
      value: '',
      isValid: false
    });

  const ctx = useContext(AuthContext);

  const emailChangeHandler = (event) => {
    dispatchEmail({ type: 'USER_INPUT', val: event.target.value });
  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({ type: 'USER_INPUT', val: event.target.value });
  };

  const validateEmailHandler = () => {
    dispatchEmail({ type: 'INPUT_BLUR' });
  };

  const validatePasswordHandler = () => {
    dispatchPassword({ type: 'INPUT_BLUR' });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    ctx.onLogin(emailState.value, passwordState.value);
  };



  return (

    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${emailState.isValid === false ? classes.invalid : ''
            }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={emailState.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${passwordState.isValid === false ? classes.invalid : ''
            }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={passwordState.value}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!passwordState.isValid || !emailState.isValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
