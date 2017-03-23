import React, {Component} from "react";
import getStyles from "./styles";
const image = require('../../images/me.jpg');

import * as scss from './scss/root.scss';


class Information extends Component {
    render() {
        const styles = getStyles(this.context);

        return (
            <section style={styles.test}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-2">
                            <div style={styles.imgBlock}>
                                <img style={styles.img} src={image} alt="image"/>
                            </div>
                        </div>
                        <div className="col-md-10">
                            <div style={styles.headerText}>
                                HEY GUYS! THIS IS MY
                            </div>
                            <div style={styles.what}>
                                PAGE ONE CARD-SIMPLE VCARD AND RESUME PSD TEMPLATE
                            </div>
                            <div style={styles.how}>
                                CLEAN, SIMPLE, MINIMALIS AND ALSO FEEL FREE THE QUALITY OF THE TEMPLATE!
                            </div>
                            <div style={styles.text}>
                               <div style={styles.letter}>L</div> orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <div style={styles.infoMainBlock}>
                                NAME:<span style={styles.infoText}> Ruzhickii Alexander</span>
                                <div style={styles.line}></div>
                            </div>
                            <div style={styles.infoBlock}>
                                PHOME:<span style={styles.infoText}> +380631689372</span>
                                <div style={styles.line}></div>
                            </div>
                            <div style={styles.infoBlock}>
                                WEB:<span style={styles.infoText}> ruzhickii-sasha@mail.ru</span>
                                <div style={styles.line}></div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div style={styles.infoMainBlock}>
                                BIRTH:<span style={styles.infoText}> July 21,1987</span>
                                <div style={styles.line}></div>
                            </div>
                            <div style={styles.infoBlock}>
                                FAX:<span style={styles.infoText}> NONE</span>
                                <div style={styles.line}></div>
                            </div>
                            <div style={styles.infoBlock}>
                                HIRE:<span style={styles.infoText}> AVAILABLE</span>
                                <div style={styles.line}></div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div style={styles.infoMainBlock}>
                                HOBBY:<span style={styles.infoText}> DEVELOPMENT</span>
                                <div style={styles.line}></div>
                            </div>
                            <div style={styles.infoBlock}>
                                EMAILE:<span style={styles.infoText}> ruzhickiisasha@gmail.com</span>
                                <div style={styles.line}></div>
                            </div>
                            <div style={styles.infoBlock}>
                                ADDRESS:<span style={styles.infoText}> KIEV</span>
                                <div style={styles.line}></div>
                            </div>
                            <div></div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Information;