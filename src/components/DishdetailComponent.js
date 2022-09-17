import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CarBody, CardTitle, CardBody } from 'reactstrap';

class DishdetailComponent extends Component{
    constructor(props){
        super(props);
    };   
    renderDish(dish) {
        if(dish != null) {
            console.log(dish)
            console.log(dish.comments)
            return ( 
            <div className="row">
                <div className="col-12 col-md-5 m1 mt-1">
                    <Card>
                        <CardImg width="100%" top src={dish.image} alt={dish.name} />
                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card> 
                </div>
                <div className="col-12 col-md-5 m1">
                <h1>Comments</h1>
                    {dish.comments.map((index)=>{
                        // console.log(index)
                            return (
                                
                                <div key={index.id}>
                                    
                                    <p>{index.comment}</p>
                                    <p>--{index.author} {new Intl.DateTimeFormat('en-US',{ year:'numeric', month:'short', day:'2-digit'}).format(new Date(Date.parse(index.date)))}
                                    </p>
                                </div>
                            );
                        })}
                </div>
            </div>
            );
                }
        else
                return (<div></div>);
        
    }
   
    render(){
        // console.log(this.props.DishDetail);
        // const comm = this.props.DishDetail.comments.map((comment =>{
        //     return (
        //         <div key={comment.id}>
                    
        //         </div>
        //     );
        // }))
        return(
            
            <div className="container">  {this.renderDish(this.props.DishDetail)} </div>   
          
        );
    };
}
export default DishdetailComponent;