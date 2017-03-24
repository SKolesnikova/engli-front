import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux'; 
import {getPhrase, deletePhrase} from '../actions/index'; 

class SinglePhraseShow extends Component{
  static contextTypes = {
    router: PropTypes.object
  }

  componentWillMount(){
    this.props.getPhrase(this.props.params.id); 
  }

  deleteButtonClick(){
    this.props.deletePhrase(this.props.params.id)
      .then(() => {
        this.context.router.push('/');
      }); 
  }

  render(){
    if(!this.props.phrase){
      return <div> Getting phrase, please wait. </div>;
    }

    return(
      <div className="container">

      <h3>Title: {this.props.phrase.title} </h3>
        <h3>Translate: {this.props.phrase.translate} </h3>

        <button className="btn btn-warning" onClick={this.deleteButtonClick.bind(this)}>
        Delete Phrase
      </button> 

      </div>
    );
  }
}

function mapStateToProps(state){
  return { phrase: state.phrases.phrase};
}


export default connect(mapStateToProps, {getPhrase, deletePhrase})(SinglePhraseShow); 
