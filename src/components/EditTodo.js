import React, {useState} from "react";

const EditTodo = ({todo}) => {
  const [description, setDescription] = useState(todo.description);

  return (
    <>
      {/* Trigger the modal with a button */}
      <button type="button" className="btn btn-warning" data-toggle="modal" data-target={`#modal-${todo.todo_id}`}>Edit</button>

      {/* Modal */}
      <div id={`modal-${todo.todo_id}`} className="modal fade" role="dialog">
        <div className="modal-dialog">

          {/* Modal content */}
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal">&times;</button>
              <h4 className="modal-title">Modal Header</h4>
            </div>
            <div className="modal-body">
              <input type="text" className="form-control" defaultValue={description} />
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-warning" data-dismiss="modal">Edit</button>
              <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
            </div>
          </div>

        </div>
      </div>
    </>
    
  );
}

export default EditTodo;