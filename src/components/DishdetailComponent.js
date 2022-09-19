import React from 'react';
import { Card, CardImg, CardText, CardTitle, CardBody, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderDish({dish}) {
        if (dish != null) 
            {
                return ( 
                        <div className="col-12 col-md-5 m1 mt-1">
                            <Card>
                                <CardImg width="100%" top src={dish.image} alt={dish.name} />
                                <CardBody>
                                    <CardTitle>{dish.name}</CardTitle>
                                    <CardText>{dish.description}</CardText>
                                </CardBody>
                           </Card> 
                        </div>
                        );
            }
        else
            return (<div></div>);
                    
    }

    function RenderComment({comments}){
        console.log(comments);
        if (comments != null)
            { return(
                <div className="col-12 col-md-5 m1">
                    <h1>Comments</h1>
                    {comments.map((index)=>
                        {
                            return (                              
                                    <div key={index.id}>
                                        <p>{index.comment}</p>
                                        <p>--{index.author} {new Intl.DateTimeFormat('en-US',{ year:'numeric', month:'short', day:'2-digit'}).format(new Date(Date.parse(index.date)))}</p>
                                    </div>
                                    );
                        })        
                    }
                </div>
            )}
    else
        return(<div></div>);
    }

function DishDetail (props) {
    return(
        <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}<hr /></h3>
                    </div>
                </div>
                <div className="row">
                    <RenderDish dish = {props.dish} /> 
                    <RenderComment comments={props.comments} />  
                </div> 
            </div>   
    );
}
export default DishDetail;