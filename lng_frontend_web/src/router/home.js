import React from 'react';
import '../css/base.css';
import '../css/home.css';
import Page1 from './homepage/page1';
import PageRigth from './homepage/page_right';

function Home(props) {
    return (
        <div className='grid home '>
            <div className='col_9'>
                <Page1/>
                <Page1/>
            </div>

            <div className='col_3' style={{paddingLeft:10}}>
                <PageRigth/>
            </div>

        </div>
    )
}

export default Home;