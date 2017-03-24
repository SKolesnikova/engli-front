import React, {Component, PropTypes} from 'react';
import {reduxForm} from 'redux-form';
import {createPhrase} from '../actions/index';


class NewPhrase extends Component{

    static contextType ={
        router: PropTypes.object
    }

    onSubmit(props){
        this.props.createPhrase(props)
            .then(() => {
                this.context.router.push('/');
            });
    }

  render(){
      const {fields:{title, translate}, handleSubmit} = this.props;
    return(
        <div className="container">

          <h1> Create a new phrase </h1>

          <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>

            <div className="form-group">
              <label>Title</label>
              <input type="text" className="form-control" {...title} />
                <label>Translate</label>
                <input type="text" className="form-control" {...translate} />
            </div>
            <button type="submit" className="btn btn-success">Create</button>
          </form>

        </div>
    );
  }
}

export default reduxForm({
  form: 'NewPhraseForm',
  fields: ['title', 'translate']
}, null, {createPhrase})(NewPhrase);

