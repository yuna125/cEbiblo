import React from 'react';
//import NavBar from './settings.nav.component';
import styled from 'styled-components';
import c1 from '../../assets/images/c1.jpeg'
import c2 from '../../assets/images/c2.jpeg'
import c3 from '../../assets/images/c3.jpeg'
//import styles from './settings.section.module.css'
import { Link } from 'react-router-dom';
const Block = styled.div`
	display: block;
`;
function connect() {
    return (
        <div style={{ position: "absolute", tleft: "50%", tright: "50%", marginLeft: "300px", marginRight: "300px", marginTop: "100px" }}>

            <table>
                <tr >
                    <td >
                        <tr><b>Connect to Facebook</b></tr>
                        <tr style={{ fontSize: '8px', color: "grey" }}>We will never post toFacebook or message your friends&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</tr>
                        <tr style={{ fontSize: '8px', color: "grey" }}>without your permission.</tr>
                        <tr>&emsp;&emsp;&emsp;&emsp;&emsp;</tr>
                    </td>
                    <td >
                        <tr style={{ align: "right" }}>
                            <Link to={'../../../privacy'}>
                                <img src={c1} alt="c1" style={{ width: "170px", height: "30" }} />
                            </Link>
                        </tr>
                    </td>
                </tr>


                <tr >
                    <td >
                        <tr ><b>Connect to Apple</b></tr>
                        <tr style={{ fontSize: '8px', color: "grey" }}>We will never post to Apple or message your friends</tr>
                        <tr style={{ fontSize: '8px', color: "grey", borderCollapse: "separate", borderSpacing: "0px 50px" }}>without your permission.</tr>
                        <tr>&emsp;&emsp;&emsp;&emsp;&emsp;</tr>
                    </td>

                    <td >
                        <tr>
                            <Link to={'../../../privacy'}>
                                <img src={c2} alt="c2" style={{ width: "170px", height: "30" }} />
                            </Link>
                        </tr>
                    </td>

                </tr>


                <tr >
                    <td >
                        <tr ><b>Connect to Google</b></tr>
                        <tr style={{ fontSize: '8px', color: "grey" }}>We will never post to Google or message your friends</tr>
                        <tr style={{ fontSize: '8px', color: "grey", borderCollapse: "separate", borderSpacing: "0px 50px" }}>without your permission.</tr>

                    </td>

                    <td >
                        <tr>
                            <Link to={'../../../privacy'}>
                                <img src={c3} alt="c3" style={{ width: "170px", height: "30" }} />
                            </Link>
                        </tr>
                    </td>
                </tr>
            </table>
        </div>
    )
}
export default connect;