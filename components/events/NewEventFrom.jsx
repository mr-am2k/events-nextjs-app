import { useRef } from 'react';
import Card from '../ui/Card';
import styles from './NewEventForm.module.css'


const NewEventForm = (props) => {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const addressInputRef = useRef();
  const descriptionInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    const eventData = {
      title: enteredTitle,
      image: enteredImage,
      address: enteredAddress,
      description: enteredDescription,
    };

    props.onAddEvent(eventData);
  }

  return (
    <Card>
      <form className={styles.form} onSubmit={submitHandler}>
        <div className={styles.control}>
          <label htmlFor='title'>Event Title</label>
          <input type='text' required id='title' ref={titleInputRef} />
        </div>
        <div className={styles.control}>
          <label htmlFor='image'>Event Image</label>
          <input type='url' required id='image' ref={imageInputRef} />
        </div>
        <div className={styles.control}>
          <label htmlFor='address'>Address</label>
          <input type='text' required id='address' ref={addressInputRef} />
        </div>
        <div className={styles.control}>
          <label htmlFor='description'>Description</label>
          <textarea
            id='description'
            required
            rows='5'
            ref={descriptionInputRef}
          ></textarea>
        </div>
        <div className={styles.actions}>
          <button>Add Event</button>
        </div>
      </form>
    </Card>
  );
}

export default NewEventForm;