import React from 'react'
import { Field, reduxForm } from 'redux-form/immutable'

const SimpleForm = (props) => {
  const { handleSubmit, pristine, reset, submitting } = props
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>First Name</label>
          <Field name="name" component="input" type="text" placeholder="First Name"/>
      </div>
      <div>
        <label>Email</label>
          <Field name="email" component="input" type="email" placeholder="Email"/>
      </div>
      <div>
        <label>Sex</label>
          <label><Field name="sex" component="input" type="radio" value="male"/> Male</label>
          <label><Field name="sex" component="input" type="radio" value="female"/> Female</label>
      </div>
      <div>
        <label>Favorite Color</label>
          <Field name="favoriteColor" component="select">
            <option></option>
            <option value="ff0000">Red</option>
            <option value="00ff00">Green</option>
            <option value="0000ff">Blue</option>
          </Field>
      </div>
      <div>
        <label htmlFor="employed">Employed</label>
          <Field name="employed" id="employed" component="input" type="checkbox"/>
      </div>
      <div>
        <label>Notes</label>
          <Field name="notes" component="textarea"/>
      </div>
      <div>
        <button type="submit" disabled={pristine || submitting}>提交</button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>清除</button>
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'simple'
})(SimpleForm)