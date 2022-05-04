import React from "react";
class News extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            flag: false,
            nan: '',
            ser: '',
            news: [
                {
                    name:'Elon Musk Is a Typical Twitter User, Except for One Thing',
                    description: 'The platform has always been the perfect place to indulge your whims. But when you’re the richest man in the world, those whims can grow significantly.'
                },{
                    name:'Ohio Senate Race Pits Trump and Son Against Big G.O.P. Group',
                    description: 'The Club for Growth has lined up behind Josh Mandel. Donald J. Trump and his eldest son, Donald Jr., are backing J.D. Vance. Tuesday’s outcome will be a crucial test of the former president’s sway.'
                },{
                    name:'China’s Covid Lockdown Outrage Tests Limits of Triumphant Propaganda',
                    description: 'Public anger and grief over the bungled lockdown in Shanghai is creating a credibility crisis for the country’s leader, Xi Jinping, and his zero Covid policies.'
                },{
                    name:'A Long Way Home for ‘Looted’ Art Is Getting Shorter',
                    description: 'Curators at major museums are increasingly grappling with a thorny topic: restitution.'
                },{
                    name:'McCarthy Feared G.O.P. Lawmakers Put ‘People in Jeopardy’ After Jan. 6',
                    description: 'New audio recordings reveal Kevin McCarthy worried that comments by his far-right colleagues could incite violence. He said he would try to rein in the lawmakers, but has instead defended them.'
                }
            ]
        }
        this.replaceNews = this.replaceNews.bind(this);
    }

    replaceNews(){
        this.setState({
            news: this.state.news.reverse()
        })
    }

    render() {
        let newNewsArr = this.state.news.slice(1);
        let firstEl = this.state.news[0]
        return(
            <>
                <button className='reqHistoryTitle' onClick={()=>this.replaceNews()}>Replace News</button>
                <input type='text'
                       placeholder='Find news'
                       className='searchNews'
                       onChange={(ev) => {
                           this.setState({ ser: ev.target.value })
                       }}
                />

                <p className='newsName'>{firstEl.name}</p>
                <p className='newsDescription'>{firstEl.description}</p>

                {newNewsArr.filter(news =>{
                    return news.name.toLowerCase().includes(this.state.ser.toLowerCase())
                }).map((news) => {
                    return (
                        <div >
                            <p className='newsName'>{news.name}</p>
                            <button className='showDescription' onClick={() => {
                                // namNews = news.indexOf(news.description)
                                console.log(news.description)
                                this.setState((state)=>({flag: !state.flag}))

                            }}>{this.state.nan}</button>
                            {this.state.flag && <p className='newsDescription'>{news.description}</p>}
                        </div>
                    )
                })}
            </>
        )
    }
}
export default News;