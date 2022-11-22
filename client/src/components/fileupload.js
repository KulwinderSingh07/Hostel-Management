import Axios from "axios";
const Fileuploader = () => {
  const submitfile = async (e) => {
    e.preventDefault();
    const file = document.getElementsByClassName("file").item(0).value;
    const formdata = new FormData();
    console.log(typeof file);
    await Axios.post("http://localhost:3001/uploadfile", file);
  };
  return (
    <div className="uploader">
      <form encType="multipart/form-data">
        <input type="file" className="file"></input>
        <button
          onClick={(e) => {
            submitfile(e);
          }}
        >
          send
        </button>
      </form>
    </div>
  );
};

export default Fileuploader;
