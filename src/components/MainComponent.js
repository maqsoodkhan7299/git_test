import React, { Component } from 'react';
import Menu from './MenuComponent';
import About from './AboutComponent';
import DishDetail from './DishdetailComponent';
import { DISHES } from '../shared/dishes';
import { COMMENTS } from '../shared/comments';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import { LEADERS } from '../shared/leaders';
import { PROMOTIONS } from '../shared/promotion';

class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dishes: DISHES,
            selectedDish: null,
            comments:COMMENTS,
            promotions: PROMOTIONS,
            leaders: LEADERS
        };
    }
    onDishSelect(dishId){
        this.setState({selectedDish: dishId});
        console.log(dishId);
    }
 
    render(){
        const HomePage = ()=>{
            return(<Home 
                dish={this.state.dishes.filter((dish) => dish.featured)[0]}
                promotion={this.state.promotions.filter((promotion) =>promotion.featured)[0]}
                leader={this.state.leaders.filter((leader) =>leader.featured)[0]}
            />);
        }
        const DishWithId = ({match}) =>{
            return(
                <DishDetail dish={this.state.dishes.filter((dish)=> dish.id === parseInt(match.params.dishId,10))[0]}
                    comments={this.state.comments.filter((comment)=> comment.dishId === parseInt(match.params.dishId,10))}
                />
            );
        }
   
        return (
            <div>
                {/* <Navbar dark color="primary">
                    <div className="container">
                        <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
                    </div>
                </Navbar> */}
                <Header />
                <Switch>
                    <Route path='/home' component={HomePage} />
                    <Route exact path='/aboutus' component={()=><About leaders={this.state.leaders}/>} />
                    <Route exact path='/menu' component={()=><Menu dishes={this.state.dishes} />} />
                    <Route path='/menu/:dishId' component={DishWithId} />
                    <Route exact path='/contactus' component={Contact} />
                    <Redirect to="/home" />
                </Switch>
                {/* { <Menu dishes = { this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)}/>
                <DishDetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} /> } */}
                <Footer />
            </div>
        );
    }
}
export default Main;