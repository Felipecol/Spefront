import React, {Component} from 'react';
import "./FooterComp.css"
import { MDBFooter, MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';

class FooterComp extends Component {
    render() {
        return (
            <div>
                <MDBFooter backgroundColor='light' className='text-center text-lg-left'>
                    <div className='footes text-center p-3' style={{ backgroundColor: 'white' }}>
                        <div className="skaterfou">
                            <lottie-player src="https://assets10.lottiefiles.com/packages/lf20_HrNNmm.json"  background="rgba(0, 0, 0, 0)"  speed="1"  styles="width: 50px; height: 50px;"  loop  autoplay></lottie-player>
                        </div>
                        <b>
                        &copy; {new Date().getFullYear()}{' '}
                        <a className='text-dark' href='https://mdbootstrap.com/'>
                           &#123;s&#x7D;katalog
                        </a>
                        </b>
                    </div>
                </MDBFooter>
            </div>
        );
    }
}

export default FooterComp;