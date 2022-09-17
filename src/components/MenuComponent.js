import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CarBody, CardTitle, CardBody } from 'reactstrap';
import DishdetailComponent from './DishdetailComponent' ;
class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectDish: null
        };
    }
    onDishSelection(dish){
        this.setState({selectDish: dish});
    }

    // renderDish(dish) {
    //     if(dish != null)
    //         return ( <Card>
    //             <CardImg width="100%" top src={dish.image} alt={dish.name} />
    //             <CardBody>
    //                 <CardTitle>{dish.name}</CardTitle>
    //                 <CardText>{dish.description}</CardText>
    //             </CardBody>
    //         </Card> );
    //     else
    //             return (<div></div>);
        
    // }

    render() {

        const menu = this.props.dishes.map((dish => {
            return (
                <div className="col-12 col-md-5 m1">
                    <Card key={dish.id} onClick={()=>this.onDishSelection(dish)}> 
                    <CardImg width='100%' src={dish.image} alt={dish.name} />
                       
                    <CardImgOverlay>
                        <CardTitle>{dish.name}</CardTitle>
                    </CardImgOverlay>
                    </Card>  
                </div>
            );
        }));
        return(
            <div className="container">
                <div className="row">
                        {menu}
                </div>
                <div className="row">
                    <DishdetailComponent DishDetail = { this.state.selectDish }/>
                    
                    {/* <div className="col-12 m-1">
                        {this.renderDish(this.state.selectDish)}
                    </div> */}
                </div>
            </div>
        );
    }
}
export default Menu;