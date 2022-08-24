import React from 'react'
import DeleteIcon from "@mui/icons-material/Delete";
import { useNew } from '../../../context/NewContext';
import { baseService } from '../../../api/baseService';
const RemoveNew = ({value}) => {
const {  setNewsValue, newsValue } = useNew();

const deleteNeww = (id) => {
   baseService.delete("/news/",id).then((res)=>{
          setNewsValue(!newsValue)
      })
};


  return (
    <div>
      <button
        onClick={() => deleteNeww(value)
    }
        className="category-remove"
      >
        <DeleteIcon />
      </button>
    </div>
  );
}

export default RemoveNew
