import React from 'react'

function ConfirmModal({handleYes,handlClose}) {
  return (
    <>
    {/* <button class="btn btn-default" id="btn-confirm">Confirm</button> */}
    <div className="modal-dialog modal-sm z-index-master   position-absolute headline" >
    <div className="modal-content">
      <div className="modal-header">
        <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={handlClose}><span aria-hidden="true">&times;</span></button>
        <p className="modal-title ml-3 " id="myModalLabel">Sure Are you want cancel the form</p>
      </div>
      <div className="modal-footer">
        <button type="button" className=" btn-outline-primary" id="modal-btn-si" onClick={handleYes} >Yes</button>
        <button type="button" className="btn-outline-primary "  id="modal-btn-no" onClick={handlClose}>No</button>
      </div>
    </div>
  </div>


    </>
  )
}

export default ConfirmModal