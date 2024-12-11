const Profile = (props) => {
    const {title,thumbnailUrl,url} = props
    return <article className="profile-card">
        <img src={thumbnailUrl} alt="Images"></img>
        <h2 className="title">{title}</h2>
        <a href={url} className="button">Details</a>

    </article>
}

export default Profile