import classes from './Card.module.css';

const Card = props => {
    /*<div className={`${classes.card} ${props.className}`}
        Ao fazer isso defini-se que ao utilizar a tag <Card> está conterá o css definido em 
        Card.module.css com identificador card e que o componente que estiver utilizando a 
        tag <Card> poderá adicionar outros CSSs que não estão configurados aqui, utilizando
        a propriedade className (pois foi definida com esse nome aqui em porps.className, mas poderia
            ser qulaquer nome) - Por exemplo <Card className={classes.input}>   */
    return <div className={`${classes.card} ${props.className}`}>{props.children}</div>
};

export default Card;