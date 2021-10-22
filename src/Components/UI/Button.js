import classes from './Button.module.css';

const Button = props => {
    /* type={props.type || 'button' = diz que quem utilizar este botão pode determinar o tipo do 
       botão, caso não seja determinado será button  
    */
    return <button
        className={classes.button}
        type={props.type || 'button'}
        onClick={props.onClick}>
            {props.children}
        </button>
};

export default Button;