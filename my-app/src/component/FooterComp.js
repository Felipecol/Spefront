import React, {Component} from 'react';
import "./FooterComp.css"
import { MDBFooter, MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';

class FooterComp extends Component {
    render() {
        return (

            <div
                data-aos="zoom-in"
                data-aos-delay="50"
                data-aos-easing="ease-in-out-cubic"
            >
                {/*---------------------------------------- FOOTER -----------------------------------------*/}
                <MDBFooter backgroundColor='light' className='text-center text-lg-left'>
                    <div className='footes text-center p-3' style={{ backgroundColor: 'white' }}>
                        <div className="skaterrfou">
                            <lottie-player alt="logo skater" src="https://assets10.lottiefiles.com/packages/lf20_HrNNmm.json"  background="rgba(0, 0, 0, 0)"  speed="1"  styles="width: 50px; height: 50px;"  loop  autoplay></lottie-player>
                        </div>
                        <b>
                        &copy; {new Date().getFullYear()}{' '}
                        <a className='text-dark' href='#'>
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