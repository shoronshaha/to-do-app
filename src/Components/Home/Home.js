import React from 'react';
import axios from 'axios';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../Firebase/firebase.init';
const Home = () => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    if (user) {
        console.log(user);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const addTask = {
            taskName: event.target.taskName.value,
            description: event.target.description.value,
        };
        console.log(addTask);
        await axios.post('https://sheltered-escarpment-49962.herokuapp.com/addTask', addTask)
            .then(response => {
                const { data } = response;
                if (data.insertedId) {
                    toast('your item is added !!');
                    event.target.reset();
                }
            })
        navigate('/allTask')
    }

    // const handelStrikeThrough = async (event) => {
    //     event.preventDefault();
    //     const proceed = window.confirm('Are you sure?');
    //     if (proceed) {

    //     }
    //     const addTask = {
    //         taskName: event.target.taskName.value,
    //         description: event.target.description.value,
    //     };

    // }


    return (
        <div className="mt-20 w-full">
            <h1 className='text-[3vw] text-center font-bold'>ADD YOUR TASK</h1>
            <div className="bg-[#a4c3b2] p-10 md:w-3/4 lg:w-1/2 mx-auto mb-10">
                <form onSubmit={handleSubmit}>
                    <div className="flex items-center mb-5">
                        <label className="inline-block w-40 mr-6 text-right  text-black">
                            Task Name
                        </label>
                        <input
                            type="text"
                            name="taskName"
                            placeholder="Task Name"
                            className="p-2 flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 
                      text-gray-600 placeholder-gray-400
                      outline-none"
                        />

                    </div>



                    <div className="flex items-center mb-5">
                        <label className="inline-block w-40 mr-6 text-right  text-black">
                            Description
                        </label>
                        <input
                            type="textArea"
                            name="description"
                            placeholder="Descriptions"
                            className="p-2 flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 
                      text-gray-600 placeholder-gray-400
                      outline-none"
                        />
                    </div>



                    <div className="text-right grid grid-cols-1 lg:grid-cols-2 gap-4">
                        <button type='submit' className="py-3 px-8 bg-orange-600 text-white font-bold uppercase">Add - Task</button>
                        <button type='button' className="py-3 px-8 bg-blue-600 text-white font-bold uppercase">complete</button>
                    </div>

                </form>
            </div>

        </div>
    );
};

export default Home;