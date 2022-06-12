import React from 'react';
import styles from '../css/Quote.module.scss';
import QuoteContent from './QuoteContent';
import ActionButtons from './ActionButtons';
class Quote extends React.Component{
    constructor(props){
        super(props);
        this.state={
            quoteText:'',
            quoteAuthor: ''
        };
        this.getQuote = this.getQuote.bind(this);
    }
    getQuote(){
        fetch('https://type.fit/api/quotes').then(res => res.json())
            .then((response) =>{
                const num = Math.floor(Math.random()* response.length);
                this.setState({quoteText: response[num].text, quoteAuthor:response[num].author});
        }).catch( (error) => {
            console.error(error);
        });
    }

    componentDidMount(){
        this.getQuote();
    }

    render(){
        const tweetUrl = `https://twitter.com/intent/tweet?text=${this.state.quoteText+"%0D -"+this.state.quoteAuthor}`;
        return (
           <div id="quote-box" className={styles.quote_box}>
               <QuoteContent quoteText={this.state.quoteText} quoteAuthor={this.state.quoteAuthor} />
               <ActionButtons tweet={tweetUrl} quote={this.getQuote}/>
           </div>
        )
    }
}
export default Quote;