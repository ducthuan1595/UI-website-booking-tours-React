///////////////////////////////
import styled from './Form.module.css';

function Form () {
  return (
    <div className={styled['form-subscribe']}>
      <form action="">
        <h2 className={styled['form-title']}>Save time, save money!</h2>
        <span className={styled['form-desc']}>Sign up and we'll send the best deals to you</span>
        <div className={styled['form-content']}>
          <input className={styled['form-input']} type="text" placeholder='Your email' />
          <button className={styled['form-btn']}>Subscribe</button>
        </div>
      </form>
    </div>
  )
}

export default Form;