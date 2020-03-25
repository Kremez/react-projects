import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src='https://sputnik.kg/images/101808/13/1018081344.jpg' />
            {props.message}
            <div>
                <span>like</span>{props.like}
            </div>
        </div>
      )
}

export default Post;