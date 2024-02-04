import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import createDoctors from '../../redux/doctors/actions/createDoctors';

const CreateDoctors = () => {
  const {
    register, handleSubmit, formState: { errors }, reset,
  } = useForm();
  const [isSuccess, setIsSuccess] = useState(false);

  const dispatch = useDispatch();

  const onSubmit = (data) => {
    dispatch(createDoctors(data));

    setIsSuccess(true);

    setTimeout(() => {
      setIsSuccess(false);
    }, 3000);

    reset();
  };

  return (
    <div className="doctor__cont">
      <form className="doctor" onSubmit={handleSubmit(onSubmit)}>
        <h1 className='doctor__title'>ADD A DOCTOR</h1>
        {isSuccess && (<div className="success">Doctor added successfully.</div>)}
        <div className="doctor__control">
          <input
            placeholder="Name"
            className="doctor__input"
            type="text"
            name="name"
            {...register('name', {
              required: 'Name is required', maxLength: { value: 70, message: 'Name is too long' },
            })}
          />
          {errors.name && (<p className="errors">{errors.name.message}</p>)}
        </div>

        <div className="doctor__control">
          <input
            placeholder="Age"
            className="doctor__input"
            type="number"
            name="age"
            {...register('age', {
              required: 'Age is required',
              max: { value: 100, message: 'Age cannot be greater than 100' },
              min: { value: 18, message: 'Age must be greater than 17' },
            })}
          />
          {errors.age && (<p className="errors">{errors.age.message}</p>)}
        </div>

        <div className="doctor__control">
          <input
            placeholder="City id"
            className="doctor__input"
            type="number"
            name="cityId"
            {...register('cityId', {
              required: 'City id is required',
              max: { value: 7, message: 'City id cannot be greater than 7' },
              min: { value: 1, message: 'City id must be greater than 0' },
            })}
          />
          {errors.cityId && (<p className="errors">{errors.cityId.message}</p>)}
        </div>

        <div className="doctor__control">
          <input
            placeholder="User id"
            className="doctor__input"
            type="number"
            name="userId"
            {...register('userId', {
              required: 'User id is required', min: { value: 1, message: 'User id must be greater than 0' },
            })}
          />
          {errors.userId && (<p className="errors">{errors.userId.message}</p>)}
        </div>

        <div className="doctor__control">
          <textarea
            placeholder="Description"
            className="doctor__text"
            type="text"
            name="description"
            {...register('description', {
              required: 'Description is required',
              minLength: { value: 50, message: 'Description must be at least 50 characters long' },
              maxLength: { value: 800, message: 'Description cannot be more than 800 characters long' },
            })}
          />
          {errors.description && (<p className="errors">{errors.description.message}</p>)}
        </div>

        <div className="doctor__control">
          <input
            placeholder="Image url"
            className="doctor__input"
            type="text"
            name="imageUrl"
            {...register('imageUrl', {
              required: 'Image url is required', maxLength: { value: 300, message: 'Image url is too long' },
            })}
          />
          {errors.imageUrl && (<p className="errors">{errors.imageUrl.message}</p>)}
        </div>

        <div className="doctor__control">
          <input
            placeholder="Price"
            className="doctor__input"
            type="number"
            name="price"
            {...register('price', {
              required: 'Price is required', min: { value: 0, message: 'Price cannot be less than 0' },
            })}
          />
          {errors.price && (<p className="errors">{errors.price.message}</p>)}
        </div>

        <div className="doctor__control">
          <input
            placeholder="Specialization"
            className="doctor__input"
            type="text"
            name="specialization"
            {...register('specialization', {
              required: 'Specialization is required',
              maxLength: { value: 70, message: 'Specialization cannot be more than 70 characters long' },
            })}
          />
          {errors.specialization && (<p className="errors">{errors.specialization.message}</p>)}
        </div>

        <div className="doctor__control">
          <input
            placeholder="Studies"
            className="doctor__input"
            type="text"
            name="studies"
            {...register('studies', {
              required: 'Studies are required',
              maxLength: { value: 150, message: 'Studies cannot be more than 150 characters long' },
            })}
          />
          {errors.studies && (<p className="errors">{errors.studies.message}</p>)}
        </div>

        <button className="doctor__button" type="submit">Create Doctor</button>
      </form>
    </div>
  );
};

export default CreateDoctors;
