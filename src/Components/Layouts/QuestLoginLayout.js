import React from 'react';
import QuestLayout from './QuestLayout';


export const QuestLoginLayout = (props) => {
    return(
<div className="bg-sea">
        <QuestLayout >
            <div className=' min-h-screen flex justify-center items-center'>
            {props.children}
            </div>    
           
        </QuestLayout></div>
    );
};
