import React from 'react';

class QuoteContent extends React.Component {
    render() {
        return (
           
            <div id="quote-content" >
               <p id="text">{this.props.quoteText}</p>
               <p id="author">-{this.props.quoteAuthor}</p>
           </div>
        )
    }
}

export default QuoteContent;