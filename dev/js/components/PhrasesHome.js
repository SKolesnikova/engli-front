import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getPhrases} from '../actions/index'; 
import {Link} from 'react-router'; 

class PhrasesHome extends Component{
  componentWillMount(){
    this.props.getPhrases();  
  }

  renderPhrases(){
    return this.props.phrases.map((phrase) => {
      return (
          <li key={phrase.id}>
            <Link to={"phrases/" + phrase.id }>
              <h4> {phrase.title} </h4>
              <h5> {phrase.translate} </h5>
            </Link>
          </li>
      )
    });
  }
  render(){
    return(
      <div className="container">

      <div>
      <Link to="phrases/new" className="btn btn-warning">
      Create Phrase
      </Link> 
      </div>

      Phrases Home Page
      <ul className="list-group">
      {this.renderPhrases()}
      </ul>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {phrases: state.phrases.all}
}

export default connect(mapStateToProps, {getPhrases: getPhrases})(PhrasesHome);
