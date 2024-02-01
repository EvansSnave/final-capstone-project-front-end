import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import createDoctors from '../../redux/doctors/actions/createDoctors';

const CreateDoctors = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const dispatch = useDispatch();

  const onSubmit = (data) => {
    dispatch(createDoctors(data));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-control">
        <label>Name</label>
        <input type="text" name="name" {...register('name')} />
      </div>

      <div className="form-control">
        <label>Age</label>
        <input type="number" name="age" {...register('age')} />
      </div>

      <div className="form-control">
        <label>City id</label>
        <input type="number" name="cityId" {...register('cityId')} />
      </div>

      <div className="form-control">
        <label>User id</label>
        <input type="number" name="userId" {...register('userId')} />
      </div>

      <div className="form-control">
        <label>Description</label>
        <textarea type="text" name="description" {...register('description')} />
      </div>

      <div className="form-control">
        <label>Profile image</label>
        <input type="text" name="imageUrl" {...register('imageUrl')} />
      </div>

      <div className="form-control">
        <label>Price</label>
        <input type="number" name="price" {...register('price')} />
      </div>

      <div className="form-control">
        <label>Specialization</label>
        <input type="text" name="specialization" {...register('specialization')} />
      </div>

      <div className="form-control">
        <label>Studies</label>
        <input type="text" name="studies" {...register('studies')} />
      </div>

      <div className="form-control">
        <label>Submit</label>
        <button type="submit">Create Doctor</button>
      </div>
    </form>
  );
};

export default CreateDoctors;
