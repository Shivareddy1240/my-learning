import React from "react"
import Profile from "./Profile";
import { data } from "./data";
import { commentData } from "./data";
import ListItem from "./ListItem";

// const App = () => {
//     return(
//     <section className="posts-container">
//        {
//         data.map((eachObj)=>{
//             const {id,thumbnailUrl,title,url} = eachObj;
//             return <Profile key={id} id={id} thumbnailUrl={thumbnailUrl} title={title} url={url}></Profile>
//         })
//        }
//     </section>   
//     ) 
// }

const App = () =>{
    return(
        <main className="container">
            <ul className="comments-container">

          {
            commentData.map((eachComment)=>{
                const {id,email,name,body} = eachComment;
               return (
                <ListItem key={id} id={id} email={email} name={name} body={body}></ListItem>
               ); 
            })} 
            </ul>
        </main>
    );
};
export default App;