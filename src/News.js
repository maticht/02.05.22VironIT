import React, {useState} from "react";

const Item = ({news}) => {
    const [flag,setFlag] = useState(false);
    return (
            <div className='mainInfo'>
                <p className='newsName'>{news.name}</p>
                <button className='showDescription' onClick={() => {
                    setFlag(!flag)

                }}></button>
                {flag && <p className='newsDescription'>{news.description}</p>}
            </div>
    )
}
const newsArr = [
    {
        name: 'Elon Musk Is a Typical Twitter User, Except for One Thing',
        description: 'The platform has always been the perfect place to indulge your whims. But when you’re the richest man in the world, those whims can grow significantly.'
    },
    {
        name: 'Ohio Senate Race Pits Trump and Son Against Big G.O.P. Group',
        description: 'The Club for Growth has lined up behind Josh Mandel. Donald J. Trump and his eldest son, Donald Jr., are backing J.D. Vance. Tuesday’s outcome will be a crucial test of the former president’s sway.'
    },
    {
        name: 'China’s Covid Lockdown Outrage Tests Limits of Triumphant Propaganda',
        description: 'Public anger and grief over the bungled lockdown in Shanghai is creating a credibility crisis for the country’s leader, Xi Jinping, and his zero Covid policies.'
    },
    {
        name: 'A Long Way Home for ‘Looted’ Art Is Getting Shorter',
        description: 'Curators at major museums are increasingly grappling with a thorny topic: restitution.'
    },
    {
        name: 'McCarthy Feared G.O.P. Lawmakers Put ‘People in Jeopardy’ After Jan. 6',
        description: 'New audio recordings reveal Kevin McCarthy worried that comments by his far-right colleagues could incite violence. He said he would try to rein in the lawmakers, but has instead defended them.'
    }
]
const newNew = {
    name: '',
    description: ''
}
const News = () => {
    const [search,setSearch] = useState('');
    const [news,setNews] = useState(newsArr);
    const [inName,setInName] = useState('');
    const [inDescription,setInDescription] = useState('');

    function replaceNews(){
        setNews([...news].reverse())
    }
    function addNews(){
        setNews([...news,newNew])
    }
    return (
        <div >

            <div className="add">
                <div className="addInpt">
                    <p className='newsAddName'>Enter the title of the news</p>
                <input type='text' placeholder='Add title' className='addNews'
                       onChange={(ev) => {
                           setInName(ev.target.value)
                           newNew.name = inName
                       }}
                />

                    <p className='newsAddName'>Enter a description of the news</p>
                <input type='text' placeholder='Add description' className='addNews'
                       onChange={(ev) => {
                           setInDescription(ev.target.value)
                           newNew.description = inDescription
                       }}
                />

                </div>
                <button className='reqHistoryTitle' onClick={addNews}>Add News</button>
            </div>
            <div className='srchAndRpls'>
            <button className='reqHistoryTitle' onClick={replaceNews}>Replace News</button>
            <input type='text' placeholder='Find news' className='searchNews'
                   onChange={(ev) => setSearch(ev.target.value)}
            />
            </div>

            {news.filter(news =>{
                return news.name.toLowerCase().includes(search.toLowerCase())
            }).map((news) => {
                return (
                    <Item news={news}/>
                )
            })}
        </div>
    )
}
export default News;