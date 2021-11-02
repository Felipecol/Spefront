import react, {Component} from 'react'
import "./pagenotfound.css"


class pagenotfound extends Component{
    render() {
        return(
            <div className="container"
                 data-aos="fade-up"
                 data-aos-duration="1000"
                 data-aos-delay="25"
                 data-aos-easing="ease-in-out-cubic"
            >
                <div className="container2">
                <h1>404</h1>
                <p>page not found</p>
                </div>
            </div>
        )
    }
}

export default pagenotfound;