import React from 'react';
import { useForm } from 'react-hook-form';
import './Shipping.css'
import useAuth from './../../hooks/useAuth';


const Shipping = () => {
    
const onSubmit = data => console.log(data);
const { register, handleSubmit, formState: { errors } } = useForm();
const {user} = useAuth()
    return (
        <div className='shipping-form'>
            <h2>Place Shipping</h2>
           <form onSubmit={handleSubmit(onSubmit)}>
      <input placeholder='name' defaultValue={user.displayName} {...register("name")} />
      <input placeholder='email' defaultValue={user.email} {...register("email")} />
      <input placeholder='city' {...register("city")} />
      
      <input placeholder='phone' {...register("exampleRequired", { required: true })} />
      {errors.exampleRequired && <span className='error'>This field is required</span>}
      
      <input type="submit" />
    </form>
        </div>
    );
};

export default Shipping;