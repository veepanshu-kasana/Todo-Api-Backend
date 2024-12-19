// Import the model
const Todo = require("../models/Todo");

// Define route handler
exports.deleteTodo = async(request,response) => {
    try {
        const {id} = request.params;
        await Todo.findByIdAndDelete(id);

        response.json({
            success:true,
            message:"Deleted Successfully",
        })
    }
    catch(err) {
        console.error(err);
        response.json(500)
        .json({
            success:false,
            error:err.message,
            message:"Server Error",
        });
    }
}