import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import icon from '../../icons/delete.png'

const AllTask = () => {
    const [allTasks, setAllTasks] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/addTask')
            .then(res => res.json())
            .then(data => setAllTasks(data))
    }, []);


    const handleDelete = id => {
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            const url = `http://localhost:5000/addTask/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    const remaining = allTasks.filter(allTask => allTask._id !== id);
                    setAllTasks(remaining);
                })

        }
    }

    return (
        <div className="lg:m-15 md:m-10 relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Task Name
                        </th>

                        <th scope="col" className="px-6 py-3">
                            Description
                        </th>

                        <th scope="col" className="px-6 py-3">
                            <span className="sr-only">Edit</span>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allTasks.map(allTask => {
                            return (
                                <tr key={allTask._id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                                        {allTask.taskName}
                                    </th>

                                    <td className="px-6 py-4">
                                        {allTask.description}
                                    </td>

                                    <td className="px-2 py-2">
                                        <button onClick={() => handleDelete(allTask._id)}> <img src={icon} alt="Delete the Item" /></button>
                                    </td>
                                </tr>
                            )
                        })
                    }

                </tbody>
            </table>

            <div className='text-center my-10'>
                <Link
                    to='/addTask'
                    className='w-full my-5 py-2 px-3 text-white font-bold mt-3 bg-purple-500 sm:w-auto sm:mb-0 items-center'
                >
                    ADD - TASK
                </Link>
            </div>

        </div >
    );
};

export default AllTask;