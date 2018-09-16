import React, {Component} from 'react';

import './Background.css';

class Background extends Component {
    constructor() {
        super();
        this.state = {
            // 1. Set initial state
            pictures: [],
        };
    }
    // 2. Lifecycle method
    componentDidMount() {
        // 3. API call
        fetch('https://randomuser.me/api/?results=500')
            .then(results => {
                // 4. Results (usually JSON)
                return results.json();
            }).then(data => {
                // 5. Map over data return
                let pictures = data.results.map((pic) => {
                    return (
                        // 6. Set data key
                        <div key={pic.results}>
                            {/* 7. Select what data to return */}
                            <img src={pic.picture.medium} alt="picature" />
                        </div>
                    )
                })
                // 8. set the state with this.setState
                this.setState({ pictures: pictures });
                console.log("state", this.state.pictures);
            })
    }

    render() {
        return (
            <div className="container2">
                <div className="container1">
                    {/* 9. Render the data */}
                    {this.state.pictures}
                </div>
            </div>
        );
    }

}

export default Background;