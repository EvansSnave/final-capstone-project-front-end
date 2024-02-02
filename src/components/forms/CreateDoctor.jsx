import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import createDoctors from '../../redux/doctors/actions/createDoctors';

const CreateDoctors = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
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
    <form onSubmit={handleSubmit(onSubmit)}>
      {isSuccess&& (<div>Doctor added successfully.</div>)}
      <div className="form-control">
        <label>Name</label>
        <input type="text" name="name" {...register('name', {
          required: 'Name is required', maxLength: { value: 70, message: 'Name is too long' }
        })} />
        {errors.name && (<p className="errorMsg">{errors.name.message}</p>)}
      </div>

      <div className="form-control">
        <label>Age</label>
        <input type="number" name="age" {...register('age', {
          required: 'Age is required', max: { value: 100, message: 'Age cannot be greater than 100' },
          min: { value: 18, message: 'Age must be greater than 17' }
        })} />
        {errors.age && (<p className="errorMsg">{errors.age.message}</p>)}
      </div>

      <div className="form-control">
        <label>City id</label>
        <input type="number" name="cityId" {...register('cityId', {
          required: 'City id is required', max: { value: 7, message: 'City id cannot be greater than 7' },
          min: { value: 1, message: 'City id must be greater than 0' }
        })} />
        {errors.cityId && (<p className="errorMsg">{errors.cityId.message}</p>)}
      </div>

      <div className="form-control">
        <label>User id</label>
        <input type="number" name="userId" {...register('userId', {
          required: 'User id is required', min: { value: 1, message: 'User id must be greater than 0' }
        })} />
        {errors.userId && (<p className="errorMsg">{errors.userId.message}</p>)}
      </div>

      <div className="form-control">
        <label>Description</label>
        <textarea type="text" name="description" {...register('description', {
          required: 'Description is required',
          minLength: { value: 50, message: 'Description must be at least 50 characters long' },
          maxLength: { value: 800, message: 'Description cannot be more than 800 characters long' }
        })} />
        {errors.description && (<p className="errorMsg">{errors.description.message}</p>)}
      </div>

      <div className="form-control">
        <label>Profile image</label>
        <input type="text" name="imageUrl" {...register('imageUrl', {
          required: 'Image url is required', maxLength: { value: 300, message: 'Image url is too long' }
        })} />
        {errors.imageUrl && (<p className="errorMsg">{errors.imageUrl.message}</p>)}
      </div>

      <div className="form-control">
        <label>Price</label>
        <input type="number" name="price" {...register('price', {
          required: 'Price is required', min: { value: 0, message: 'Price cannot be less than 0' }
        })} />
        {errors.price && (<p className="errorMsg">{errors.price.message}</p>)}
      </div>

      <div className="form-control">
        <label>Specialization</label>
        <input type="text" name="specialization" {...register('specialization', {
          required: 'Specialization is required',
          maxLength: { value: 70, message: 'Specialization cannot be more than 70 characters long' }
        })} />
        {errors.specialization && (<p className="errorMsg">{errors.specialization.message}</p>)}
      </div>

      <div className="form-control">
        <label>Studies</label>
        <input type="text" name="studies" {...register('studies', {
          required: 'Studies are required',
          maxLength: { value: 150, message: 'Studies cannot be more than 150 characters long' }
        })} />
        {errors.studies && (<p className="errorMsg">{errors.studies.message}</p>)}
      </div>

      <div className="form-control">
        <label>Submit</label>
        <button type="submit">Create Doctor</button>
      </div>
    </form>
  );
};

export default CreateDoctors;
