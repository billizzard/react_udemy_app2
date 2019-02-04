import React, {PureComponent} from 'react';

class Life extends PureComponent{
    // 1 get default props

    // 2 set default state
    state = {
        title: 'Life cycles'
    }

    // 3 before render
    // componentWillMount() {
    //     console.log('3 before render');
    // }
    //
    // componentWillUpdate() {
    //     console.log('BEFORE UPDATE');
    // }
    //
    // componentWillUnmount() {
    //     console.log('WILL UNMOUNT');
    // }
    //
    // componentDidUpdate(prevProps, prevState, snapshot) {
    //     console.log('AFTER UPDATE');
    // }
    //
    // shouldComponentUpdate(nextProps, nextState, nextContext) {
    //     if (nextState.title === this.state.title) {
    //         return false;
    //     }
    //
    //     return true;
    // }
    //
    // componentWillReceiveProps(nextProps, nextContext) {
    //     console.log('BEFORE RECIEVE PROPS');
    // }

    // 4 render jsx
    render() {
        console.log('RENDER ');
        return (
            <div>
                <h3>{this.state.title}</h3>
                <div onClick={
                    () => this.setState({
                        title: 'something else'
                    })
                }>CLICK ON CHANGE</div>
            </div>
        )
    }

    // 5 after render
    // componentDidMount() {
    //     console.log('5 after render');
    // }
}

export default Life;