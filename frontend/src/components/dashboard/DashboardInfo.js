import React, { Component } from 'react';

class DashboardInfo extends Component {
    render() {
        return (
            <div style={{backgroundColor: "grey", marginTop:"50px"}}>
                <div class="ui three column stackable grid">
                    <div class="column">
                        <div class="ui raised segment">
                        <div class="ui placeholder">
                            <div class="image header">
                            <div class="line"></div>
                            <div class="line"></div>
                            </div>
                            <div class="paragraph">
                            <div class="medium line"></div>
                            <div class="short line"></div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div class="column">
                        <div class="ui raised segment">
                        <div class="ui placeholder">
                            <div class="image header">
                            <div class="line"></div>
                            <div class="line"></div>
                            </div>
                            <div class="paragraph">
                            <div class="medium line"></div>
                            <div class="short line"></div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div class="column">
                        <div class="ui raised segment">
                        <div class="ui placeholder">
                            <div class="image header">
                            <div class="line"></div>
                            <div class="line"></div>
                            </div>
                            <div class="paragraph">
                            <div class="medium line"></div>
                            <div class="short line"></div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default DashboardInfo;