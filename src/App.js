import './App.css';
import { useState } from 'react';
import {storage} from "./firebase";
import {ref, uploadBytes, listAll, getDownloadURL} from 'firebase/storage';
import {v4} from 'uuid'
import { useEffect } from 'react';
function App() {
  const imageListRef = ref(storage,"/images")
  const uploadImage = () => {
    if (imageUpload==null) return;
    const imageRef = ref(storage, `images/${imageUpload.name + v4() }`);
    uploadBytes(imageRef, imageUpload).then((snapshot)=>{
      getDownloadURL(snapshot.ref).then((url)=>{
        setImgaeList((prev) => [...prev, url]);
      });
    });
  };
  useEffect(() => {
    listAll(imageListRef).then((response) => {
      response.items.forEach((item) =>{
        getDownloadURL(item).then((url)=>{
          setImgaeList((prev)=>[...prev, url]);
        });
      });
    });
  }, []);
  const [imageList, setImgaeList] = useState([]);
  const [imageUpload, setImageUpload] = useState(null);
  return (
    <div className="App">
      <input type="file" onChange={(event)=>{setImageUpload(event.target.files[0]);}}/>
     <button onClick={uploadImage}>Upload Image</button>
    {imageList.map((url)=>{
      return <img src= {url}/>
    })}
    </div>
  );
}

export default App;
