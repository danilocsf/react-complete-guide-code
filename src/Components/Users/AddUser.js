import {useState} from 'react';
import classes from "./AddUser.module.css";

import Card from "../UI/Card";
import Button from "../UI/Button";

const AddUser = (props) => {
    const [enteredUserName, setEnteredUserName] = useState('');
    const [enteredAge, setEnteredAge] = useState('');

    const addUserHandler = (event) => {
        event.preventDefault();
        console.log(enteredUserName, enteredAge);
    };

    const userNameChangeHandler = (event) => {
        setEnteredUserName(event.target.value);
    };

    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value);
    };

    return (
        /* a propriedade className foi definida em Card => ${props.className}`}
           Isso foi feit para que aqui neste component, ou qualquer component filho de card
           pudessem ser utilizados CSSs não definidos no component card, como por exemplo o input abaixo
        */
        <Card className={classes.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor="username">Username</label>
                <input type="text" id="username" onChange={userNameChangeHandler}/>
                <label htmlFor="age">Age</label>
                <input type="number" id="age" onChange={ageChangeHandler}/>
                <Button type="submit">Add User</Button>
            </form>
        </Card>
    );
};

export default AddUser;