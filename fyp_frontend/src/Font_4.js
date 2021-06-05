import React from "react";
import App from "./App"
import {Body} from './styled_components/Body'
import {Button_a} from './styled_components/Button_a'
import {Section_a} from './styled_components/Section_a'
import {Section_b} from './styled_components/Section_b'


class Font_4 extends React.Component{
  constructor(props){
        
    super(props)
this.state={
    color1:props.color,
    color2:"gray"
}       
  }
  componentWillReceiveProps(nextProps){
    if (nextProps.color !== this.state.color1) {
      this.setState({ color1: nextProps.color })
    }
  }
render(){


    return(
        <div>
<head>
    <meta charset="UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <meta http-equiv="X-UA-Compatible" content="ie=edge"/>
    <link rel="stylesheet" href="Fyp_UI/css/style.css"/>
    <title>Moody UI/UX</title>
</head>
<Body>
    <h1>Welcome To The Beach</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi officiis ipsum officia numquam expedita ullam.</p>
    <a><Button_a color={this.state.color1}> Read More</Button_a></a>
    </Body>
  <Section_a color={this.state.color1}>
    <p>qLorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit minus impedit maxime, quae soluta quis cumque perferendis! Doloribus quaerat, placeat iste facere, aspernatur ex cum veritatis laudantium, officia, non porro exercitationem incidunt quis dolore? Officia ex accusamus expedita optio, voluptatem minus? In maiores omnis aperiam earum ab molestiae beatae laborum blanditiis incidunt, delectus dolor, id voluptates optio aspernatur aliquam saepe atque labore? Tempore reprehenderit ab ipsam perspiciatis ut, provident perferendis sapiente in numquam blanditiis, enim, illo error nulla incidunt quos quidem ratione repellat ipsa molestias veritatis? Mollitia, fugit dolore commodi porro repudiandae atque, eos, ipsum quam culpa fuga deleniti quae.</p>
    </Section_a>
  <Section_b color={this.state.color1}>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit minus impedit maxime, quae soluta quis cumque perferendis! Doloribus quaerat, placeat iste facere, aspernatur ex cum veritatis laudantium, officia, non porro exercitationem incidunt quis dolore? Officia ex accusamus expedita optio, voluptatem minus? In maiores omnis aperiam earum ab molestiae beatae laborum blanditiis incidunt, delectus dolor, id voluptates optio aspernatur aliquam saepe atque labore? Tempore reprehenderit ab ipsam perspiciatis ut, provident perferendis sapiente in numquam blanditiis, enim, illo error nulla incidunt quos quidem ratione repellat ipsa molestias veritatis? Mollitia, fugit dolore commodi porro repudiandae atque, eos, ipsum quam culpa fuga deleniti quae.</p>
    </Section_b>
  <section id="section-c">
    <div class="box-1">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa dolorum est, molestias dolores quis sunt nobis temporibus veritatis libero odio!
    </div>
    <div class="box-2">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa dolorum est, molestias dolores quis sunt nobis temporibus veritatis libero odio!
    </div>
    <div class="box-3">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa dolorum est, molestias dolores quis sunt nobis temporibus veritatis libero odio!
    </div>
  </section>
        </div>
    )
}

} 
export default Font_4