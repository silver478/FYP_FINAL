import  styled  from  'styled-components';

export  const  Button_a  = styled.button ` 
    font-size:18px;
    text-decoration:none;
    color:${props => props.color || "orange"};
    border:orange 1px solid;
    padding:10px 20px;
    border-radius:10px;
    margin-top:20px;
`