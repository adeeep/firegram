import React from 'react';

const UploadForm=()=> {
    const changehandler= (e) => {
        console.log("changes done");
        let selected=e.target.files[0];
        console.log(selected)
    }

    return (
      

        <form>
            <input type="file" onChange={changehandler} />
        </form>
    );
}

export default UploadForm;