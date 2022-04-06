import React from "react";
import { Link } from 'react-router-dom';

class InformationComponent extends React.Component
{
    render(){
        return (
            <main style={{ padding: "1rem 0" }}>
                <div className="information-text">
                    <h2>
                        This is a website that lets you explore the many old and facinating images of Trondheim.
                        Flourishing with interesting history, Trondheim has been a center of norwegian culture throughout
                        the last millenia, and this tool lets users appreciate glimpses of this.
                    </h2>
                </div>
                <div className="information-text">
                    <h2>
                        How to use: Move around the map by dragging the cursor. By clicking on the different markers you will
                        be shown an old image taken at that exact location! while viewing an image you can move directly the next
                        with the arrow markers on each side.
                    </h2>
                </div>

            </main>
        );
    }
}


export default InformationComponent;