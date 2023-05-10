import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
function NavLink(props){
    var isActive = this.context.router.route.location.pathname === this.props.to;
    var className = isActive ? 'active' : '';
    return (
        <Link className={className} {...this.props}>
        {this.props.children}
        </Link>
    )
}
NavLink.contextTypes = {
    router: PropTypes.object
};
export default NavLink;