import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom'; // Importa useHistory dalla libreria react-router-dom
function PostPreview(props){
    const navigate = useNavigate(); // Ottieni l'istanza di navigate dalla libreria react-router-dom
    const path = props.path.replace('.txt', '');
    const handleClick = () => {
      // Naviga alla pagina del post completo passando il "postPath" come parametro nell'URL
      navigate(`/post?${path}`);
    };
    return(
        // <!-- Post preview-->
        <div>
            <div class='post-preview' onClick={handleClick}>
                <Link to="/post" >
                    <h2 class='post-title'>{props.title}</h2>
                    <h3 class='post-subtitle'>{props.subtitle}</h3>               
                </Link>
                <p class='post-meta'>
                    Posted {/* by
                    <a href='#!'>".$row['post_author']."</a> */}
                    on {props.date}
                </p>
                </div>
            {/* // <!--Divider--> */}
            
            <hr class='my-4' />            
        </div>

    );
}
export default PostPreview;