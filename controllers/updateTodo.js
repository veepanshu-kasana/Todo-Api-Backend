// Import the model
const Todo = require("../models/Todo");

// Define Route Handler
exports.updateTodo = async(request,response) => {
    try {
        const {id} = request.params;
        const{title, description} = request.body;

        const todo = await Todo.findByIdAndUpdate(
            {_id:id},
            {title, description, updatedAt:Date.now()},
        )

        response.status(200).json({
            success:true,
            data:todo,
            message:`Updated Successfully`,
        })
    }
    catch(err) {
        console.error(err);
        response.status(500).json({
            success:false,
            error:err.message,
            message:'Server Error',
        });
    }
}