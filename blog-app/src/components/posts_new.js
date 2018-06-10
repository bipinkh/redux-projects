import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import { connect } from "react-redux";
import { createPost } from '../actions/index';
import {Link} from 'react-router-dom';


class PostsNew extends Component{

  render(){

    const { fields: {title, categories, content }, handleSubmit, pristine, reset, submitting } = this.props;

    return(
      <form onSubmit={handleSubmit(this.props.createPost)} >

        <h3> Create A New Post </h3>

        <div className={`form-group title.touched && title.invalid ? 'has-danger' : '' `} >
          <label> Title </label>
          <Field
           className="form-control"
           name="title"
           component="input"
           type="text"
         />
        </div>


        <div className="form-group">
          <label> Categories </label>
          <Field
          className="form-control"
           name="categories"
           component="input"
           type="text"
         />
        </div>


        <div className="form-group">
          <label> Content </label>
          <Field
          className="form-control"
           name="content"
           component="input"
           type="textarea"
         />
          </div>

          <button type="submit" className="btn btn-primary btn-success" disabled={pristine || submitting}>
          Submit  </button>
          <button type="button" className="btn btn-secondary" disabled={pristine || submitting} onClick={reset}>
            Clear Values </button>

          <Link to='/' className='btn btn-danger' > Cancel </Link>
      </form>
    );
    }
}


    // function validate(values){
    //   const errors = {};
    //   if(!values.title){  errors.title='Enter a title';   }
    //   return errors;
    // }


//reduxForm is same as connect in functionality except this one extra param
//connect: 1st param : mapStateToProps, 2nd param : mapDispatchToProps
// export default reduxForm({
//   form: 'PostNewForm',
//   fields: ['title','categories','content']
// })(PostsNew);

export default connect(null, {createPost})(reduxForm({
  form: 'PostNewForm',    //unique name for the form
  fields: ['title','categories','content'],
  // validate  // function to check validation
})(PostsNew));
