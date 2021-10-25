import { useState } from 'react';
import classes from "./AddUser.module.css";

import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from '../UI/ErrorModal';
import Wrapper from '../Helpers/Wrapper';

const AddUser = (props) => {
    const [enteredUserName, setEnteredUserName] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const [error, setError] = useState();

    const addUserHandler = (event) => {
        event.preventDefault();
        if (enteredUserName.trim().length === 0 || enteredAge.trim().length === 0) {
            setError({
                title: 'Invalid input',
                message: 'Please inform a value for username and age.'
            });
            return;
        }
        //Colocar + na frente da variavel força a transformar em numero
        if (+enteredAge < 1) {
            setError({
                title: 'Invalid age',
                message: 'Please inform a valid age (>0).'
            });
            return;
        }
        props.onAddUser(enteredUserName.trim(), enteredAge.trim());
        setEnteredAge('');
        setEnteredUserName('');
    };

    const userNameChangeHandler = (event) => {
        setEnteredUserName(event.target.value);
    };

    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value);
    };

    const errorHandler = () => {
        setError(null);
    }

    return (
        /* a propriedade className foi definida em Card => ${props.className}`}
            Isso foi feit para que aqui neste component, ou qualquer component filho de card
            pudessem ser utilizados CSSs não definidos no component card, como por exemplo o input abaixo
         */
        <Wrapper>
            {error && <ErrorModal 
                        title={error.title} 
                        message={error.message} 
                        onConfirm={errorHandler} />}
            <Card className={classes.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        value={enteredUserName}
                        id="username"
                        onChange={userNameChangeHandler} />
                    <label htmlFor="age">Age</label>
                    <input
                        type="number"
                        id="age"
                        value={enteredAge}
                        onChange={ageChangeHandler} />
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </Wrapper>
    );
};

export default AddUser;