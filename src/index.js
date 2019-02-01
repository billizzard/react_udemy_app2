import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import JSON from './db.json'

// COMPONENTS
import Header from './components/header'
import NewsList from './components/news_list'

class App extends Component {
    state = {
        news: JSON
    }

    render() {
        console.log(this.state.news);
        return (
            <div>
                <Header/>
                <NewsList news={this.state.news}/>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA

