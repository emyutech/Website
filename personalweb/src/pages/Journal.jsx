import story from '../stories.json';
import React, {useEffect, useState} from 'react';
import Entry from '../components/Entry';


const Journal = () => {
    const [items, setItems] = useState([]);

        useEffect(()=>{
            setItems(story);
        }, []);


    return (
        <div className='text-white font-thin '>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            {items.map(item => (
                <Entry key={item.id} stories={item}/>
            ))}
            </div>
         
            </div>
    )
}

export default Journal 