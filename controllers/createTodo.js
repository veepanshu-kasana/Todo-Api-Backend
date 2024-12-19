// Import the Model
const Todo = require('../models/Todo');

// Define Route Handler
exports.createTodo = async(request,response) => {
    try{
        // Extract title and description from request body
        const {title,description} = request.body;

        // Create a new Todo Obj and insert in DB
        const responseObj = await Todo.create({title,description});

        // Send a json response with a success flag
        response.status(200).json(
            {
                success:true,
                data:responseObj,
                message:'Entry Created Successfully'
            }
        );
    }
    catch(error){
        console.error(error);
        console.log(error);
        response.status(500)
        .json({
            success:false,
            data:"Internal Server Error",
            message:error.message,
        })
    }
}