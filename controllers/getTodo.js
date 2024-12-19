// Import the model
const { response } = require("express");
const Todo = require("../models/Todo");

// Define Route Handler
exports.getTodo = async(request,response) => {
    try {
        // Fetch all todo items from database
        const todos = await Todo.find({});

        // Response
        response.status(200)
        .json({
            success:true,
            data:todos,
            message:"Entire Todo Data is fetched",
        });
    }
    catch(err) {
        console.error(err);
        response.status(500)
        .json({
            success:false,
            error:err.message,
            message:'Server Error',
        });
    }
} 

exports.getTodoById = async(request,response) => {
    try {
        // Extract todo items basis on Id
        const id = request.params.id;
        const todo = await Todo.findById( {_id:id} );

        // Data for given id not found
        if(!todo) {
            return response.status(404).json({
                success:false,
                message:"No data found with given Id",
            })
        }
        // Data for given id found
        response.status(200).json({
            success:true,
            data:todo,
            message:`Todo ${id} data successfully fetched`,
        })
    }
    catch(err) {
        console.error(err);
        response.status(500)
        .json({
            success:false,
            error:err.message,
            message:"Server error",
        });
    }
}