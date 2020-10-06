import React, {useState, useRef} from "react";

const EditTodo = ({todo}) => {
  const [description, setDescription] = useState(todo.description);
  const modalContent = useRef();

  const updateDescription = async(e) => {
    e.preventDefault();
    try {
      const body = {description};
      const response = await fetch(`${process.env.REACT_APP_API_HOST}/todos/${todo.todo_id}`,{
        method: 'PUT',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(body)
      })
      
      window.location = '/';
    } catch (err) {
      console.error(err.message);
    }
  };

  const onClickOutsideModal = e => {
    if(modalContent.current.contains(e.target))
      return;
    setDescription(todo.description);
  }

  return (
    <>
      {/* Trigger the modal with a button */}
      <button type="button" className="btn btn-warning" data-toggle="modal" data-target={`#modal-${todo.todo_id}`}>Edit</button>

      {/* Modal */}
      <div id={`modal-${todo.todo_id}`} className="modal fade" role="dialog" onClick={e => onClickOutsideModal(e)}>
        <div className="modal-dialog">

          {/* Modal content */}
          <div className="modal-content" ref={modalContent}>
            <div className="modal-header">
              <h4 className="modal-title">Edit Todo</h4>
              <button type="button" className="close" data-dismiss="modal" onClick={() => setDescription(todo.description)}>&times;</button>
            </div>
            <div className="modal-body">
              <input type="text" className="form-control" value={description} onChange={e => setDescription(e.target.value)} />
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-warning" data-dismiss="modal" onClick={e => updateDescription(e)}>Edit</button>
              <button type="button" className="btn btn-default" data-dismiss="modal" onClick={() => setDescription(todo.description)}>Close</button>
            </div>
          </div>

        </div>
      </div>
    </>
    
  );
}

export default EditTodo;