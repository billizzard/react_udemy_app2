import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import JSON from './db.json'

// COMPONENTS
import Header from './components/header'
import NewsList from './components/news_list'

class App extends Component {
    state = {
        news: JSON,
        filtered:[]
    }

    getKeyword = (event) => {
        //console.log(event.target.value);
        let keyword = event.target.value;

        let filtered = this.state.news.filter((item) => {
            return item.title.indexOf(keyword) > -1;
        })

        this.setState({
            filtered: filtered
        })
    }

    render() {
        let newsFiltere = this.state.filtered;
        let newsWhole = this.state.news;

        return (
            <div>
                <Header keywords={this.getKeyword}/>
                <NewsList news={newsFiltere.length === 0 ? newsWhole : newsFiltere}/>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA

