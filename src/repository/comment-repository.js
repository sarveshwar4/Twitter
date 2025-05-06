import CrudRepository from "./crud-repository.js";
import Comment from "../models/comment.js";
class CommentRepository extends CrudRepository{
   constructor(){
    super(Comment);
   }
   async get(id){
    try {
        const response = await Comment.findById(id);
        return response;
    } catch (error) {
        console.log('Something went wromg in crud layer');
        throw error;
    }
}
}

export default CommentRepository;