import React, { useState } from "react";
import  Appcss from  '../App.module.css';
const ReadMore = ({ children }) => {
    const text = children;
    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => {
      setIsReadMore(!isReadMore);
    };
    return (
      <p className={Appcss.text}>
        {isReadMore ? text.slice(0, 250) : text}
        <span onClick={toggleReadMore} className={Appcss.read_or_hide}>
          {isReadMore ? "...READ MORE" : " READ LESS"}
        </span>
      </p>
    );
  };
  const writeabout = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto ducimus et, cumque in nihil aperiam totam, tenetur quas, eos ea corrupti sunt neque id ipsum molestiae. Eaque eveniet molestiae blanditiisSoluta laborum error, inventore saepe qui explicabo rem beatae ullam possimus eos rerum quos quis temporibus facere quia vero, incidunt ratione ad magnam dolore laudantium unde voluptate natus adipisci? Beatae?Maiores repellendus itaque tempora quo, ipsa ab! Molestiae ad ut voluptas non corporis quas repellat voluptatibus sapiente sequi ipsam voluptate quis fuga odit sint explicabo, perspiciatis doloribus cupiditate dolorum iusto.Magnam quidem commodi nostrum rem voluptatem sunt, quam neque consectetur ullam quo doloribus, officiis nulla ipsum? Quo, voluptates ut! Illo, laudantium est? Laborum maiores officiis sit iste vero fuga esse!"
  const Content = () => {
    return (
      <div className={Appcss.container1}>
        <p className={Appcss.container2}>
          <ReadMore   >
         {writeabout}
          </ReadMore>
        </p>
      </div>
    );
  };
    
  export default Content;