import React from 'react';

import All_Posts from './All_Posts';
import Header_Posts from './Header_Posts';

function Posts() {
    return (
        <div className='main-posts'>
            <Header_Posts></Header_Posts>
            <div className='main-line'></div>
            <All_Posts></All_Posts>
        </div>
    );
}

export default Posts;