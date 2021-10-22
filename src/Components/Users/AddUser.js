import classes from "./AddUser.module.css";

import Card from "../UI/Card";
import Button from "../UI/Button";

const AddUser = (props) => {
    const addUserHandler = (event) => {
        event.preventDefault();
    };

    return (
        /* a propriedade className foi definida em Card => ${props.className}`}
           Isso foi feit para que aqui neste component, ou qualquer component filho de card
           pudessem ser utilizados CSSs não definidos no component card, como por exemplo o input abaixo
        */
        <Card className={classes.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor="username">Username</label>
                <input type="text" id="username" />
                <label htmlFor="age">Age</label>
                <input type="number" id="age" />
                <Button type="submit">Add User</Button>
            </form>
        </Card>
    );
};

export default AddUser;