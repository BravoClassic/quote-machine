import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { brands } from '@fortawesome/fontawesome-svg-core/import.macro'
import stylesButton from '../css/Buttons.module.scss';

class ActionButtons extends React.Component {
    render(){
        return(
            <div className={stylesButton.buttons}>
                   <a href={this.props.tweet} target="_blank" rel="noreferrer" id="tweet-quote"><FontAwesomeIcon icon={brands('twitter')} /></a>
                   <button onClick={this.props.quote} id="new-quote">New Quote</button>
               </div>
        );
    }
}

export default ActionButtons;