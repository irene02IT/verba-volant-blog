function PostPreview(props){
    return(
        // <!-- Post preview-->
        <div>
            <div class='post-preview'>
                <a href='post_path'>
                    <h2 class='post-title'>{props.title}</h2>
                    <h3 class='post-subtitle'>{props.subtitle}</h3>
                </a>
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