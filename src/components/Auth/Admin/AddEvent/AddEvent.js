import React from 'react';
import './AddEvent.css';
import { useForm } from "react-hook-form";

const AddEvent = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {

        reset();
    }
    console.log(errors.title);
    return (
        <div className='card'>
            <div className="card-body">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='event-form gap-5'>
                        <div>
                            <label className='mb-2' htmlFor="">Event Title</label><br />
                            {errors.title?.type === 'required' && <span className='error'>Event title is required*</span>}
                            <input className='form-control mb-3' placeholder='Event Title' {...register("title", { required: true })} />

                            <label className='mb-2' htmlFor="">Description</label><br />
                            {errors.eDescription?.type === 'required' && <span className='error'>Event Description is required*</span>}
                            <textarea className='form-control mb-3' placeholder='Event Description' {...register("eDescription", { required: true })} />
                        </div>
                        <div>
                            <label className='mb-2' htmlFor="">Event Date</label>
                            <input className='form-control mb-3' type="date" {...register("eDate")} />
                            <label className='mb-2' htmlFor="">Image Url</label>
                            <input className='form-control mb-3' placeholder='Image Url' type="text" {...register("img")} />
                        </div>
                    </div>
                    <p className='text-end'>
                        <input className='btn btn-primary mt-4' type="submit" />
                    </p>
                </form>
            </div>
        </div>
    );
};

export default AddEvent;