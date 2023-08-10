import React from "react";
import "../Solution/Solution.scss";
import './Automate.scss'
function Automate() {
    return (
        <div className="solution">
            <div className="header">
                <div className="heading">The Complete Solutions</div>
                <p className="paragraph">
                    Ligula risus auctor tempus magna feugiat lacinia.
                </p>
            </div>
            <div className="left-part">
                <div className="image-wrapper">
                    <img
                        className="img"
                        src="https://dsathemes.com/html/martex_1.1/files/images/img-01.png"
                        alt="girl thinking image"
                    />
                </div>
            </div>

            <div className="right-part">
                <h2 className="subheading">Automate data collection</h2>
                <p className="paragraph">
                    Sodales tempor sapien quaerat ipsum undo congue laoreet
                    turpis neque auctor turpis vitae dolor luctus placerat
                </p>
                <ul className="list">
                    <li className="paragraph">
                        Tempor sapien quaerat an ipsum laoreet purus and sapien
                        dolor an ultrice ipsum aliquam undo congue dolor cursus
                    </li>

                    <li className="paragraph">
                        Cursus purus suscipit vitae cubilia magnis volute
                        egestas vitae sapien turpis ultrice auctor congue magna
                        placerat
                    </li>
                </ul>
                <h2 className="subheading">
                    Increase your productivity with workflow automation
                </h2>
                <p className="paragraph">
                    Tempor sodales sapien quaerat ipsum undo congue laoreet
                    turpis neque auctor turpis vitae dolor luctus placerat magna
                    and ligula cursus purus vitae purus an ipsum suscipit
                </p>
                <h2 className="subheading">Integrate with popular tools</h2>
                <p className="paragraph">
                    Nemo ipsam egestas volute turpis egestas ipsum and purus
                    sapien ultrice an aliquam quaerat ipsum augue turpis sapien
                    cursus congue magna purus quaerat at ligula purus egestas
                    magna cursus undo varius purus magnis sapien quaerat
                </p>
            </div>
            <div className="getting-started">
                <h1 className="heading">Getting started with Martex today!</h1>
                <p className="paragraph">
                    Congue laoreet turpis neque auctor turpis vitae dolor a
                    luctus placerat and magna ligula cursus
                </p>
                <button className="btn">Get Started - it's free</button>
            </div>
        </div>
    );
}

export default Automate;