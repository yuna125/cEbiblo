import React from 'react';
import NavBar from './settings.nav.component';
import styled from 'styled-components';
import c2 from '../../assets/images/c2.jpeg'
import styles from './email.module.css';
const Block = styled.div`
	display: block;
`;
function email() {
    return (
        <div style={{ position: "absolute", tleft: "50%", tright: "50%", marginLeft: "300px", marginRight: "300px", marginTop: "100px" }}>


            <table>
                <tr >
                    <td >
                        <h2 className={styles.header}>Your Email</h2>

                    </td>
                    <td>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</td>
                    <td>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</td>
                    <td >
                        <tr style={{ align: "right" }}>
                            <button className="button1">Edit</button>
                        </tr>
                    </td>
                </tr>
                <tr>
                    <input className="emailInput" placeholder='Your email' />
                </tr>
                <tr>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</tr>
                <tr></tr>
                <tr></tr>
                <tr><td><h2>Emails from Ebiblo</h2></td></tr>
                <tr>
                    <td><h3>Ebiblo Digest</h3></td>
                    <tr></tr>

                    <td style={{ marginTop: "20px" }} >
                        <tr style={{ align: "right" }}>
                            <button className="button2">Daily</button>
                            <button className="button3">Weekly</button>

                        </tr>
                    </td>
                    <td style={{ align: "left" }}> <button className="button4">Off</button></td>
                </tr>
                <tr>&emsp;&emsp;</tr>
                <tr>
                    <td>The best books and stories on Ebiblo perosonalized based on your interests,as well as outstanding stories selected by our editors</td>
                </tr>

                <tr>&emsp;&emsp;</tr>
                <tr>
                    <td><h3>Recommended reading</h3></td>
                    <tr></tr>

                    <td style={{ marginTop: "20px" }} >
                        <tr style={{ align: "right" }}>
                            <button className="button2">On</button>
                            <button className="button4">Off</button>
                        </tr>
                    </td>
                </tr>
                <tr>&emsp;&emsp;</tr>
                <tr>
                    <td>Featured stories,columns,and collections that we think you will enjoy based on your reading history</td>
                </tr>

            </table>
        </div>
    )
}
export default email;