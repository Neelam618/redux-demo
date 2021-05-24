import {connect} from 'react-redux'
import { addToCart, removeFromCart } from '../services/actions/actions'
import Home from '../components/Home'

const mapStateToProps = state =>({
//    cardData: state.cardItems.cardData 
})
const mapDispatchToProps = dispatch => ({
  addToCartHandler: data=>dispatch(addToCart(data)),
  removeFromCartHandler: data=>dispatch(removeFromCart(data))  

})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
